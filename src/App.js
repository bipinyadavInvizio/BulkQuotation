
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axiosInstance from './axiosInstance';

const QuotationForm = () => {
  const [quotationData, setQuotationData] = useState('');
  const [numRequests, setNumRequests] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [bearerToken, setBearerToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRBdCI6IjIwMTktMDktMTNUMDU6NTQ6MDUuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjQtMDctMDlUMTU6MzI6MzguMDAwWiIsImlkIjoyNCwic2hvcE5hbWUiOiJTaHJleWFzaCBCaGFpIiwibGljZW5zZUtleSI6IjEyMzQ1Njc4OTEyMyIsImxpY2Vuc2VSZWdBdCI6IjIwMTktMDktMTNUMDA6MDA6MDAuMDAwWiIsImxpY2Vuc2VFeHBpcmVzQXQiOiIyMDI5LTA4LTA4VDAwOjAwOjAwLjAwMFoiLCJlbWFpbCI6ImtvcmUuc2hyZXlhc2hAZ21haWwuY29tIiwiYWxsb3dlZERldmljZXMiOjEwLCJkZWxldGVkQXQiOm51bGwsInBob25lIjoiOTc2OTA1MjkyMSIsImZlYXR1cmVzIjoie1wiUXVvdGF0aW9uQ2FydFwiOnRydWUsXCJPcmRlckNhcnRcIjpmYWxzZSxcIkNsb3VkXCI6ZmFsc2UsXCJQcmVmaXhcIjpcIlNDXCIsXCJCdWNrZXRcIjpcImRpdmFkZXZpbWFnZXNcIixcInRyYXlQcmVmaXhcIjpcIlNIXCIsXCJDdXN0b21GaWVsZHNcIjp7XCJCZWFkIFd0XCI6XCJyZXNlcnZlZDFcIixcIkMgU3RvbmUgV3RcIjpcInJlc2VydmVkMlwiLFwiQ1ogV3RcIjpcInJlc2VydmVkM1wiLFwiUG90YSBXdFwiOlwicmVzZXJ2ZWQ0XCIsXCJQZWFybCBXdFwiOlwicmVzZXJ2ZWQ1XCJ9LFwiaW1hZ2VMaW1pdFwiOntcImZpbGVcIjo1MDAsXCJzaXplXCI6NjAwfSxcImNhdGFsb2d1ZVwiOjEsXCJkdXBsaWNhdGVEZXNpZ25OdW1iZXJcIjowLFwiZGVzaWduTnVtYmVyQXV0b0dlbmVyYXRpb25cIjowLFwiZGVzaWduTnVtYmVyU2FtZUFzSW1hZ2VOYW1lXCI6MCxcImN1c3RvbWVyc1Zpc2libGVcIjp0cnVlLFwic21zXCI6e1widmVyaWZ5Q2F0YWxvZ3VlXCI6XCJzbXNPdHBcIn0sXCJmaWx0ZXJzXCI6W3tcIm93bmVyXCI6XCJPd25lclwifSx7XCJyZXNlcnZlZDFcIjpcIkFudGlxdWUgSmV3ZWxsZXJ5XCJ9LHtcInJlc2VydmVkMlwiOlwiQ3J5c3RhbCBKZXdlbGxlcnlcIn0se1wicmVzZXJ2ZWQzXCI6XCJGYXNoaW9uIEpld2VsbGVyeVwifSx7XCJyZXNlcnZlZDRcIjpcIkhhbmRtYWRlIEpld2VsbGVyeVwifSx7XCJyZXNlcnZlZDVcIjpcIkZpbGlnaXJpIEpld2VsbGVyeVwifSx7XCJyZXNlcnZlZDZcIjpcIkJyaWRhbCBKZXdlbGxlcnlcIn0se1wicmVzZXJ2ZWQ3XCI6XCJUZW1wbGUgSmV3ZWxsZXJ5XCJ9XSxcIm9yZGVySW5DaGFyZ2VcIjoxLCBcImZvbGRlclN0cnVjdHVyZUxpc3RcIjpbXX0iLCJxdW90YXRpb25BbGxTdGF0dXMiOiIiLCJvdHAiOjc2MzcsIm90cENyZWF0ZWRBdCI6IjIwMjQtMDItMDFUMTE6MjQ6MzMuMDAwWiIsIm90cEV4cGlyZUF0IjoiMjAyNC0wMi0wMVQxMTozNDozMy4wMDBaIiwic2hvcExvZ29VcmwiOiIiLCJjb21wYW55SWQiOjEsImFkZHJlc3NJZCI6MiwidGF4SWQiOjB9LCJpYXQiOjE3MjgyNzc2ODMsImV4cCI6MTcyODkzMjg4M30.NffG3F25yU4yH7rRQflwMWWMvnPQUVz3o9uOy1-F5OY');
  const [apiUrl, setApiUrl] = useState('http://101.53.133.52:1338/quotationcreate');

  const handleQuotationChange = (e) => {
    
    setQuotationData(e.target.value);
  };

  const handleNumRequestsChange = (e) => {
    setNumRequests(Number(e.target.value));
  };

  const handleBearerTokenChange = (e) => {
    setBearerToken(e.target.value);
  };

  const handleApiUrlChange = (e) => {
    setApiUrl(e.target.value);
  };

  const callApi = async (data) => {
    const config = {
      method: 'post',
      url: apiUrl, // Use the dynamic API URL
      headers: {
        'Authorization': `Bearer ${bearerToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        quotation: data,
      },
    };

    return axiosInstance(config);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // const requests = Array.from({ length: numRequests }, () => callApi(quotationData));
    const requests = Array.from({ length: numRequests }, (_, index) => {
      const modifiedQuotationData = { ...(JSON.parse(quotationData)) };
      console.log("modifiedData :",modifiedQuotationData);
      

      if (modifiedQuotationData.customer.id === 0) {
          modifiedQuotationData.quotationNo += index;
      }

      return callApi(JSON.stringify(modifiedQuotationData));
  });

    try {
      const responses = await Promise.all(requests);
      console.log('All responses:', responses);
    } catch (err) {
      setError('Error calling the API');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Submit Quotation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            value={quotationData}
            onChange={handleQuotationChange}
            placeholder="Enter your quotation data"
            rows="10"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="numRequests">Number of Requests</label>
          <input
            type="number"
            className="form-control"
            id="numRequests"
            value={numRequests}
            onChange={handleNumRequestsChange}
            min="1"
            placeholder="Enter number of requests"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="bearerToken">Bearer Token</label>
          <input
            type="text"
            className="form-control"
            id="bearerToken"
            value={bearerToken}
            onChange={handleBearerTokenChange}
            placeholder="Enter your Bearer token"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="apiUrl">API URL</label>
          <input
            type="text"
            className="form-control"
            id="apiUrl"
            value={apiUrl}
            onChange={handleApiUrlChange}
            placeholder="Enter the API URL"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};
function App() {

  return (
    <div className="App">
        <QuotationForm/>
    </div>
  );
}

export default App;
