import React from 'react'

export const MapDemo1 = () => {


    const users = [
    {
      id: 1,
      name: "Amit",
      age: 22,
      role: "Developer",
      salary: 30000,
      status: "Active",
      image: "https://tse4.mm.bing.net/th/id/OIP.vWUjZJrLjfB1iPw1qrv5wQHaEK?pid=Api&P=0&h=180"
    },
    {
      id: 2,
      name: "Neha",
      age: 19,
      role: "Intern",
      salary: 12000,
      status: "Inactive",
      image: ""
    },
    {
      id: 3,
      name: "Rahul",
      age: 28,
      role: "Manager",
      salary: 60000,
      status: "Active",
      image: "https://tse2.mm.bing.net/th/id/OIP.LR8GqhDt4Vyw38heGneHPQHaE8?pid=Api&P=0&h=180"
    },
    {
      id: 4,
      name: "Priya",
      age: 24,
      role: "Designer",
      salary: 25000,
      status: "Active",
      image: ""
    },
    {
      id: 5,
      name: "Karan",
      age: 30,
      role: "Tester",
      salary: 18000,
      status: "Inactive",
      image: "https://tse3.mm.bing.net/th/id/OIP.j4KdqaXpnhbN94WzVyHUhAHaE8?pid=Api&P=0&h=180"
    }
  ];

    return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>User Table (Map Demo)</h2>

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
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Role</th>
            <th style={thStyle}>Salary</th>
            <th style={thStyle}>Status</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              style={{
                backgroundColor:
                  user.salary > 50000
                    ? "#d4f7d4"          // high salary
                    : user.salary < 20000
                    ? "#ffe0e0"          // low salary
                    : "white"
              }}
            >
              <td style={tdStyle}>{user.id}</td>

              <td style={tdStyle}>
                {user.image ? (
                  <img
                    src={user.image}
                    alt="profile"
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%"
                    }}
                  />
                ) : (
                  <span style={{ color: "red", fontSize: "12px" }}>
                    Image is missing
                  </span>
                )}
              </td>

              <td style={tdStyle}>{user.name}</td>

              <td
                style={{
                  ...tdStyle,
                  color: user.age < 21 ? "red" : "black",
                  fontWeight: user.age < 21 ? "bold" : "normal"
                }}
              >
                {user.age}
              </td>

              <td style={tdStyle}>{user.role}</td>

              <td style={tdStyle}>₹{user.salary}</td>

              <td
                style={{
                  ...tdStyle,
                  color: user.status === "Active" ? "green" : "gray",
                  fontWeight: "bold"
                }}
              >
                {user.status}
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
