"use client";

import React, { useState } from "react";

const ContactForm = ({ translations }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      data: {
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        Message: formData.message,
      },
    };

    try {
      const response = await fetch(
        "https://dunesofarabia.com/api/contact-entries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);

        // Set success message
        setSuccessMessage("data sent successfuly");

        // Reset the form data
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });

        // Hide the success message after 5 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="text-white px-4 lg:px-28 border-b border-[#FFFFFF] pb-10 md:pb-20 mt-10 flex flex-col justify-center">
      <h1 className="text-xl md:text-2xl mb-4 text-center">
        {translations.Title}
      </h1>
      {/* <h2 className="text-base md:text-lg mb-6 md:mb-8 text-center px-4">
        {translations.form.desc}
      </h2> */}

      {/* Conditional rendering of success message */}
      {successMessage && (
        <div className="text-center mb-6 p-3 bg-green-500 text-white rounded-md">
          {successMessage}
        </div>
      )}

      <form
        className="w-full md:w-auto p-4 md:p-8 rounded-lg shadow-lg flex flex-col gap-4 md:gap-5 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full max-w-[634px]">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder={translations.Name}
            onChange={handleChange}
            className="w-full lg:w-[634px] p-3 bg-black border-b text-white focus:outline-none"
            required
          />
        </div>

        <div className="w-full max-w-[634px]">
          <input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={translations.Phone}
            className="w-full lg:w-[634px] p-3 bg-black border-b text-white focus:outline-none"
            required
          />
        </div>

        <div className="w-full max-w-[634px]">
          <input
            type="email"
            id="email"
            name="email"
            placeholder={translations.Email}
            value={formData.email}
            onChange={handleChange}
            className="w-full lg:w-[634px] p-3 bg-black border-b text-white focus:outline-none"
            required
          />
        </div>

        <div className="w-full max-w-[634px] mt-4 md:mt-8">
          <textarea
            id="message"
            name="message"
            placeholder={translations.Message}
            value={formData.message}
            onChange={handleChange}
            rows="7"
            className="w-full resize-none lg:w-[634px] p-3 bg-black border text-white focus:outline-none"
            required
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-fit rounded-2xl py-2 md:py-3 px-4 md:px-6 bg-white text-[#D45B2B] focus:outline-none text-sm md:text-base"
          >
            {translations.Submit}
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
