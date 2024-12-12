const { google } = require('googleapis');

async function getGoogleSheetData() {
const sheets = google.sheets('v4');
const apiKey = process.env.GOOGLE_SHEETS_API_KEY; // Use the API key from .env
const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID; // Use the spreadsheet ID from .env
const range = process.env.GOOGLE_SHEETS_RANGE;// Adjust the range as needed

  try {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
      key: apiKey,
    });

    const rows = response.data.values;
    if (rows.length) {
      console.log('Data retrieved from Google Sheets:');
      return rows;
    } else {
      console.log('No data found.');
      return [];
    }
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    throw error;
  }
}

module.exports = getGoogleSheetData;