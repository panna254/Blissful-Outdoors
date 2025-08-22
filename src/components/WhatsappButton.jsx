// WhatsappButton.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = ({ message }) => {
  const phoneNumber = "254715812430";
  const encodedMessage = encodeURIComponent(message);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-full transition"
    >
      <FaWhatsapp className="text-lg" />
      Chat on WhatsApp
    </a>
  );
};

export default WhatsappButton;
