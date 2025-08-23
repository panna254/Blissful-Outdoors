import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        () => {
          setIsSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const openWhatsApp = () => {
    const name = form.current["user_name"].value;
    const message = form.current["message"].value;
    const phoneNumber = "254715812430";
    const encodedMsg = encodeURIComponent(
      `Hello, my name is ${name}. ${message}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
  };

  return (
    <section
      id="contact"
      className="bg-cover bg-center py-20 px-6 md:px-20"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80")`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl grid md:grid-cols-2 gap-10 p-10 max-w-5xl mx-auto"
      >
        {/* FORM */}
        <div>
          <h2 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Full Name"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 transition"
              >
                Send via Email
              </button>
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full border border-green-600 text-green-700 py-4 rounded-xl font-semibold hover:bg-green-100 transition"
              >
                Chat via WhatsApp
              </button>
            </div>
          </form>

          {isSent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 bg-green-100 text-green-800 p-4 rounded-lg"
            >
              ✅ Your message has been sent successfully!
            </motion.div>
          )}
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center bg-green-700 text-white p-8 rounded-2xl shadow-md">
          <h3 className="text-2xl font-semibold mb-6">Reach Us Directly</h3>
          
          <div className="space-y-6">
            {/* Phone/WhatsApp */}
            <div className="flex items-start space-x-3">
              <FaPhone className="text-green-300 text-lg mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Call/WhatsApp:</p>
                <p className="mb-1">+254 715 812 430</p>
                <p className="mb-1">+254 741 612 080</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-3">
              <FaEnvelope className="text-green-300 text-lg mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Email:</p>
                <p>info@blissfuloutdoorsolutions.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-green-300 text-lg mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Location:</p>
                <p>Ruiru, Kiambu County, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
