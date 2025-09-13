import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
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
          // console.error("EmailJS error:", error); // Removed for production
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
        className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl grid lg:grid-cols-2 gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 max-w-6xl mx-auto"
      >
        {/* FORM */}
        <div className="min-h-0 overflow-hidden">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-8">
            Fill out the form and we’ll get back to you as soon as possible.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            {/* Personal Information Section */}
            <div className="space-y-2">
              <h4 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
                Personal Information
              </h4>
              <div className="space-y-2">
                <div className="relative">
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Enter your full name"
                    required
                    className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="user_phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="user_phone"
                    name="user_phone"
                    placeholder="+254 700 000 000"
                    className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Message Details Section */}
            <div className="space-y-2">
              <h4 className="text-base font-semibold text-gray-800 border-b border-gray-200 pb-1 mb-3">
                Message Details
              </h4>
              <div className="relative">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white text-sm"
                >
                  <option value="">Select a service or inquiry type</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Landscaping Services">Landscaping Services</option>
                  <option value="Pergola Installation">Pergola Installation</option>
                  <option value="Car Parking Shades">Car Parking Shades</option>
                  <option value="Swimming Pool Construction">Swimming Pool Construction</option>
                  <option value="Cabro Paving">Cabro Paving</option>
                  <option value="Quotation Request">Quotation Request</option>
                  <option value="Site Survey">Site Survey Request</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="relative">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Please provide details about your project, timeline, budget range, or any specific requirements..."
                  required
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-vertical text-sm"
                ></textarea>
                <div className="text-xs text-gray-500 mt-1">
                  Tip: Include project location, preferred timeline, and budget range for faster response
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-green-700 active:bg-green-800 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 min-h-[56px] flex items-center justify-center text-base sm:text-lg"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send via Email
                </span>
              </button>
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full border-2 border-green-600 text-green-700 py-4 px-6 rounded-xl font-semibold hover:bg-green-50 active:bg-green-100 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 min-h-[56px] flex items-center justify-center text-base sm:text-lg"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  Chat via WhatsApp
                </span>
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

            {/* Social Media */}
            <div className="mt-8">
              <p className="font-semibold mb-4">Follow Us:</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/blissfuloutdoorsolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                  <FaFacebook className="text-2xl" />
                </a>
                <a href="https://www.instagram.com/blissful_outdoorsolutions/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.youtube.com/@blissfuloutdoorsolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                  <FaYoutube className="text-2xl" />
                </a>
                <a href="https://www.tiktok.com/@blissfuloutdoorsolutions" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-300 transition-colors">
                  <FaTiktok className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;
