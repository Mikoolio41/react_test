import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Form = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required("This field is required"),
    email: yup.string().email().required("This field is required"),
    age: yup
      .number()
      .integer("We don't care how many months you've lived")
      .min(18)
      .required("This field is required"),
    password: yup.string().min(4).max(20).required("This field is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "passwords don't match")
      .required("This field is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>useForm hook and yup library to validate forms </h2>
      <input type="text" placeholder="Full name" {...register("fullName")} />
      <p>{errors.fullName?.message}</p>
      <input type="text" placeholder="Email" {...register("email")} />
      <p>{errors.email?.message}</p>
      <input type="number" placeholder="Age" {...register("age")} />
      <p>{errors.age?.message}</p>
      <input type="password" placeholder="Password" {...register("password")} />
      <p>{errors.password?.message}</p>
      <input
        type="password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      <p>{errors.confirmPassword?.message}</p>
      <input type="submit" />
    </form>
  );
};
