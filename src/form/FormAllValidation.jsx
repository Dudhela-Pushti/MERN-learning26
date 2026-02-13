import React from "react";
import { useForm } from "react-hook-form";

export const FormAllValidation = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    mode: "all"
  });

  const password = watch("password");

  const validationSchema = {

    nameValidator: {
      required: {
        value: true,
        message: "Name is required *"
      }
    },

    contactValidator: {
      required: {
        value: true,
        message: "Contact is required *"
      },
      pattern: {
        value: /^[6-9]{1}[0-9]{9}$/,
        message: "Invalid Mobile Number"
      }
    },

    promoCodeValidator: {
      required: {
        value: true,
        message: "Promo Code is required *"
      },
      validate: (value) => value === "2026" || "Invalid Promo Code"
    },

    hobbiesValidator: {
      required: {
        value: true,
        message: "Select at least 2 hobbies"
      },
      validate: (value) =>
        value?.length >= 2 || "Minimum 2 hobbies required"
    },

    passwordValidator: {
      required: {
        value: true,
        message: "Password is required *"
      },
      minLength: {
        value: 6,
        message: "Password must be at least 6 characters"
      }
    },

    confirmPasswordValidator: {
      required: {
        value: true,
        message: "Confirm Password is required *"
      },
      validate: (value) =>
        value === password || "Password not matched"
    }
  };

  const submitHandler = (data) => {
    console.log("Form Data:", data);
    alert("Form Submitted Successfully");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>ALL VALIDATION FORM</h2>

      <form onSubmit={handleSubmit(submitHandler)}>

        {/* NAME */}
        <div>
          <label>Name:</label>
          <input type="text" {...register("name", validationSchema.nameValidator)} />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>

        {/* CONTACT */}
        <div>
          <label>Contact:</label>
          <input type="text" {...register("contact", validationSchema.contactValidator)} />
          <p style={{ color: "red" }}>{errors.contact?.message}</p>
        </div>

        {/* PROMO CODE */}
        <div>
          <label>Promo Code:</label>
          <input type="text" {...register("promoCode", validationSchema.promoCodeValidator)} />
          <p style={{ color: "red" }}>{errors.promoCode?.message}</p>
        </div>

        {/* HOBBIES */}
        <div>
          <label>Hobbies:</label><br />
          Cricket <input type="checkbox" value="cricket" {...register("hobbies", validationSchema.hobbiesValidator)} />
          Travel <input type="checkbox" value="travel" {...register("hobbies", validationSchema.hobbiesValidator)} />
          Scrolling <input type="checkbox" value="scrolling" {...register("hobbies", validationSchema.hobbiesValidator)} />
          <p style={{ color: "red" }}>{errors.hobbies?.message}</p>
        </div>

        {/* PASSWORD */}
        <div>
          <label>Password:</label>
          <input type="password" {...register("password", validationSchema.passwordValidator)} />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label>Confirm Password:</label>
          <input type="password" {...register("confirmPassword", validationSchema.confirmPasswordValidator)} />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <input type="submit" />
        </div>

      </form>
    </div>
  );
};
