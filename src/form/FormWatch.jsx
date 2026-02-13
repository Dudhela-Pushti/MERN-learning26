import React from "react";
import { useForm } from "react-hook-form";

export const FormWatch = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    mode: "onChange"
  });

  const password = watch("password") || ""; 
  console.log("watching...", password);

  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);
  const hasSpecial = /[@$!%*?&#_]/.test(password);
  const hasLength = password.length >= 8;

  const validationSchema = {
    passwordValidator: {
      required: {
        value: true,
        message: "password is required*",
      },
    },
    confirmPasswordValidator: {
      required: {
        value: true,
        message: "confirm password is required*",
      },
      validate: (params) => {
        return params == password || "confirm password not matched*";
      }
    }
  };

  const submitHanlder = (data) => {
    console.log(data);
  };


  return (
    <div style={{ textAlign: "center" }}>
      <h1>FORM WATCH DEMO</h1>

      <form onSubmit={handleSubmit(submitHanlder)}>

        <div>
          <label>PASSWORD</label>
          <input
            type="password"
            {...register("password", validationSchema.passwordValidator)}
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        <div>
          <p style={{ color: hasUpper ? "green" : "black" }}>1 Capital Character</p>
          <p style={{ color: hasLower ? "green" : "black" }}>1 Small Character</p>
          <p style={{ color: hasDigit ? "green" : "black" }}>1 Digit</p>
          <p style={{ color: hasSpecial ? "green" : "black" }}>1 Special Character</p>
          <p style={{ color: hasLength ? "green" : "black" }}>Minimum 8 Characters</p>
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", validationSchema.confirmPasswordValidator)}
          />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  );
};
