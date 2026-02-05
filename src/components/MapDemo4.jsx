import React from 'react'

export const MapDemo4 = () => {


    const employees = [
  { id: 1, name: "Raj", days: 28, status: "Present", dept: "IT", img: "" },
  { id: 2, name: "Simran", days: 15, status: "Irregular", dept: "HR", img: "" },
  { id: 3, name: "Vikas", days: 30, status: "Present", dept: "Finance", img: "https://tse4.mm.bing.net/th/id/OIP.vWUjZJrLjfB1iPw1qrv5wQHaEK?pid=Api&P=0&h=180" },
  { id: 4, name: "Nina", days: 10, status: "Absent", dept: "IT", img: "" },
  { id: 5, name: "Arjun", days: 25, status: "Present", dept: "Admin", img: "" }
];


     return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Employee Attendance Table</h2>

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
            <th style={thStyle}>Days</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Department</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((e) => (
            <tr
              key={e.id}
              style={{
                backgroundColor: e.days < 20 ? "#fff3cd" : "white"
              }}
            >
              <td style={tdStyle}>{e.id}</td>

              <td style={tdStyle}>
                {e.img ? (
                  <img
                    src={e.img}
                    alt="employee"
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    Image is missing
                  </span>
                )}
              </td>

              <td style={tdStyle}>{e.name}</td>

              <td
                style={{
                  ...tdStyle,
                  color: e.days < 20 ? "orange" : "black",
                  fontWeight: e.days < 20 ? "bold" : "normal"
                }}
              >
                {e.days}
              </td>

              <td
                style={{
                  ...tdStyle,
                  color:
                    e.status === "Absent"
                      ? "red"
                      : e.status === "Irregular"
                      ? "orange"
                      : "green",
                  fontWeight: "bold"
                }}
              >
                {e.status}
              </td>

              <td style={tdStyle}>{e.dept}</td>
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
