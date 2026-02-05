import React from 'react'

export const MapDemo3 = () => {


    const products = [
  { id: 1, name: "Laptop", price: 55000, stock: 10, category: "Electronics", img: "" },
  { id: 2, name: "Mouse", price: 500, stock: 0, category: "Accessories", img: "" },
  { id: 3, name: "Phone", price: 20000, stock: 5, category: "Electronics", img: "https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?pid=Api&P=0&h=180" },
  { id: 4, name: "Keyboard", price: 1200, stock: 2, category: "Accessories", img: "" },
  { id: 5, name: "Monitor", price: 8000, stock: 0, category: "Electronics", img: "https://tse2.mm.bing.net/th/id/OIP.LR8GqhDt4Vyw38heGneHPQHaE8?pid=Api&P=0&h=180" }
];


    return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Product Table</h2>

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
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Stock</th>
            <th style={thStyle}>Category</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr
              key={p.id}
              style={{
                backgroundColor: p.stock === 0 ? "#ffe0e0" : "white"
              }}
            >
              <td style={tdStyle}>{p.id}</td>

              <td style={tdStyle}>
                {p.img ? (
                  <img
                    src={p.img}
                    alt="product"
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    Image is missing
                  </span>
                )}
              </td>

              <td style={tdStyle}>{p.name}</td>

              <td
                style={{
                  ...tdStyle,
                  color: p.price > 30000 ? "green" : "black",
                  fontWeight: p.price > 30000 ? "bold" : "normal"
                }}
              >
                ₹{p.price}
              </td>

              <td
                style={{
                  ...tdStyle,
                  color: p.stock === 0 ? "red" : "black",
                  fontWeight: p.stock === 0 ? "bold" : "normal"
                }}
              >
                {p.stock}
              </td>

              <td style={tdStyle}>{p.category}</td>
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