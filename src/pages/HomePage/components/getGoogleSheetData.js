import { google } from 'googleapis';
import { readFile } from 'fs/promises';

async function getGoogleSheetData() {
  const auth = new google.auth.GoogleAuth({
    keyFile: 'MCGI-CHRISTCHURCH-Front-End\mcgifeastprinting-67f8a9bfbbd4.json', // Update with your credentials file path
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });

  const spreadsheetId = '1hLJQ_XJRgvb2W1kYpzZrafITXLRu6vtiim_yS8hnoyU'; // Update with your spreadsheet ID
  const range = 'Members!A:C'; // Update with your sheet name and range

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  return response.data.values;
}

export default getGoogleSheetData;