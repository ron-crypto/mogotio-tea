const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

// Replace these with your Daraja API credentials
const consumerKey = 'ePGO1IuZZAyjArD1ENWX3wnRiqxGIGoAA8JHyMNZEkGHsUyQ';
const consumerSecret = 'BUaZdpVJa8Rsa1JWO8nxTNeNeDg3t0mKKTBRtqxi725dDUIwogUCjxGIpC6XF3jR';
const shortcode = '174379'; // Updated shortcode as per user request
const passkey = 'bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919';
const callbackURL = 'https://53e3b1de64f5.ngrok-free.app/api/callback'; // Your callback URL

// Function to get OAuth token
async function getAccessToken() {
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  try {
    const response = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
      headers: {
        Authorization: `Basic ${auth}`
      }
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error.response.data);
    throw error;
  }
}

// Function to normalize phone number to 2547xxxxxxxx format
function normalizePhoneNumber(phoneNumber) {
  // Remove any non-digit characters
  let cleaned = phoneNumber.replace(/\D/g, '');
  // If starts with 0, replace with 254
  if (cleaned.startsWith('0')) {
    cleaned = '254' + cleaned.slice(1);
  }
  // If starts with +254, remove +
  if (cleaned.startsWith('254')) {
    return cleaned;
  }
  // If already 254, return as is
  return cleaned;
}

// Function to initiate STK Push
async function initiateSTKPush(phoneNumber, amount, accessToken) {
  const normalizedPhone = normalizePhoneNumber(phoneNumber);
  const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
  const password = Buffer.from(shortcode + passkey + timestamp).toString('base64');

  const stkPushRequest = {
    BusinessShortCode: shortcode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: 'CustomerPayBillOnline',
    Amount: amount,
    PartyA: normalizedPhone,
    PartyB: shortcode,
    PhoneNumber: normalizedPhone,
    CallBackURL: callbackURL,
    AccountReference: 'motigo Tea',
    TransactionDesc: 'Payment for motigo Tea products'
  };

  try {
    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', stkPushRequest, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error initiating STK Push:', error.response.data);
    throw error;
  }
}

app.post('/api/payment', async (req, res) => {
  const { phoneNumber, amount } = req.body;
  if (!phoneNumber || !amount) {
    return res.status(400).json({ error: 'phoneNumber and amount are required' });
  }

  try {
    const accessToken = await getAccessToken();
    const stkResponse = await initiateSTKPush(phoneNumber, amount, accessToken);
    res.json(stkResponse);
  } catch (error) {
    res.status(500).json({ error: 'Failed to initiate payment' });
  }
});

// Callback endpoint to handle Daraja payment result
app.post('/api/callback', (req, res) => {
  const callbackData = req.body;
  console.log('Payment callback received:', callbackData);

  // Process the callback data here
  // You can save the transaction details to a database or log them

  // Respond to Daraja
  res.json({ ResultCode: 0, ResultDesc: 'Success' });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
