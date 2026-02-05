import React from 'react'

export const MapDemo2 = () => {


    const students = [
  { id: 1, name: "Riya", marks: 85, grade: "A", result: "Pass", img: "" },
  { id: 2, name: "Aman", marks: 45, grade: "C", result: "Pass", img: "https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?pid=Api&P=0&h=180" },
  { id: 3, name: "Neel", marks: 32, grade: "D", result: "Fail", img: "" },
  { id: 4, name: "Sara", marks: 90, grade: "A+", result: "Pass", img: "https://tse2.mm.bing.net/th/id/OIP.LR8GqhDt4Vyw38heGneHPQHaE8?pid=Api&P=0&h=180" },
  { id: 5, name: "Kunal", marks: 28, grade: "F", result: "Fail", img: "" }
];


 return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>Student Result Table</h2>

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
            <th style={thStyle}>Marks</th>
            <th style={thStyle}>Grade</th>
            <th style={thStyle}>Result</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr
              key={s.id}
              style={{
                backgroundColor: s.marks < 35 ? "#ffe0e0" : "#e0ffe0"
              }}
            >
              <td style={tdStyle}>{s.id}</td>

              <td style={tdStyle}>
                {s.img ? (
                  <img
                    src={s.img}
                    alt="student"
                    style={{ width: "50px", height: "50px" }}
                  />
                ) : (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    Image is missing
                  </span>
                )}
              </td>

              <td style={tdStyle}>{s.name}</td>

              <td
                style={{
                  ...tdStyle,
                  color: s.marks < 35 ? "red" : "black",
                  fontWeight: s.marks < 35 ? "bold" : "normal"
                }}
              >
                {s.marks}
              </td>

              <td style={tdStyle}>{s.grade}</td>

              <td
                style={{
                  ...tdStyle,
                  color: s.result === "Pass" ? "green" : "red",
                  fontWeight: "bold"
                }}
              >
                {s.result}
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