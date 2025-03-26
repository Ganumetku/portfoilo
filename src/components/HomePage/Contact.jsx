import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
// import { getImageUrl } from "../../utils";

function Contact() {
  const [result, setResult] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setResult("Sending...");
    const formData = new FormData();
    formData.append("access_key", "aa8b9a73-caab-47aa-8ed5-9ccc41b1a9b2");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const resultData = await response.json();

      if (resultData.success) {
        setResult("Message sent successfully");
        reset();
        Swal.fire({ title: "Success!", text: "Message sent successfully", icon: "success" });
      } else {
        setResult(resultData.message);
      }

      // Backup email submission
      await axios.post("https://getform.io/f/raeqjora", data);
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Request failed:", error);
      setResult("An error occurred. Please try again.");
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-gray-700 mt-2">
        Or email me directly at:
        <a href="mailto:ganeshmetku7833@gmail.com" className="text-blue-600 underline ml-1">
          ganeshmetku7833@gmail.com
        </a>
      </p>

      <div className="flex flex-col items-center justify-center mt-5">
        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
          <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              {...register("message", { required: true })}
              className="shadow rounded-lg border py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              placeholder="Enter your query"
            />
            {errors.message && <span className="text-red-500">This field is required</span>}
          </div>

          <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
