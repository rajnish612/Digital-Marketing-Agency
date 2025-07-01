"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactUs = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const phoneNumber = "918638232686";

  const generateWhatsAppLink = () => {
    const baseURL = `https://wa.me/${phoneNumber}`;
    const message = `Hi! I'm ${name || "a guest"}${
      email && `(${email})`
    } and i am interested in booking your homestay${
      selectedDate ? ` on ${selectedDate.toLocaleDateString()}` : ""
    } for ${adults} adult(s) and ${children} child(ren). Please provide more details.`;

    const encodedMessage = encodeURIComponent(message);
    return `${baseURL}?text=${encodedMessage}`;
  };

  return (
    <section id="contact" className="bg-[#f5f5f2] py-16 px-4 md:px-24">
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <div className="space-y-6">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in Touch ✉️
          </motion.h2>
          <p className="text-gray-600 text-lg">
            Have questions or want to book your stay? Choose your date and send
            us a WhatsApp message!
          </p>

          <form className="space-y-4">
            <div>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              />
            </div>

            {/* Date Picker */}
            <div className="flex flex-col space-y-2">
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                placeholderText="Select Booking Date"
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                minDate={new Date()}
              />

              <select
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              >
                {[...Array(6)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1} Adult{i > 0 ? "s" : ""}
                  </option>
                ))}
              </select>

              <select
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
              >
                {[...Array(6)].map((_, i) => (
                  <option key={i} value={i}>
                    {i} Child{i !== 1 ? "ren" : ""}
                  </option>
                ))}
              </select>
            </div>

            <motion.a
              href={email && name && selectedDate && generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-xl transition text-center"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
            >
              Message on WhatsApp
            </motion.a>
          </form>
        </div>

        {/* Right Content */}
        <motion.div
          className="hidden rounded-lg overflow-hidden md:block"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <img
            src="/images/homestay.jpg"
            alt="Contact Illustration"
            className="w-full rounded-lg max-w-md mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
