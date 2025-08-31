import React from "react";

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Blissful Outdoor Solutions",
    "description": "Professional landscaping, cabro installation, shade structures, and outdoor services across Kenya",
    "url": "https://blissfuloutdoors.com",
    "telephone": "+254-XXX-XXXXX", // Replace with actual phone
    "email": "info@blissfuloutdoors.com", // Replace with actual email
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "KE",
      "addressRegion": "Kenya"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.2921", // Replace with actual coordinates
      "longitude": "36.8219"
    },
    "openingHours": "Mo-Fr 08:00-17:00, Sa 08:00-15:00",
    "priceRange": "$$",
    "serviceArea": {
      "@type": "Country",
      "name": "Kenya"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Outdoor Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landscaping Services",
            "description": "Professional garden design and landscaping transformation"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Cabro Installation",
            "description": "Durable cabro paving for driveways and walkways"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Car Parking Shades",
            "description": "Modern shade structures for vehicle protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pergola Installation", 
            "description": "Custom pergola design and construction"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "sameAs": [
      "https://www.facebook.com/blissfuloutdoors", // Replace with actual social links
      "https://www.instagram.com/blissfuloutdoors",
      "https://www.youtube.com/@blissfuloutdoorsolutions"
    ]
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'structured-data';
    
    // Remove existing structured data script if it exists
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('structured-data');
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove);
      }
    };
  }, []);

  return null;
};

export default StructuredData;
