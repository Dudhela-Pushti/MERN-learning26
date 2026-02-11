import React, { useState } from "react";

export const Input = () => {

   const countryData = [
    { name: "India", states: ["Gujarat", "Maharashtra", "Rajasthan"] },
    { name: "USA", states: ["California", "Texas", "New York"] },
    { name: "Canada", states: ["Ontario", "Alberta", "Quebec"] }
  ];

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    hobbies: [],
    country: "",
    state: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleHobbyChange = (e) => {
    const { value, checked } = e.target;
    let hobbies = [...formData.hobbies];

    if (checked) {
      hobbies.push(value);
    } else {
      hobbies = hobbies.filter((h) => h !== value);
    }

    setFormData({ ...formData, hobbies });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    console.log("Form Data:", formData);
  };

  const selectedCountry = countryData.find(c => c.name === formData.country);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Registration Form</h2>

      <input type="text" name="name" placeholder="Name" onChange={handleChange} /><br /><br />
      <input type="number" name="age" placeholder="Age" onChange={handleChange} /><br /><br />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br /><br />
      <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} /><br /><br />

      <h4>Gender</h4>
      <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male  
      <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female  
      <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other  
      <br /><br />

      <h4>Hobbies</h4>
      <input type="checkbox" value="Cricket" onChange={handleHobbyChange} /> Cricket  
      <input type="checkbox" value="Reading" onChange={handleHobbyChange} /> Reading  
      <input type="checkbox" value="Music" onChange={handleHobbyChange} /> Music  
      <br /><br />

      <select name="country" onChange={handleChange}>
        <option value="">Select Country</option>
        {countryData.map((c) => (
          <option key={c.name} value={c.name}>{c.name}</option>
        ))}
      </select>
      <br /><br />

      <select name="state" onChange={handleChange}>
        <option value="">Select State</option>
        {selectedCountry &&
          selectedCountry.states.map((state) => (
            <option key={state}>{state}</option>
          ))
        }
      </select>
      <br /><br />

      <button onClick={handleSubmit}>Submit</button>

      {submitted && (
        <div style={{ marginTop: "20px", border: "2px solid black", padding: "10px" }}>
          <h3>Submitted Data</h3>
          <p>Name: {formData.name}</p>
          <p>Age: {formData.age}</p>
          <p>Email: {formData.email}</p>
          <p>Password: {formData.password}</p>
          <p>Mobile: {formData.mobile}</p>
          <p>Gender: {formData.gender}</p>
          <p>Hobbies: {formData.hobbies.join(", ")}</p>
          <p>Country: {formData.country}</p>
          <p>State: {formData.state}</p>
        </div>
      )}
    </div>
  )
}
