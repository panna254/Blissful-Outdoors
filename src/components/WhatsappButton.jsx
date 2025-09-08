import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppButton = ({ 
  message = "Hi! I'm interested in your landscaping services. Can you help me with a quote?",
  showTooltip = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);
  
  const phoneNumber = "254715812430";
  const encodedMessage = encodeURIComponent(message);

  useEffect(() => {
    // Show button after 2 seconds for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears
      if (showTooltip) {
        setTimeout(() => setShowTooltipState(true), 1000);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltipState(false), 6000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [showTooltip]);

  const handleClick = () => {
    // Track WhatsApp click for analytics
    if (window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_button'
      });
    }
    
    // Open WhatsApp in new window/tab
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 sm:bottom-4 sm:right-4 z-50 group">
        {/* Tooltip */}
        {showTooltipState && (
          <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-3 transform transition-all duration-300 animate-bounce">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Need help with landscaping?
                </p>
                <p className="text-xs text-gray-600">
                  Chat with us on WhatsApp for instant quotes!
                </p>
              </div>
              <button
                onClick={() => setShowTooltipState(false)}
                className="text-gray-400 hover:text-gray-600 ml-2"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>
            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-r border-b border-gray-200 transform rotate-45"></div>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 group-hover:animate-pulse"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="text-2xl" />
        </a>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
      </div>

      {/* Mobile-specific positioning - handled by Tailwind responsive classes */}
    </>
  );
};

export default WhatsAppButton;
