import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo2 = () => {

  const { register, handleSubmit } = useForm()
  const [userData, setUserData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [country, setCountry] = useState("")
  const [states, setStates] = useState([])

  const countryData = {
    India: ["Gujarat", "Maharashtra", "Rajasthan", "Delhi"],
    USA: ["California", "Texas", "Florida", "New York"],
    Canada: ["Ontario", "Alberta", "British Columbia"]
  }

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value
    setCountry(selectedCountry)
    setStates(countryData[selectedCountry])
  }

  const submitHandler = (data) => {
    console.log("Form Data:", data)
    setUserData(data)
    setIsSubmitted(true)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>FormDemo2 - Login Details</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>USERNAME</label><br />
          <input type='text' {...register("username")} />
        </div>

        <div>
          <label>PASSWORD</label><br />
          <input type='password' {...register("password")} />
        </div>

        <div>
          <label>GENDER</label><br />
          Male <input type="radio" value="male" {...register("gender")} />
          Female <input type="radio" value="female" {...register("gender")} />
        </div>

        <div>
          <label>COUNTRY</label><br />
          <select {...register("country")} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            {Object.keys(countryData).map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label>STATE</label><br />
          <select {...register("state")}>
            <option value="">Select State</option>
            {states && states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <br />
        <input type='submit' value="Submit" />
      </form>

      {isSubmitted && (
        <div>
          <h2>OUTPUT</h2>
          {Object.entries(userData).map(([key, value]) => (
            <p key={key}>{key} = {value}</p>
          ))}
        </div>
      )}
    </div>
  )
}
