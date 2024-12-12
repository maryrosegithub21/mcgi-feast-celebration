// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/GoogleSheets.module.css';
import styles from '../components/GoogleSheets.module.css';
import { generatePdf } from './GeneratePdf';

const GoogleSheets = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.REACT_APP_SPREADSHEET_ID}/values/${process.env.REACT_APP_RANGE}?key=${process.env.REACT_APP_API_KEY}`;
      try {
        const response = await axios.get(url);
        const allData = response.data.values;

        // Filter data to include only columns from "timestamp" to "delivered"
        const filteredColumns = allData.map(row => row.slice(0, 16)); // Adjust indices as needed
        setData(filteredColumns);
      } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
       
      }
    };

    fetchData();
  }, []);


  
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      alert('Please type in the Last Name or First name you are looking for?');
      return;
    }
    const query = searchQuery.toLowerCase();
    const filtered = data.filter(row => {
      const firstName = row[1].toLowerCase();
      const lastName = row[2].toLowerCase();
      return firstName.includes(query) || lastName.includes(query);
    });
    setFilteredData(filtered);
    setNoDataFound(filtered.length === 0);
  };

  const handleRowClick = (rowData, rowIndex) => {
    setSelectedRowData(rowData);
    setSelectedRowIndex(rowIndex);
    console.log('You Clicked:', rowData);

    const firstName = rowData[1];
    const lastName = rowData[2];
    alert(`You've clicked: ${firstName} ${lastName}`);
  };

  const handlePassToGoogleDocs = () => {
    if (selectedRowData) {
      const lastName = selectedRowData[2];
      const confirmationMessage = `Are you sure you want to print the information of ${lastName}?`;
      if (window.confirm(confirmationMessage)) {
        const rowDataToPass = {
          date: selectedRowData[0],
          firstName: selectedRowData[1],
          lastName: selectedRowData[2],
          email: selectedRowData[3],
          contact: selectedRowData[4],
          mcgiChurchMember: selectedRowData[5],
          religion: selectedRowData[6],
          newReturning: selectedRowData[7],
          address: selectedRowData[8],
          gender: selectedRowData[9],
          qrCode: selectedRowData[11],
        };

        generatePdf(rowDataToPass)
          .then(() => {
            alert('PDF generated successfully!');
            let url;
            if (rowDataToPass.newReturning === "New Registrant") {
              url = `https://fs.mcgi.org/recipients/?user_firstname=${encodeURIComponent(rowDataToPass.firstName)}&user_lastname=${encodeURIComponent(rowDataToPass.lastName)}&contact_number=${encodeURIComponent(rowDataToPass.contact)}&contact_address=${encodeURIComponent(rowDataToPass.address)}&wp-submit=Search&action=retrieverecipient`;
            } else if (rowDataToPass.newReturning === "Returning") {
              url = `https://fs.mcgi.org/recipients/?recipient_firstname=${encodeURIComponent(rowDataToPass.firstName)}&recipient_lastname=${encodeURIComponent(rowDataToPass.lastName)}&qr_number=${encodeURIComponent(rowDataToPass.qrCode)}&action=retrieverecipient`;
            }
            if (url) {
              window.location.href = url;
            }
          })
          .catch((error) => {
            console.error('Error generating PDF:', error);
            alert('An error occurred while generating the PDF. Please try again.');
          });
      }
    } else {
      console.log('No row data selected.');
      alert('No data has been selected. Please select you want to print.');
    }
  };

  return (
    <div>
      {/* {isAuthorized ? ( */}
        <>
          <h1>Members Church Of God Feast Guest Information</h1>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by First Name or Last Name"
          />
          <button className={styles['print-button']} onClick={handleSearch}>Search</button>
          <button className={styles['print-button']} onClick={handlePassToGoogleDocs}>Print Data</button>
          {noDataFound && <h1>No Data Found</h1>}
          <div className={styles['table-container']}>
            <table className={styles['data-table']}>
              <thead>
                <tr>
                  {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {(filteredData.length > 0 ? filteredData : data.slice(1)).map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    onClick={() => handleRowClick(row, rowIndex)}
                    className={selectedRowIndex === rowIndex ? styles['selected-row'] : ''}
                  >
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      {/* ) : (
        <h1>Please enter a valid Church ID to access the data.</h1> */}
      )
      {/* } */}
    </div>
  );
};

export default GoogleSheets;
