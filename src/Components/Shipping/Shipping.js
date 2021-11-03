import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import "./Shipping.css";

const Shipping = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {user} = useAuth();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <h2>Shipping Info : </h2>
      <div>
        <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" defaultValue={user.displayName} {...register("name")} />

          <input placeholder = "email" {...register("email", { required: true })} />
          <input placeholder = "address" {...register("address", { required: true })} />
          <input placeholder = "phone" {...register("phone", { required: true })} />

          {errors.email && <span className="error">This field is required</span>}

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Shipping;
