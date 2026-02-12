import React from "react";
import { useForm } from "react-hook-form";

export const StudentForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    alert("Student Form Submitted");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student Form</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* Name */}
        <div>
          <label>Name:</label>
          <input {...register("name", { required: "Name required" })} />
          <p style={{color:"red"}}>{errors.name?.message}</p>
        </div>

        {/* Age */}
        <div>
          <label>Age:</label>
          <input type="number" {...register("age", {
            required: "Age required",
            min: { value: 18, message: "Min age 18" },
            max: { value: 60, message: "Max age 60" }
          })} />
          <p style={{color:"red"}}>{errors.age?.message}</p>
        </div>

        {/* Email */}
        <div>
          <label>Email:</label>
          <input {...register("email", {
            required: "Email required",
            pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid Email" }
          })} />
          <p style={{color:"red"}}>{errors.email?.message}</p>
        </div>

        {/* Mobile */}
        <div>
          <label>Mobile:</label>
          <input {...register("mobile", {
            required: "Mobile required",
            pattern: { value: /^[0-9]{10}$/, message: "10 digit number only" }
          })} />
          <p style={{color:"red"}}>{errors.mobile?.message}</p>
        </div>

        {/* Address */}
        <div>
          <label>Address:</label>
          <input {...register("address", {
            required: "Address required",
            minLength: { value: 5, message: "Min 5 characters" }
          })} />
          <p style={{color:"red"}}>{errors.address?.message}</p>
        </div>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
};
