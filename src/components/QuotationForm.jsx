import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import WhatsappButton from "./WhatsappButton";

const surveyCosts = {
  "Kilifi/Mombasa/Kwale/Taita Taveta": 15000,
  Kirinyaga: 5000,
  Lamu: 15000,
  Garissa: 15000,
  Wajir: 20000,
  "Moyale/Mandera": 30000,
  Vihiga: 15000,
  Bomet: 15000,
  Nandi: 15000,
  Bungoma: 10000,
  Kakamega: 15000,
  Homabay: 15000,
  Migori: 15000,
  Nairobi: 2000,
  Kiambu: 2000,
  Kajiado: 10000,
  "Kisii/Nyamira": 12000,
  Narok: 7000,
  Nyandarua: 7000,
  Kisumu: 15000,
  Kericho: 15000,
  Kitale: 15000,
  Eldoret: 12000,
  Nyeri: 5000,
  Laikipia: 7000,
  "Samburu/Marsabit": 20000,
  Isiolo: 10000,
  Meru: 8000,
  Embu: 4000,
  "Murang'a": 2000,
  Nakuru: 5000,
  "Kitui/Makueni": 4000,
  Machakos: 3000,
};

const QuotationForm = () => {
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      user_phone: phone,
      user_location: location,
      survey_cost: `KES ${surveyCosts[location].toLocaleString()}`,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_QUOTATION_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitted(true);
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send quote request. Please try again.");
        }
      );
  };

  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Get a Site Survey Quote
      </h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto bg-gray-50 shadow-md p-6 rounded-xl"
        >
          <label className="block mb-4">
            <span className="text-gray-700 font-medium">
              Select Your Location
            </span>
            <select
              className="mt-2 block w-full p-2 border rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            >
              <option value="">-- Choose a location --</option>
              {Object.entries(surveyCosts).map(([loc, cost]) => (
                <option key={loc} value={loc}>
                  {loc} - KES {cost.toLocaleString()}
                </option>
              ))}
            </select>
          </label>

          {location && (
            <p className="text-green-700 mb-4">
              Survey Cost:{" "}
              <strong>KES {surveyCosts[location].toLocaleString()}</strong>
            </p>
          )}

          <label className="block mb-4">
            <span className="text-gray-700 font-medium">Your Email</span>
            <input
              type="email"
              className="mt-1 block w-full p-2 border rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 font-medium">Your Phone Number</span>
            <input
              type="tel"
              className="mt-1 block w-full p-2 border rounded-md"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </label>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg w-full"
          >
            Submit Request
          </button>

          <div className="mt-4 text-center">
            <p className="text-gray-500">Or</p>
            <WhatsappButton message="Hello, I’d like a site survey from Blissful Outdoor Solutions." />
          </div>
        </form>
      ) : (
        <div className="text-center max-w-xl mx-auto bg-green-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-4">
            Request Sent Successfully!
          </h3>
          <p className="text-gray-700">
            Thank you for your interest. Our team will contact you shortly via
            email or phone. You may also reach us directly through WhatsApp.
          </p>
          <div className="mt-4">
            <WhatsappButton message="Hello, I just sent a site survey request. Kindly assist." />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationForm;
