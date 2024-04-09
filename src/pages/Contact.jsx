import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import { Fox } from "../models/Fox";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setcurrentAnimation] = useState("idle")
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmt = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Chandan",
          from_email: form.email,
          to_email: "chandancky897@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      setIsLoading(false);
      toast.success("Email Sent Successfully");
    } catch (error) {
      toast.error(error.message);
      console.log("Error Found", error.message);
    }
  };
  const handBlur = (e) => {};
  const handlFocus = (e) => {};
  return (
    <section className="flex lg:flex-row flex-col max-container relative">
      <div className="flex-1 min-w-[50%] flex flex-col ">
        <h1 className="head-text">Get In touch </h1>
        <form
          action=""
          className="w-full flex flex-col gap-7 mt-4"
          onSubmit={handleSubmt}
        >
          <label htmlFor="" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              placeholder="john"
              className="input"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onBlur={handBlur}
              onFocus={handlFocus}
              autoComplete="additional-name"
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              placeholder="john@gmail.com"
              className="input"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onBlur={handBlur}
              onFocus={handlFocus}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Your messsage
            <textarea
              type="text"
              placeholder="Let us know how can I help you"
              className="textarea"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onBlur={handBlur}
              onFocus={handlFocus}
            />
          </label>
          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "sending..." : "send message"}
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px]  h-[350px]">
        <Canvas camera={{ position: [0, 0, 5], fov:75, near:0.1, far:1000 }} >
          <directionalLight  intensity={2.5} position={[0,0,1]} />
          <ambientLight intensity={0.5}/>
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
