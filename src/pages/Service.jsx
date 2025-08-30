import React from "react";
import { useNavigate } from "react-router-dom";

import landscapingImg from "../assets/landscaping.jpeg";
import cabroImg from "../assets/cabro.jpeg";
import carShadeImg from "../assets/carshade.jpeg";
import shadeSailsImg from "../assets/shadesail.jpeg";
import canopiesImg from "../assets/canopies.jpeg";
import privacyScreenImg from "../assets/privacyscreens.jpeg";
import mazerasImg from "../assets/mazeras.jpeg";
import electricFenceImg from "../assets/electricfence.jpeg";
import flowersImg from "../assets/flowers.jpeg";
import pergolaImg from "../assets/pergola.jpeg";
import perimeterWallImg from "../assets/pwall.jpeg";
import terrazzoImg from "../assets/terrazzo.jpeg";
import gazeboImg from "../assets/gazebo.jpeg";

const services = [
  {
    title: "Landscaping Services",
    description:
      "We turn ordinary outdoor spaces into lush, vibrant sanctuaries with full-site transformation, turf laying, planting, flower installation, walkway and paving slab installation, and soil conditioning.",
    image: landscapingImg,
  },
  {
    title: "Cabro Installation",
    description:
      "Professional cabro installations for driveways, parking areas, walkways, and more. Durable, colourfast, and resistant to heavy use.",
    image: cabroImg,
  },
  {
    title: "Car Parking Shades",
    description:
      "Protect your vehicle from harsh weather with our curved, cantilever, or plasma-cut shades. Standard size: 2.5m x 5m per vehicle.",
    image: carShadeImg,
  },
  {
    title: "Shade Sails & Canopies",
    description:
      "Modern shade solutions for irregular areas like car washes, clubs, restaurants, and gardens. Unlike mobile tents, they don't carry rainwater and are wind-resistant.",
    image: shadeSailsImg,
  },
  {
    title: "Privacy Screen Fence",
    description:
      "Improve privacy and aesthetics with durable, stylish screens for your outdoor space.",
    image: privacyScreenImg,
  },
  {
    title: "Mazeras Installation",
    description:
      "Natural stone finishes that bring texture and beauty to walkways, pool decks, and walls.",
    image: mazerasImg,
  },
  {
    title: "Electric Fence Installation",
    description:
      "Secure your home, school, or business with reliable electric fencing solutions.",
    image: electricFenceImg,
  },
  {
    title: "Flowers & Flower Vases",
    description:
      "Brighten up your indoors or garden with curated flowers and elegant vases.",
    image: flowersImg,
  },
  {
    title: "Pergola Design & Installation",
    description:
      "Custom wood or metal pergolas to transform your patio or garden into an elegant retreat.",
    image: pergolaImg,
  },
  {
    title: "Perimeter Wall Construction",
    description:
      "Enhance your property's security and aesthetic with strong, stylish perimeter walls. We offer stone, concrete, and precast solutions tailored to your design and budget.",
    image: perimeterWallImg,
  },
  {
    title: "Terrazzo Flooring",
    description:
      "Add timeless elegance to your spaces with our custom terrazzo solutions. From surface prep to polishing, we deliver durable, seamless finishes with beautiful aggregate patterns.",
    image: terrazzoImg,
  },
  {
    title: "Gazebo Installation",
    description:
      "Create a relaxing and functional outdoor retreat with our expertly crafted gazebos. Choose from custom wood or metal designs built to enhance your garden or backyard.",
    image: gazeboImg,
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleQuote = (serviceName) => {
    navigate(`/quotation?service=${encodeURIComponent(serviceName)}`);
  };

  const handleLearnMore = (serviceName) => {
    const serviceRoutes = {
      "Landscaping Services": "/services/landscaping",
      "Cabro Installation": "/services/cabro-installation",
      "Car Parking Shades": "/services/car-parking-shades",
      "Shade Sails & Canopies": "/services/shade-sails-canopies",
      "Privacy Screen Fence": "/services/privacy-screen-fence",
      "Mazeras Installation": "/services/mazeras-installation",
      "Electric Fence Installation": "/services/electric-fence-installation",
      "Flowers & Flower Vases": "/services/flowers-flower-vases",
      "Pergola Design & Installation": "/services/pergola-design-installation",
      "Perimeter Wall Construction": "/services/perimeter-wall-construction",
      "Terrazzo Flooring": "/services/terrazzo-flooring",
      "Gazebo Installation": "/services/gazebo-installation"
    };
    
    const route = serviceRoutes[serviceName];
    if (route) {
      navigate(route);
    }
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 mt-20">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-6">
        What we Do
      </h2>
      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12">
        At Blissful Outdoor Solutions, we provide premium outdoor design,
        construction, and beautification services. From lush landscaping to
        durable paving and stylish structures, our team delivers excellence
        tailored to your space.
      </p>

      <div className="space-y-16">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <img
              src={service.image}
              alt={service.title}
              className={`w-full md:w-1/2 rounded-lg shadow-lg object-cover ${
                service.title === "Landscaping Services" ? "h-[36rem] md:h-[44rem]" : 
                service.title === "Car Parking Shades" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Shade Sails & Canopies" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Pergola Design & Installation" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Privacy Screen Fence" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Mazeras Installation" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Electric Fence Installation" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Flowers & Flower Vases" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Perimeter Wall Construction" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Gazebo Installation" ? "h-[32rem] md:h-[40rem]" :
                service.title === "Terrazzo Flooring" ? "h-[32rem] md:h-[40rem]" : "h-80 md:h-96"
              }`}
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-green-700 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              {service.title === "Landscaping Services" && (
                <>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Site segregation, soil conditioning, and turf laying</li>
                    <li>Flower and tree planting with uniform grass selection</li>
                    <li>Walkway and paving slab paths connecting key areas</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs landscaping?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Bumpy lawns that aren’t comfortable for sitting, basking, or play</li>
                    <li>Mixed or drying grass needing a uniform, thriving lawn</li>
                    <li>Spaces that need ornamental flowers to elevate beauty and attract birds</li>
                    <li>Areas needing defined walking paths (e.g., house ↔ gazebo ↔ cleaning area)</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Pricing (Landscaping)</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Area size (square metres)</li>
                    <li>Whether ground segregation is required</li>
                    <li>Flower types and quantities</li>
                    <li>Grass type and number of bags</li>
                    <li>Soil suitability for grass, flowers, trees, and fruits</li>
                    <li>Manure and soil amendments</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    We recommend a <span className="font-semibold">Site Survey</span> for accurate measurements and a tailored quote.
                  </p>
                  
                </>
              )}
              {service.title === "Cabro Installation" && (
                <>
                  <p className="text-gray-600 mb-2">
                    Ideal for driveways, parking lots, loading zones, petrol stations, and walkways.
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Patterns, designs, and sizes for enhanced aesthetics</li>
                    <li>Heavy‑duty sub‑base prep for durability under constant loads</li>
                    <li>Colourfast, low‑breakage blocks designed to last</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Where to install Cabros</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Driveways</li>
                    <li>Parking lots</li>
                    <li>Loading and offloading points</li>
                    <li>Petrol stations</li>
                    <li>Walkways and defined paths</li>
                  </ul>
                  <a href="/projects/completed" className="inline-block underline text-green-700 mr-3">See pictures</a>
                </>
              )}
              {service.title === "Car Parking Shades" && (
                <>
                  <p className="text-gray-600 mb-4">
                    Have you ever asked yourself what it means to cover your car from adverse weather? Adverse weather poses risks like fading paint and dashboard damage. People prefer basement parking or installed car shades because they know how to prevent damage from rain, sun, wind, and bird droppings.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We accommodate any number of vehicles at home or business premises, provided there's enough space. Our technicians work from scratch under your supervision until achieving exactly what you described.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Pricing (Car Parking Shade)</h4>
                  <p className="text-gray-600 mb-2">
                    By square meters (SQM), we determine how many cars will fit. Standard car size: 2.5m × 5m. Our design ensures complete vehicle coverage, even with doors fully open.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Design Options</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Curved (Standard Design)</li>
                    <li>Cantilever</li>
                    <li>Curved with Plasma Cutting</li>
                  </ul>
                  <a href="/projects/completed" className="inline-block underline text-green-700 mr-3">See previous designs</a>
                  <a href="/quotation?service=Car%20Parking%20Shades" className="inline-block underline text-green-700">Generate quotation</a>
                </>
              )}
              {service.title === "Shade Sails & Canopies" && (
                <>
                  <p className="text-gray-600 mb-4">
                    When you think of Shade Sails and Canopies, think about something like a Car Parking Shade, but these are done in irregular areas. Name them: Car Wash, Clubs, Restaurants, Gardens, and at the same time, they create a new, different look to your property, adding more value to outsiders.
                  </p>
                  <p className="text-gray-600 mb-4">
                    It is the modern image and idea that we have equipped ourselves with to put up with the current trends. That is not all, we are selling you the ideas of Shade Sails and Canopies, as it is what that area requires. Unlike mobile tents, Shade Sails and Canopies do not carry rainwater and in any way cannot get damaged by these adversaries. Again, Shade Sails and Canopies are held firm by the structure within them, and not even wind can break them, unlike movable tents.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs Shade Sails & Canopies?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Do you plan to come up with a car wash that accommodates more than 4 or 5 cars at a time, basically because the space is available? A Canopy would be ideal as it will carry the essentials that come with a Canopy</li>
                    <li>If you are planning on starting a restaurant or a club and you are looking to cover the balconies in a modern style that is not the ordinary roofing, what is it? Ask for a Shade Sail. They are beautiful on the outside, and that tells you what—this by default invites customers inside. Buy a Shade Sail from us</li>
                    <li>Let's say you have a property that needs an extended roofing, but in style. This roofing, for instance, is to go to the balcony areas or your veranda. Look to have a Shade Sail installed in these areas by us</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Modern, stylish alternative to traditional roofing</li>
                    <li>Wind-resistant and durable construction</li>
                    <li>No rainwater accumulation like mobile tents</li>
                    <li>Creates attractive outdoor spaces that add property value</li>
                    <li>Suitable for irregular areas and modern design requirements</li>
                    <li>Professional installation with structural integrity</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Contact us today for modern shade solutions that transform your outdoor spaces and add value to your property.
                  </p>
                </>
              )}
              {service.title === "Pergola Design & Installation" && (
                <>
                  <p className="text-gray-600 mb-4">
                    A pergola is a design that creates an extended roof either beside the house/building or on top of a massionate. A pergola design serves a much more massive purpose than anyone would imagine.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs a Pergola Design?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>If you just built your home or premises and realized that part of the construction would look great covered with an extended roofing to accommodate visitors or family as an outdoor resting area</li>
                    <li>If you need extra coverage from rains or sun, especially in areas with floor tiles where rain spills could cause slippery conditions</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    It is worth noting that the above applies to both ground floors and areas above the house. The extended roofing created by the pergola is not meant to cover the area thoroughly; the polycarbonate used in designing this roof allows light to pass through, thus creating a unique design with lighting.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Find the preferred Pergola Design for your property from our <a href="/gallery" className="text-green-700 underline hover:text-green-600 transition-colors">Gallery</a>. Therefore, it sums up the whole idea of pergola design as it also gives an authentic look and attractiveness.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Benefits</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Creates authentic outdoor resting areas</li>
                    <li>Provides protection from rain and sun</li>
                    <li>Allows natural light to pass through</li>
                    <li>Enhances property aesthetics and value</li>
                    <li>Suitable for both residential and commercial properties</li>
                  </ul>
                </>
              )}
              {service.title === "Privacy Screen Fence" && (
                <>
                  <p className="text-gray-600 mb-4">
                    What is a Privacy Screen Fence? In principle, it is a fence made up of a fabric driz which separates one side of the divide from the other, and it is specifically to block the sight. Any wall that you come across and on top of it or beside it, is flanked with a fabric cover of whichever colour, that is the Privacy Screen Fence.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Just like an electric fence, whoever is looking to have their properties blocked from sight does not need a perimeter wall, as it is possible to have it top over the perimeter wall or start right from the ground. How about modifications to block the required heights? Blissful Outdoor Solutions will offer you ideas and help you reach your decision, and after it all, have a favourable Privacy Fence that gives enough privacy with the correct measurements, strength, and beauty.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs a Privacy Screen Fence?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>If you have a fence, but your fence plantation has not grown fully to offer the privacy</li>
                    <li>If other properties beside yours have outshone your privacy in terms of height, design, and overall appearance</li>
                    <li>If you're looking to separate the garden area from the house in your home</li>
                    <li>For businesses like restaurants or hotels that need to separate amenities like swimming pools and block them from sight and passersby</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Key Features</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Fabric driz material for effective sight blocking</li>
                    <li>Can be installed on top of existing perimeter walls</li>
                    <li>Can start from the ground without requiring a wall</li>
                    <li>Customizable heights to meet specific privacy requirements</li>
                    <li>Available in various colours to match your design preferences</li>
                    <li>Professional installation with correct measurements, strength, and beauty</li>
                  </ul>
                </>
              )}
              {service.title === "Mazeras Installation" && (
                <>
                  <p className="text-gray-600 mb-4">
                    What are Mazeras? These are natural stones primarily mined from the coastal region, which are shiny and in irregular shapes, and are used in decoration. They come in different colours, from black, white, cream, red, yellow, and green. Mazeras are highly used in the decoration of compounds, but in the 21st century, their use has progressed to further decorating even the walls as well.
                  </p>
                  <p className="text-gray-600 mb-4">
                    They are used for both homes and premises, and they leave the areas installed with them with an added attractiveness and uniqueness. A decade ago, the vertical slabs that hold any building in place on the outer side of any construction were just left with plastering, and nothing much was done. Today, that is a different case. Mazeras' installation comes as a nice indication that we are in a different century and that something different for decoration and giving the property a unique look is essential.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs a Mazeras Installation?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>If you want to move beyond basic plastering and give your building's outer walls a modern, decorative finish</li>
                    <li>If you're looking to enhance walking paths around your property that are currently just concrete</li>
                    <li>If you want to add unique attractiveness and character to your compound or premises</li>
                    <li>For properties that need a 21st-century upgrade in exterior decoration and aesthetics</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Key Features</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Natural stones mined from coastal regions with authentic shine and irregular shapes</li>
                    <li>Available in multiple colors: black, white, cream, red, yellow, and green</li>
                    <li>Can be used for compound decoration and wall installations</li>
                    <li>Suitable for both residential homes and commercial premises</li>
                    <li>Creates unique attractiveness and distinctive character</li>
                    <li>Modern alternative to traditional plastering for exterior finishes</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    See various images to choose from your preferred Mazeras design on our <a href="/gallery" className="text-green-700 underline hover:text-green-600 transition-colors">Gallery</a> page.
                  </p>
                </>
              )}
              {service.title === "Electric Fence Installation" && (
                <>
                  <p className="text-gray-600 mb-4">
                    One might think an electric fence is only applicable if one has a perimeter wall to their premises/homes, but that is not the case. An electric fence can be erected right from the ground and still serve the purpose for those who do not have perimeter walls around their properties. The merits carried by the existence of an electric fence, of course, outweigh the demerits.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs an Electric Fence?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Are you tired of intruders jumping over your fence? You would need an electric fence</li>
                    <li>Do you want to keep animals away from your beautiful plantation and safeguard it from damage? Heavy and enough proceeds from your garden or a plantation are fully guaranteed with an electric fence in place</li>
                    <li>Are you in need of keeping away from any form of breach by thieves? No thief or intruder would stand the stability kept by our razor, T wire, and the density created there</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Key Features</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Can be installed without requiring a perimeter wall</li>
                    <li>Customizable specifications: Height, Width, Length, density, and color</li>
                    <li>Advanced security technology with razor wire and T wire systems</li>
                    <li>Effective protection against intruders and unauthorized access</li>
                    <li>Safeguards plantations and gardens from animal damage</li>
                    <li>Professional installation tailored to customer specifications</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    In the same breath, our installation falls under the customer's specification; Right Height, Width, Length, density, and even colour. Contact us today for a customized electric fence solution that meets your exact security needs.
                  </p>
                </>
              )}
              {service.title === "Flowers & Flower Vases" && (
                <>
                  <p className="text-gray-600 mb-4">
                    In our Nursery located along the Northern Bypass, Ruiru Membley, we have plenty of flowers. Any flower you can think of, we have it. Ornamental flowers, colourful, flowers of different shapes, not forgetting Fragrant flowers. Which flower/flowers are you looking for and how many?
                  </p>
                  <p className="text-gray-600 mb-4">
                    Flower vases are essential in creating the attractiveness and also holding any flower or tree in place. Based on the growth and strength of whichever tree, our yard also carries different sizes of these vases. About modelling, our vases are made of fibre and clay. See different vases below.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Our Flower Collection</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Ornamental flowers for decorative purposes</li>
                    <li>Colorful flowers in various shades and hues</li>
                    <li>Flowers of different shapes and sizes</li>
                    <li>Fragrant flowers for sensory appeal</li>
                    <li>Comprehensive selection available at our Ruiru Membley nursery</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Flower Vase Options</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Different sizes based on tree growth and strength requirements</li>
                    <li>Fibre-made vases for durability and lightweight handling</li>
                    <li>Clay vases for traditional aesthetics and natural appeal</li>
                    <li>Essential for creating attractive flower arrangements</li>
                    <li>Proper support for flowers and trees</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Visit our <a href="/gallery" className="text-green-700 underline hover:text-green-600 transition-colors">Gallery</a> to see our beautiful flower collection and various vase designs. Contact us today to discuss your specific flower and vase requirements!
                  </p>
                </>
              )}
              {service.title === "Perimeter Wall Construction" && (
                <>
                  <p className="text-gray-600 mb-4">
                    Perimeter walls are essential security and aesthetic elements that define your property boundaries while enhancing the overall appeal of your premises. Our professional perimeter wall construction services provide durable, stylish solutions tailored to your specific design preferences and security requirements.
                  </p>
                  <p className="text-gray-600 mb-4">
                    We offer multiple construction materials and techniques including stone walls, concrete walls, and precast solutions. Each option is designed to withstand environmental challenges while maintaining visual appeal and structural integrity for years to come.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs Perimeter Wall Construction?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>New property owners looking to establish clear boundaries and enhance security</li>
                    <li>Existing property owners wanting to upgrade or replace deteriorating perimeter walls</li>
                    <li>Commercial properties requiring enhanced security and professional appearance</li>
                    <li>Residential properties needing privacy and boundary definition</li>
                    <li>Properties in areas requiring additional security measures</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Construction Materials & Options</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li><strong>Stone Walls:</strong> Natural, durable, and aesthetically pleasing with unique character</li>
                    <li><strong>Concrete Walls:</strong> Strong, cost-effective, and highly customizable in design</li>
                    <li><strong>Precast Solutions:</strong> Quick installation, consistent quality, and modern appearance</li>
                    <li><strong>Hybrid Designs:</strong> Combination of materials for optimal strength and beauty</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Enhanced property security and boundary definition</li>
                    <li>Improved property aesthetics and curb appeal</li>
                    <li>Increased property value and marketability</li>
                    <li>Privacy enhancement for residential properties</li>
                    <li>Professional appearance for commercial properties</li>
                    <li>Durable construction designed for long-term performance</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Our team works closely with you to understand your specific requirements, budget constraints, and design preferences. We provide detailed consultations and transparent pricing to ensure you get the perfect perimeter wall solution for your property.
                  </p>
                  <p className="text-gray-600 mb-4">
                    View our completed perimeter wall projects in our <a href="/gallery" className="text-green-700 underline hover:text-green-600 transition-colors">Gallery</a> to see the quality and variety of our work. Contact us today for a consultation and quote tailored to your needs.
                  </p>
                </>
              )}
              {service.title === "Gazebo Installation" && (
                <>
                  <p className="text-gray-600 mb-4">
                    A pavilion structure constructed in a private area, like in a garden, is what we call a gazebo. Gazebos are an added resting areas. Apart from homes, Gazebos are also done in guest homes, restaurants, commercial enterprises, like outside a mall, and they are mainly for offering an added shelter outside the main building.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our Gazebos designs are unique and meant for holding private meetings, private conversations, bonfires, movie watching, and also dining. They provide versatile outdoor spaces that enhance both functionality and aesthetics of any property.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Who needs a Gazebo?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Anyone who wants a gazebo in their space, as it does not occupy too much space</li>
                    <li>Anyone can have a Gazebo as it is effective since modifications can be made in whichever way to serve the intended purpose of shelter outside</li>
                    <li>Commercial garden owners, private property owners, or facilities like hospitals, restaurants, or harbors that need to accommodate guests</li>
                    <li>Properties looking for unique outdoor spaces that add value and offer additional areas for special meetings, dining, or conversations</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Space-efficient outdoor shelter that doesn't occupy too much area</li>
                    <li>Highly customizable designs to serve specific purposes</li>
                    <li>Versatile functionality for meetings, dining, entertainment, and relaxation</li>
                    <li>Adds unique value and character to any property</li>
                    <li>Suitable for both residential and commercial applications</li>
                    <li>Professional designs that replace outdated gazebo concepts</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Below are a variety of Gazebo designs to choose from in our <a href="/gallery" className="text-green-700 underline hover:text-green-600 transition-colors">Gallery</a>. Do away with old, outdated Gazebo designs and have something worth your money.
                  </p>
                </>
              )}
              {service.title === "Terrazzo Flooring" && (
                <>
                  <p className="text-gray-600 mb-4">
                    As our primary job is outdoor living areas, we cannot leave out the floors in these areas. Flooring is also part of Blissful Outdoor Solutions in carrying out the outdoor work. Terrazzo is an exceptional flooring design that is made of marble or granite and highly polished to give the original look.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our Terrazzos flooring is authentic and durable, and comes in different colours to offer the customer's preferences. On that note, Terrazzos offer a number of advantages and purposes to take pride in.
                  </p>
                  <h4 className="font-semibold text-green-700 mb-2">Why Terrazzos?</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>For your cleaning areas - they are not slippery and thus offer an authentic area for this reason</li>
                    <li>For your balcony paths - durable and elegant flooring solution</li>
                    <li>Exceptional marble or granite composition for premium quality</li>
                    <li>Highly polished finish that maintains the original look</li>
                    <li>Authentic and durable construction for long-lasting performance</li>
                    <li>Multiple color options to match customer preferences and design schemes</li>
                  </ul>
                  <h4 className="font-semibold text-green-700 mb-2">Key Features</h4>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1 mb-4">
                    <li>Premium marble and granite materials for exceptional quality</li>
                    <li>Non-slip surface perfect for cleaning areas and high-traffic zones</li>
                    <li>Highly polished finish that enhances aesthetic appeal</li>
                    <li>Durable construction suitable for outdoor living areas</li>
                    <li>Versatile color options for design flexibility</li>
                    <li>Professional installation by outdoor living specialists</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Look below for our Terrazzos collection to choose from in our <a href="/gallery" className="text-green-700 underline hover:text-green-600 transition-colors">Gallery</a>.
                  </p>
                </>
              )}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleQuote(service.title)}
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                >
                  Get Quote
                </button>
                <button
                  onClick={() => handleLearnMore(service.title)}
                  className="border border-green-600 text-green-600 hover:bg-green-50 px-5 py-2 rounded-lg shadow-md transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
