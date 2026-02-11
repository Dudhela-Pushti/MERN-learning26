import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo3 = () => {

  const { register, handleSubmit } = useForm()
  const [userData, setUserData] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const submitHandler = (data) => {
    console.log("FormDemo3 Data:", data)
    setUserData(data)
    setIsSubmitted(true)
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>FormDemo3 - Education Details</h1>

      <form onSubmit={handleSubmit(submitHandler)}>

        <div>
          <label>COURSE</label><br />
          BCA <input type="checkbox" value="BCA" {...register("course")} />
          BSC <input type="checkbox" value="BSC" {...register("course")} />
          MCA <input type="checkbox" value="MCA" {...register("course")} />
          MBA <input type="checkbox" value="MBA" {...register("course")} />
        </div>

        <div>
          <label>COLLEGE</label><br />
          <input type='text' {...register("college")} />
        </div>

        <div>
          <label>YEAR</label><br />
          <input type='text' {...register("year")} />
        </div>

        <div>
          <label>PERCENTAGE</label><br />
          <input type='text' {...register("percentage")} />
        </div>

        <div>
          <label>REMARKS</label><br />
          <input type='text' {...register("remarks")} />
        </div>

        <br />
        <input type='submit' value="Submit" />
      </form>

      {isSubmitted && (
        <div style={{ marginTop: "20px" }}>
          <h2>OUTPUT</h2>

          {Object.entries(userData).map(([key, value]) => (
            <p key={key}>
              {key} = {Array.isArray(value) ? value.join(", ") : value}
            </p>
          ))}

        </div>
      )}

    </div>
  )
}
