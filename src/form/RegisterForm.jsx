import React from "react";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {

  const { 
    register, 
    handleSubmit, 
    watch, 
    formState: { errors } 
  } = useForm();

  // watch password field
  const password = watch("password");

  const submitHandler = (data) => {
    console.log(data);
    alert("Registration Successful");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* Username */}
        <div>
          <label>Username:</label>
          <input 
            {...register("username", { required: "Username required" })} 
          />
          <p style={{color:"red"}}>{errors.username?.message}</p>
        </div>

        {/* Password */}
        <div>
          <label>Password:</label>
          <input 
            type="password"
            {...register("password", {
              required: "Password required",
              minLength: { value: 6, message: "Min 6 characters" }
            })}
          />
          <p style={{color:"red"}}>{errors.password?.message}</p>
        </div>

        {/* Confirm Password */}
        <div>
          <label>Confirm Password:</label>
          <input 
            type="password"
            {...register("cpassword", {
              required: "Confirm password required",
              validate: (value) =>
                value === password || "Passwords do not match"
            })}
          />
          <p style={{color:"red"}}>{errors.cpassword?.message}</p>
        </div>

        {/* Gender Radio Button */}
        <div>
          <label>Gender:</label><br />

          <input 
            type="radio" 
            value="Male" 
            {...register("gender", { required: "Gender required" })} 
          /> Male

          <input 
            type="radio" 
            value="Female" 
            {...register("gender", { required: "Gender required" })} 
          /> Female

          <p style={{color:"red"}}>{errors.gender?.message}</p>
        </div>

        {/* City */}
        <div>
          <label>City:</label>
          <input 
            {...register("city", { required: "City required" })} 
          />
          <p style={{color:"red"}}>{errors.city?.message}</p>
        </div>

        <button type="submit">Register</button>

      </form>
    </div>
  );
};
