import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./form.css";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short").max(50, "Name is too long"),
  phone: z
    .string()
    .regex(/[0-9]/, "Only number is allow")
    .max(10, "Number should be exactly 10 digits")
    .min(10, "Number should be exactly 10 digits"),
  email: z.email("Please enter a valid email"),
  message: z
    .string()
    .min(10, "Message must be 10 charactor long")
    .max(400, "Message can't be more then 400 charactors"),
});

type formType = z.infer<typeof formSchema>;

export default function Form() {
  const {
    setValue,
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitHandler = (data: formType) => {
    console.log(data);
    // e.preventDefault();
    // console.log(e.currentTarget);
    // const data = new FormData(e.currentTarget);
    // data.forEach((item, index) => {
    //   console.log(item, index);
    // });
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="form">
      <input
        {...register("name")}
        type="text"
        name="name"
        placeholder="Enter Name"
      ></input>
      {errors.name && (
        <div className="error-message">{errors.name.message}</div>
      )}
      <input
        {...register("email")}
        type="email"
        name="email"
        placeholder="Email"
      ></input>
      {errors.email && (
        <div className="error-message">{errors.email.message}</div>
      )}
      <input
        {...register("phone")}
        type="number"
        name="phone"
        placeholder="896753452"
      ></input>
      {errors.phone && (
        <div className="error-message">{errors.phone.message}</div>
      )}
      <textarea
        {...register("message")}
        rows={5}
        name="message"
        placeholder="Message"
      ></textarea>
      {errors.message && (
        <div className="error-message">{errors.message.message}</div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}
