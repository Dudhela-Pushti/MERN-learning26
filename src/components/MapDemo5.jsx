import React from 'react'

export const MapDemo5 = () => {

    
const orders = [
  { id: 101, customer: "Pooja", amount: 1200, status: "Delivered", payment: "Online", img: "" },
  { id: 102, customer: "Rohit", amount: 300, status: "Pending", payment: "COD", img: "" },
  { id: 103, customer: "Meena", amount: 5000, status: "Delivered", payment: "Online", img: "https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?pid=Api&P=0&h=180" },
  { id: 104, customer: "Aakash", amount: 800, status: "Cancelled", payment: "Online", img: "" },
  { id: 105, customer: "Kriti", amount: 1500, status: "Pending", payment: "COD", img: "" }
];


    return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Order History Table</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px"
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#222", color: "white" }}>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Customer</th>
            <th style={thStyle}>Amount</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Payment</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((o) => (
            <tr
              key={o.id}
              style={{
                backgroundColor: o.amount > 3000 ? "#e0f7fa" : "white"
              }}
            >
              <td style={tdStyle}>{o.id}</td>

              <td style={tdStyle}>
                {o.img ? (
                  <img
                    src={o.img}
                    alt="order"
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    Image is missing
                  </span>
                )}
              </td>

              <td style={tdStyle}>{o.customer}</td>

              <td
                style={{
                  ...tdStyle,
                  color: o.amount > 3000 ? "green" : "black",
                  fontWeight: o.amount > 3000 ? "bold" : "normal"
                }}
              >
                ₹{o.amount}
              </td>

              <td
                style={{
                  ...tdStyle,
                  color:
                    o.status === "Delivered"
                      ? "green"
                      : o.status === "Pending"
                      ? "orange"
                      : "red",
                  fontWeight: "bold"
                }}
              >
                {o.status}
              </td>

              <td
                style={{
                  ...tdStyle,
                  color: o.payment === "COD" ? "purple" : "blue"
                }}
              >
                {o.payment}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
 

    </div>
  )
}

const thStyle = {
  border: "1px solid #ccc",
  padding: "10px"
};

const tdStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "center"
};