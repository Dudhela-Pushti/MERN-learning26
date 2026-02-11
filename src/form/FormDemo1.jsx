import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

  const { register, handleSubmit } = useForm()
  const [userData, setUserData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitHandler = (data) => {
    console.log("Form Data:", data)
    setUserData(data)
    setIsSubmitted(true)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Form Demo - Personal Details</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>NAME</label><br />
          <input type="text" {...register("name")} />
        </div>

        <div>
          <label>AGE</label><br />
          <input type="number" {...register("age")} />
        </div>

        <div>
          <label>EMAIL</label><br />
          <input type="email" {...register("email")} />
        </div>

        <div>
          <label>MOBILE</label><br />
          <input type="text" {...register("mobile")} />
        </div>

        <div>
          <label>CITY</label><br />
          <input type="text" {...register("city")} />
        </div>

        <br />
        <input type="submit" value="Submit" />
      </form>

      {isSubmitted && (
        <div style={{ marginTop: "20px" }}>
          <h2>OUTPUT</h2>

          {Object.entries(userData).map(([key, value]) => (
            <p key={key}>
              {key} = {value}
            </p>
          ))}

        </div>
      )}

    </div>
  )
}
