import React from "react";

const SEOHelmet = ({ 
  title = "Blissful Outdoor Solutions - Professional Landscaping Services Kenya | Cabro Installation Nairobi",
  description = "Leading landscaping services Kenya & cabro installation Nairobi. Professional pergola installation, car parking shades, terrazzo flooring & outdoor services across Kenya. Free quotes!",
  keywords = "landscaping services Kenya, cabro installation Kenya, pergola installation Kenya, car parking shades Kenya, landscaping services Nairobi, cabro installation Nairobi, outdoor services Kenya, garden design Kenya, shade structures Kenya, terrazzo flooring Kenya, professional landscaping company Kenya, landscaping contractors Kenya",
  image = "/assets/hero.jpeg",
  url = "https://blissfuloutdoors.com",
  type = "website"
}) => {
  React.useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    // Open Graph tags
    const updateOrCreateMeta = (property, content) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateMeta('og:title', title);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:image', image);
    updateOrCreateMeta('og:url', url);
    updateOrCreateMeta('og:type', type);
    updateOrCreateMeta('og:site_name', 'Blissful Outdoor Solutions');

    // Twitter Card tags
    updateOrCreateMeta('twitter:card', 'summary_large_image');
    updateOrCreateMeta('twitter:title', title);
    updateOrCreateMeta('twitter:description', description);
    updateOrCreateMeta('twitter:image', image);

    // Additional SEO meta tags
    const updateOrCreateNameMeta = (name, content) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };

    updateOrCreateNameMeta('robots', 'index, follow');
    updateOrCreateNameMeta('author', 'Blissful Outdoor Solutions');
    updateOrCreateNameMeta('geo.region', 'KE');
    updateOrCreateNameMeta('geo.placename', 'Kenya');
    updateOrCreateNameMeta('language', 'en');

  }, [title, description, keywords, image, url, type]);

  return null;
};

export default SEOHelmet;
