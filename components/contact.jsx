// Import necessary dependencies and components\
"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Modal from "./modal"; // Import your Modal component

// Define Contact component
const Contact = () => {
  // Declare formRef and form state variables using useState hook
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Declare loading state variable using useState hook
  const [loading, setLoading] = useState(false);

  // Declare modal state variable using useState hook
  const [modal, setModal] = useState({ isOpen: false, message: "" }); // Add this

  // Define handleChange function to update form state when input fields change
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Define function to close the modal
  const closeModal = () => {
    setModal({ isOpen: false, message: "" });
  };

  // Define handleSubmit function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use emailjs library to send email
    emailjs
      .send(
        "service_88ac7s1",
        "template_r0q25ev",
        {
          from_name: form.name,
          to_name: "Jen",
          form_email: form.email,
          to_email: "cyexist@yahoo.com",
          message: form.message,
        },
        "x1z0XVxJpE0k6XVbU"
      )
      .then(
        () => {
          setLoading(false);
          // Show success message and reset form state
          // Replace alert with modal
          setModal({
            isOpen: true,
            message: "Thank you. I will get back to you as soon as possible!",
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          // Show error message
          // Replace alert with modal
          setModal({ isOpen: true, message: "Something went wrong." });
        }
      );
  };

  return (
    <div className=" xl:mt-9 xl:flex-row flex-col-reverse flex gap-6 overflow-hidden justify-center font-serif">
      <div className="flex-[0.75] p-8 rounded-2xl flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-3xl mb-4 font-serif">Contact</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col"
          >
            <label className="flex flex-col">
              <span className="font-mediumtext-center ">Number</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Preffered # to contact?"
                required
                className="text-black py-4 px-6 rounded-lg outlined-none border font-small text-center"
              />
            </label>

            <label className="flex flex-col">
              <span className="font-medium mt-4 text-center ">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                required
                className="text-black py-4 px-6 rounded-lg outlined-none border font-small text-center"
              />
            </label>

            <label className="flex flex-col">
              <span className="font-medium mt-4 text-center">Details</span>
              <textarea
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Name,
                a description of the tattoo (size, placement, line work or shading)"
                className="text-black py-4 px-6 rounded-lg border font-small text-center"
              />
            </label>

            <div className="flex flex-col items-center sm:flex-row sm:justify-center">
              <button
                type="submit"
                className="mt-4 py-3 px-8 border border-gray-400 p-4 w-fit font-bold shadow-sm shadow-white rounded-xl mr-4 sm:justify-content-center"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        isOpen={modal.isOpen}
        message={modal.message}
        onClose={closeModal}
      />
    </div>
  );
};

export default Contact;
