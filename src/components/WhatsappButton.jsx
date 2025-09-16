import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppButton = ({ 
  message = "Hello! I'm interested in your outdoor services. Can you help me?",
  showTooltip = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltipState, setShowTooltipState] = useState(false);
  
  const phoneNumber = "254715812430";
  const encodedMessage = encodeURIComponent(message);
  
  console.log('WhatsApp Button Component Loaded');
  console.log('Phone Number:', phoneNumber);
  console.log('Encoded Message:', encodedMessage);

  useEffect(() => {
    console.log('WhatsApp Button useEffect triggered');
    // Show button immediately for testing
    const timer = setTimeout(() => {
      console.log('Setting button visible');
      setIsVisible(true);
      // Show tooltip after button appears
      if (showTooltip) {
        setTimeout(() => {
          console.log('Showing tooltip');
          setShowTooltipState(true);
        }, 1000);
        // Hide tooltip after 5 seconds
        setTimeout(() => {
          console.log('Hiding tooltip');
          setShowTooltipState(false);
        }, 6000);
      }
    }, 500); // Reduced delay for testing

    return () => clearTimeout(timer);
  }, [showTooltip]);

  const handleClick = (e) => {
    console.log('WhatsApp button clicked!');
    e.preventDefault();
    e.stopPropagation();
    
    // Track WhatsApp click for analytics
    try {
      if (window.gtag) {
        window.gtag('event', 'whatsapp_click', {
          event_category: 'engagement',
          event_label: 'floating_button'
        });
      }
    } catch (error) {
      console.log('Analytics tracking failed:', error);
    }
    
    // Construct WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    console.log('Opening WhatsApp URL:', whatsappUrl);
    
    // Try multiple methods to open WhatsApp
    try {
      // Method 1: window.open
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        console.log('Popup blocked, trying alternative method');
        // Method 2: Direct location change
        window.location.href = whatsappUrl;
      }
    } catch (error) {
      console.error('Error opening WhatsApp:', error);
      // Method 3: Fallback
      try {
        window.location.href = whatsappUrl;
      } catch (fallbackError) {
        console.error('Fallback method also failed:', fallbackError);
        alert('Unable to open WhatsApp. Please call +254715812430 directly.');
      }
    }
  };

  console.log('Button visibility state:', isVisible);
  
  if (!isVisible) {
    console.log('Button not visible, returning null');
    return null;
  }
  
  console.log('Rendering WhatsApp button');

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
                  Need help with any outdoor work?
                </p>
                <p className="text-xs text-gray-600">
                  Chat with us on WhatsApp for instant assistance!
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
        <button
          onClick={handleClick}
          className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-110 group-hover:animate-pulse cursor-pointer"
          aria-label="Chat on WhatsApp"
          type="button"
        >
          <FaWhatsapp className="text-2xl" />
        </button>

        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
      </div>

      {/* Mobile-specific positioning - handled by Tailwind responsive classes */}
    </>
  );
};

export default WhatsAppButton;
