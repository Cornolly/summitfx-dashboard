import React, { useEffect, useState } from "react";

const QuoteDashboard = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://summitfx-dashboard-production.up.railway.app/api/quotes")
      .then((res) => res.json())
      .then((data) => setQuotes(data))
      .catch((err) => console.error("Error fetching quotes:", err));
  }, []);
  

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>📊 Recent Quotes</h2>
      <table border="1" cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>Phone</th>
            <th>Type</th>
            <th>From</th>
            <th>To</th>
            <th>Amount</th>
            <th>Final Amount</th>
            <th>Client Rate</th>
            <th>Market Rate</th>
            <th>Margin %</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((q, idx) => (
            <tr key={idx}>
              <td>{q.phone}</td>
              <td>{q.trade_type}</td>
              <td>{q.from_currency}</td>
              <td>{q.to_currency}</td>
              <td>{q.amount}</td>
              <td>{q.final_amount}</td>
              <td>{q.client_rate}</td>
              <td>{q.exchange_rate}</td>
              <td>{q.client_margin}%</td>
              <td>{new Date(q.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuoteDashboard;
