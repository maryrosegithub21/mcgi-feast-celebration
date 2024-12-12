const getGoogleSheetData = require("../services/googleSheetsService");

const getLoginMember = async (req, res) => {
  console.log(`/api/login/ endpoint was hit🎯`);
  console.log(req.body);

  try {
    const sheetData = await getGoogleSheetData();
    console.log('Google Sheets Data:', sheetData);

    // Find the user in the Google Sheets data
    const user = sheetData.find(row => 
      row[0] === req.body.churchId && 
      row[1] === req.body.email && 
      row[2] === req.body.password
    );

    if (!user) {
      return res.status(401).json({ errorMessage: "Invalid credentials." });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.error('Error retrieving Google Sheets data:', error);
    return res.status(500).json({ errorMessage: "An error occurred while fetching data from Google Sheets." });
  }
};

module.exports = { getLoginMember };