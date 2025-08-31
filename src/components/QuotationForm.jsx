import React, { useState, useEffect } from "react";
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

const services = [
  "Landscaping Services",
  "Cabro Installation", 
  "Car Parking Shades",
  "Shade Sails & Canopies",
  "Privacy Screen Fence",
  "Mazeras Installation",
  "Electric Fence Installation",
  "Flowers & Flower Vases",
  "Pergola Design & Installation",
  "Perimeter Wall Construction",
  "Terrazzo Flooring",
  "Gazebo Installation"
];

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    location: "",
    address: "",
    
    // Project Information
    selectedService: "",
    projectType: "",
    propertyType: "",
    projectArea: "",
    budget: "",
    timeline: "",
    
    // Service-specific fields
    specificRequirements: "",
    additionalServices: [],
    preferredMaterials: "",
    designPreferences: "",
    
    // Additional Information
    projectDescription: "",
    hasExistingStructures: "",
    accessibilityNotes: "",
    specialRequests: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  // Get service from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, selectedService: serviceParam }));
    }
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCheckboxChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.location) newErrors.location = 'Location is required';
    }
    
    if (step === 2) {
      if (!formData.selectedService) newErrors.selectedService = 'Please select a service';
      if (!formData.propertyType) newErrors.propertyType = 'Property type is required';
      if (!formData.projectArea.trim()) newErrors.projectArea = 'Project area is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateStep(3)) return;

    const templateParams = {
      // Personal Information
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: formData.phone,
      user_location: formData.location,
      user_address: formData.address,
      
      // Project Information
      selected_service: formData.selectedService,
      project_type: formData.projectType,
      property_type: formData.propertyType,
      project_area: formData.projectArea,
      budget_range: formData.budget,
      timeline: formData.timeline,
      
      // Service-specific Information
      specific_requirements: formData.specificRequirements,
      additional_services: formData.additionalServices.join(', '),
      preferred_materials: formData.preferredMaterials,
      design_preferences: formData.designPreferences,
      
      // Additional Information
      project_description: formData.projectDescription,
      existing_structures: formData.hasExistingStructures,
      accessibility_notes: formData.accessibilityNotes,
      special_requests: formData.specialRequests,
      
      // Survey cost if location is selected
      survey_cost: formData.location ? `KES ${surveyCosts[formData.location]?.toLocaleString() || 'N/A'}` : 'N/A',
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
          alert("Failed to send quotation request. Please try again.");
        }
      );
  };

  const renderStepIndicator = () => (
    <div className="flex justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
              currentStep >= step ? 'bg-green-600' : 'bg-gray-300'
            }`}
          >
            {step}
          </div>
          {step < 3 && (
            <div
              className={`w-16 h-1 ${
                currentStep > step ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold text-green-700 mb-2">Step 1: Personal Information</h3>
        <p className="text-green-700 text-sm">Please provide your contact details so we can reach you with your quotation and schedule your site survey.</p>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
        <input
          type="text"
          className={`w-full p-3 border rounded-lg ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.fullName}
          onChange={(e) => handleInputChange('fullName', e.target.value)}
          placeholder="Enter your full name"
        />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
        <input
          type="email"
          className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
        <input
          type="tel"
          className={`w-full p-3 border rounded-lg ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Location *</label>
        <select
          className={`w-full p-3 border rounded-lg ${errors.location ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.location}
          onChange={(e) => handleInputChange('location', e.target.value)}
        >
          <option value="">-- Choose your location --</option>
          {Object.entries(surveyCosts).map(([loc, cost]) => (
            <option key={loc} value={loc}>
              {loc} - KES {cost.toLocaleString()}
            </option>
          ))}
        </select>
        {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
        {formData.location && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-2">
            <p className="text-blue-800 text-sm mb-1">
              <strong>Survey Cost for {formData.location}: KES {surveyCosts[formData.location].toLocaleString()}</strong>
            </p>
            <p className="text-blue-600 text-xs">
              This fee is fully deductible from your final project cost if you proceed with us.
            </p>
          </div>
        )}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Property Address</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="3"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          placeholder="Enter your property address (optional)"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">Step 2: Project Information</h3>
        <p className="text-blue-700 text-sm">Tell us about your project requirements so we can provide the most accurate quotation.</p>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">Service Required *</label>
        <select
          className={`w-full p-3 border rounded-lg ${errors.selectedService ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.selectedService}
          onChange={(e) => handleInputChange('selectedService', e.target.value)}
        >
          <option value="">-- Select a service --</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.selectedService && <p className="text-red-500 text-sm mt-1">{errors.selectedService}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Property Type *</label>
        <select
          className={`w-full p-3 border rounded-lg ${errors.propertyType ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.propertyType}
          onChange={(e) => handleInputChange('propertyType', e.target.value)}
        >
          <option value="">-- Select property type --</option>
          <option value="Residential Home">Residential Home</option>
          <option value="Commercial Building">Commercial Building</option>
          <option value="Industrial Facility">Industrial Facility</option>
          <option value="School/Institution">School/Institution</option>
          <option value="Hotel/Restaurant">Hotel/Restaurant</option>
          <option value="Other">Other</option>
        </select>
        {errors.propertyType && <p className="text-red-500 text-sm mt-1">{errors.propertyType}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Project Area/Size *</label>
        <input
          type="text"
          className={`w-full p-3 border rounded-lg ${errors.projectArea ? 'border-red-500' : 'border-gray-300'}`}
          value={formData.projectArea}
          onChange={(e) => handleInputChange('projectArea', e.target.value)}
          placeholder="e.g., 100 square meters, 2 car spaces, etc."
        />
        {errors.projectArea && <p className="text-red-500 text-sm mt-1">{errors.projectArea}</p>}
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Budget Range</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={formData.budget}
          onChange={(e) => handleInputChange('budget', e.target.value)}
        >
          <option value="">-- Select budget range --</option>
          <option value="Under KES 100,000">Under KES 100,000</option>
          <option value="KES 100,000 - 300,000">KES 100,000 - 300,000</option>
          <option value="KES 300,000 - 500,000">KES 300,000 - 500,000</option>
          <option value="KES 500,000 - 1,000,000">KES 500,000 - 1,000,000</option>
          <option value="Over KES 1,000,000">Over KES 1,000,000</option>
          <option value="To be discussed">To be discussed</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Preferred Timeline</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={formData.timeline}
          onChange={(e) => handleInputChange('timeline', e.target.value)}
        >
          <option value="">-- Select timeline --</option>
          <option value="ASAP">As soon as possible</option>
          <option value="Within 1 month">Within 1 month</option>
          <option value="1-3 months">1-3 months</option>
          <option value="3-6 months">3-6 months</option>
          <option value="6+ months">6+ months</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded mb-6">
        <h3 className="text-xl font-semibold text-yellow-700 mb-2">Step 3: Additional Details</h3>
        <p className="text-yellow-700 text-sm">Provide additional information to help us understand your vision and deliver the perfect solution.</p>
      </div>
      
      <div>
        <label className="block text-gray-700 font-medium mb-2">Project Description</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="4"
          value={formData.projectDescription}
          onChange={(e) => handleInputChange('projectDescription', e.target.value)}
          placeholder="Describe your vision: What do you want to achieve? Include details about style preferences, materials, colors, and any specific features you have in mind..."
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Specific Requirements</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="3"
          value={formData.specificRequirements}
          onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
          placeholder="Any specific requirements: accessibility needs, drainage concerns, existing structures to work around, maintenance preferences, etc..."
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Preferred Materials</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={formData.preferredMaterials}
          onChange={(e) => handleInputChange('preferredMaterials', e.target.value)}
          placeholder="e.g., Wood, Metal, Stone, etc."
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Design Preferences</label>
        <input
          type="text"
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={formData.designPreferences}
          onChange={(e) => handleInputChange('designPreferences', e.target.value)}
          placeholder="e.g., Modern, Traditional, Curved, etc."
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Existing Structures</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg"
          value={formData.hasExistingStructures}
          onChange={(e) => handleInputChange('hasExistingStructures', e.target.value)}
        >
          <option value="">-- Select option --</option>
          <option value="Yes - need to work around them">Yes - need to work around them</option>
          <option value="Yes - can be removed">Yes - can be removed</option>
          <option value="No existing structures">No existing structures</option>
        </select>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Accessibility Notes</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="2"
          value={formData.accessibilityNotes}
          onChange={(e) => handleInputChange('accessibilityNotes', e.target.value)}
          placeholder="Any access restrictions or special considerations..."
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Special Requests</label>
        <textarea
          className="w-full p-3 border border-gray-300 rounded-lg"
          rows="3"
          value={formData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          placeholder="Any special requests or additional information..."
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white py-12 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Request Your Professional Quotation
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Complete our comprehensive form to receive an accurate, detailed quotation for your outdoor project
        </p>
      </div>

      {!submitted ? (
        <div className="max-w-4xl mx-auto">
          {renderStepIndicator()}
          
          <form onSubmit={handleSubmit} className="bg-gray-50 shadow-lg p-8 rounded-xl">
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
            
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
                >
                  Previous
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg ml-auto"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg ml-auto"
                >
                  Submit Quotation Request
                </button>
              )}
            </div>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-500 mb-2">Need immediate assistance?</p>
            <WhatsappButton message={`Hello, I'd like a detailed quotation for ${formData.selectedService || 'outdoor services'} from Blissful Outdoor Solutions.`} />
          </div>
        </div>
      ) : (
        <div className="text-center max-w-2xl mx-auto bg-green-100 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Quotation Request Sent Successfully!
          </h3>
          <p className="text-gray-700 mb-4">
            Thank you for providing detailed information about your project. Our team will review your requirements and contact you within 24 hours with a comprehensive quotation.
          </p>
          <p className="text-gray-600 mb-6">
            We may also schedule a site survey to provide the most accurate quotation for your project.
          </p>
          <div className="mt-4">
            <WhatsappButton message="Hello, I just sent a detailed quotation request. Please assist me with the next steps." />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationForm;
