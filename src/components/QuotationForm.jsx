import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const quotableServices = [
  "Car Parking Shades",
  "Shade Sails & Canopies", 
  "Privacy Screen Fence",
  "Electric Fence Installation",
  "Terrazzo Flooring",
  "Gazebo Installation",
  "Pergola Design & Installation",
  "Cabro Installation",
  "Mazeras Installation"
];

const servicePricing = {
  'Car Parking Shades': {
    carPrices: {
      '1': 80000,
      '2': 120000,
      '3': 140000,
      '4': 180000
    },
    designs: {
      'Curved (Standard)': 1.0,
      'Cantilever': 1.2,
      'Curved with Plasma Cutting': 1.4
    }
  },
  'Shade Sails & Canopies': {
    perSqmRate: 4500,
    material: 'CP2 Fabric',
    warranty: '6 Years'
  },
  'Cabro Installation': {
    types: {
      'Normal Cabros': 1600,
      'Coloured Cabros': 2400
    },
    note: 'Excavation and backfilling not included. Within Nairobi Metropolitan.'
  },
  'Mazeras Installation': {
    types: {
      'Unshaped Design': 1300,
      'Machine Cut Design': 2500
    }
  },
  'Pergola Design & Installation': {
    types: {
      'Timber (Pine/Cyprus) + Polycarbonate 8mm': 7500,
      'Steel + Polycarbonate 8mm': 7000
    }
  },
  'Terrazzo Flooring': {
    perSqmRate: 1400
  },
  'Electric Fence Installation': {
    perMeterRate: 1250,
    note: 'Electric and Razor wire fence'
  }
};

const QuotationForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errors, setErrors] = useState({});
  const [estimatedCost, setEstimatedCost] = useState(0);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    address: '',
    selectedService: '',
    numberOfCars: '',
    squareMeters: '',
    materialType: '',
    fenceLength: '',
    fenceHeight: '',
    gateRequired: 'No',
    numberOfGates: '',
    flooringArea: '',
    flooringPattern: 'Standard',
    gazeboSize: '',
    gazeboStyle: 'Standard',
    pergolaLength: '',
    pergolaWidth: '',
    timeline: '',
    specialRequirements: '',
    projectDescription: "",
    hasExistingStructures: "",
    accessibilityNotes: "",
    specialRequests: ""
  });

  // Get service from URL params
  useEffect(() => {
    const service = searchParams.get('service');
    if (service) {
      setFormData(prev => ({ ...prev, selectedService: service }));
    }
  }, [searchParams]);

  // Calculate estimated cost
  const calculateEstimate = () => {
    const service = formData.selectedService;
    const pricing = servicePricing[service];
    
    if (!pricing) return 0;
    
    let cost = 0;
    
    switch (service) {
      case 'Car Parking Shades':
        if (formData.numberOfCars && pricing.carPrices[formData.numberOfCars]) {
          cost = pricing.carPrices[formData.numberOfCars];
          if (formData.materialType && pricing.designs[formData.materialType]) {
            cost *= pricing.designs[formData.materialType];
          }
        }
        break;
      case 'Shade Sails & Canopies':
        if (formData.squareMeters) {
          cost = parseFloat(formData.squareMeters) * pricing.perSqmRate;
        }
        break;
      case 'Cabro Installation':
        if (formData.squareMeters && formData.materialType) {
          cost = parseFloat(formData.squareMeters) * pricing.types[formData.materialType];
        }
        break;
      case 'Mazeras Installation':
        if (formData.squareMeters && formData.materialType) {
          cost = parseFloat(formData.squareMeters) * pricing.types[formData.materialType];
        }
        break;
      case 'Pergola Design & Installation':
        if (formData.squareMeters && formData.materialType) {
          cost = parseFloat(formData.squareMeters) * pricing.types[formData.materialType];
        }
        break;
      case 'Terrazzo Flooring':
        if (formData.flooringArea) {
          cost = parseFloat(formData.flooringArea) * pricing.perSqmRate;
        }
        break;
      case 'Electric Fence Installation':
        if (formData.fenceLength) {
          cost = parseFloat(formData.fenceLength) * pricing.perMeterRate;
        }
        break;
    }
    
    return Math.round(cost);
  };

  useEffect(() => {
    setEstimatedCost(calculateEstimate());
  }, [formData.selectedService, formData.numberOfCars, formData.squareMeters, formData.materialType, formData.flooringArea, formData.fenceLength]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateStep(2)) return;

    setIsSubmitting(true);

    const templateParams = {
      form_type: 'Quotation Request',
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: formData.phone,
      user_location: formData.location,
      selected_service: formData.selectedService,
      number_of_cars: formData.numberOfCars,
      square_meters: formData.squareMeters,
      material_type: formData.materialType,
      fence_length: formData.fenceLength,
      flooring_area: formData.flooringArea,
      timeline: formData.timeline,
      special_requirements: formData.specialRequirements,
      estimated_cost: `KES ${estimatedCost.toLocaleString()}`
    };

    try {
      await emailjs.send(
        'service_blissful',
        'template_quotation',
        templateParams,
        'your_public_key'
      );
      setShowConfirmation(true);
    } catch (error) {
      // console.error('Error sending email:', error); // Removed for production
      alert('There was an error sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderServiceSpecificFields = () => {
    const service = formData.selectedService;
    const pricing = servicePricing[service];

    if (!service || !pricing) return null;

    switch (service) {
      case 'Car Parking Shades':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Number of Cars *</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.numberOfCars}
                onChange={(e) => handleInputChange('numberOfCars', e.target.value)}
              >
                <option value="">Select number of cars</option>
                {Object.keys(pricing.carPrices).map(num => (
                  <option key={num} value={num}>
                    {num} car{num > 1 ? 's' : ''} - KES {pricing.carPrices[num].toLocaleString()}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Design Type</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.materialType}
                onChange={(e) => handleInputChange('materialType', e.target.value)}
              >
                <option value="">Select design type</option>
                {Object.keys(pricing.designs).map(design => (
                  <option key={design} value={design}>{design}</option>
                ))}
              </select>
            </div>
          </div>
        );

      case 'Shade Sails & Canopies':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Area (Square Meters) *</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.squareMeters}
                onChange={(e) => handleInputChange('squareMeters', e.target.value)}
                placeholder="Enter area in sqm"
              />
              <p className="text-sm text-gray-600 mt-1">
                Rate: KES {pricing.perSqmRate}/sqm | Material: {pricing.material} | Warranty: {pricing.warranty}
              </p>
            </div>
          </div>
        );

      case 'Cabro Installation':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Cabro Type *</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.materialType}
                onChange={(e) => handleInputChange('materialType', e.target.value)}
              >
                <option value="">Select cabro type</option>
                {Object.keys(pricing.types).map(type => (
                  <option key={type} value={type}>
                    {type} - KES {pricing.types[type]}/sqm
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Area (Square Meters) *</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.squareMeters}
                onChange={(e) => handleInputChange('squareMeters', e.target.value)}
                placeholder="Enter area in sqm"
              />
            </div>
            <p className="text-sm text-gray-600">{pricing.note}</p>
          </div>
        );

      case 'Mazeras Installation':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Design Type *</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.materialType}
                onChange={(e) => handleInputChange('materialType', e.target.value)}
              >
                <option value="">Select design type</option>
                {Object.keys(pricing.types).map(type => (
                  <option key={type} value={type}>
                    {type} - KES {pricing.types[type]}/sqm
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Area (Square Meters) *</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.squareMeters}
                onChange={(e) => handleInputChange('squareMeters', e.target.value)}
                placeholder="Enter area in sqm"
              />
            </div>
          </div>
        );

      case 'Pergola Design & Installation':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Material & Design *</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.materialType}
                onChange={(e) => handleInputChange('materialType', e.target.value)}
              >
                <option value="">Select material type</option>
                {Object.keys(pricing.types).map(type => (
                  <option key={type} value={type}>
                    {type} - KES {pricing.types[type]}/sqm
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Area (Square Meters) *</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.squareMeters}
                onChange={(e) => handleInputChange('squareMeters', e.target.value)}
                placeholder="Enter area in sqm"
              />
            </div>
          </div>
        );

      case 'Terrazzo Flooring':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Area (Square Meters) *</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.flooringArea}
                onChange={(e) => handleInputChange('flooringArea', e.target.value)}
                placeholder="Enter area in sqm"
              />
              <p className="text-sm text-gray-600 mt-1">Rate: KES {pricing.perSqmRate}/sqm</p>
            </div>
          </div>
        );

      case 'Electric Fence Installation':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Fence Length (Meters) *</label>
              <input
                type="number"
                className="w-full p-3 border border-gray-300 rounded-lg"
                value={formData.fenceLength}
                onChange={(e) => handleInputChange('fenceLength', e.target.value)}
                placeholder="Enter length in meters"
              />
              <p className="text-sm text-gray-600 mt-1">
                Rate: KES {pricing.perMeterRate}/meter | {pricing.note}
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Quote Requested!</h2>
          <p className="text-gray-600 mb-6">
            Your quotation request has been submitted successfully. We'll contact you within 24 hours with a detailed quote.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Home
            </button>
            <button
              type="button"
              onClick={() => {
                const message = "Hello, I just sent a detailed quotation request. Please assist me with the next steps.";
                window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="w-full border border-green-600 text-green-600 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              Contact via WhatsApp
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-24 pb-12 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 px-8 py-6">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center">
              Get Instant Quote
            </h1>
            <p className="text-green-100 text-center mt-2">
              Calculate pricing for your outdoor project
            </p>
          </div>

          {/* Progress Bar */}
          <div className="px-8 py-4 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              {[1, 2].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                    currentStep >= step
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.location ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your location"
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Service Selection & Pricing */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Service & Pricing Details</h2>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Service *
                  </label>
                  <select
                    value={formData.selectedService}
                    onChange={(e) => handleInputChange('selectedService', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.selectedService ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select a service</option>
                    {quotableServices.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.selectedService && <p className="text-red-500 text-sm mt-1">{errors.selectedService}</p>}
                </div>

                {renderServiceSpecificFields()}

                {estimatedCost > 0 && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h3 className="text-lg font-semibold text-green-700 mb-2">Estimated Cost</h3>
                    <p className="text-2xl font-bold text-green-800">
                      KES {estimatedCost.toLocaleString()}
                    </p>
                    {formData.location && !formData.location.toLowerCase().includes('nairobi') && (
                      <p className="text-sm text-orange-600 mt-2">
                        * Additional charges for transport, accommodation, and food apply for locations outside Nairobi
                      </p>
                    )}
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => handleInputChange('timeline', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Just planning">Just planning</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Requirements
                  </label>
                  <textarea
                    value={formData.specialRequirements}
                    onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any special requirements or questions?"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
              <div>
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Previous
                  </button>
                )}
              </div>

              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    const message = `Hello, I'd like a detailed quotation for ${formData.selectedService || 'outdoor services'} from Blissful Outdoor Solutions.`;
                    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors"
                >
                  WhatsApp
                </button>
                
                {currentStep < 2 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Quote'}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
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
            <button
            type="button"
            onClick={() => {
              const message = `Hello, I'd like a detailed quotation for ${formData.selectedService || 'outdoor services'} from Blissful Outdoor Solutions.`;
              window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank');
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            WhatsApp Us
          </button>
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
            <button
              type="button"
              onClick={() => {
                const message = "Hello, I just sent a detailed quotation request. Please assist me with the next steps.";
                window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
            >
              WhatsApp Us
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuotationForm;
