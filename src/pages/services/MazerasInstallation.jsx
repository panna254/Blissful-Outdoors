import React from "react";
import { useNavigate } from "react-router-dom";
import mazerasImg from "../../assets/mazeras.jpeg";
import SEOHelmet from "../../components/SEOHelmet";

const MazerasInstallation = () => {
  const navigate = useNavigate();

  const handleQuote = () => {
    navigate("/quotation?service=Mazeras Installation");
  };

  return (
    <>
      <SEOHelmet 
        title="Mazeras Stone Installation Kenya | Natural Stone Paving"
        description="Professional mazeras stone installation in Kenya. Durable natural stone paving for driveways, walkways, and outdoor spaces. Expert craftsmanship guaranteed."
        keywords="mazeras stone Kenya, natural stone paving, stone installation, driveway paving, walkway stones"
        canonicalUrl="https://blissfuloutdoorsolutions.com/services/mazeras-installation"
      />
      <div className="bg-gray-100 min-h-screen py-16 px-6 md:px-16 mt-20">
        <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Mazeras Installation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Natural stone finishes that bring texture and beauty to walkways, pool decks, and walls.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <img
            src={mazerasImg}
            alt="Mazeras Installation"
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Service Overview */}
              <div>
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                  What are Mazeras?
                </h2>
                <p className="text-gray-600 mb-6">
                  These are natural stones primarily mined from the coastal region, which are shiny and in irregular shapes, and are used in decoration. They come in different colours, from black, white, cream, red, yellow, and green. Mazeras are highly used in the decoration of compounds, but in the 21st century, their use has progressed to further decorating even the walls as well.
                </p>
                <p className="text-gray-600 mb-6">
                  They are used for both homes and premises, and they leave the areas installed with them with an added attractiveness and uniqueness. A decade ago, the vertical slabs that hold any building in place on the outer side of any construction were just left with plastering, and nothing much was done. Today, that is a different case. Mazeras' installation comes as a nice indication that we are in a different century and that something different for decoration and giving the property a unique look is essential.
                </p>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Key Features
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Natural stones mined from coastal regions with authentic shine and irregular shapes</li>
                  <li>Available in multiple colors: black, white, cream, red, yellow, and green</li>
                  <li>Can be used for compound decoration and wall installations</li>
                  <li>Suitable for both residential homes and commercial premises</li>
                  <li>Creates unique attractiveness and distinctive character</li>
                  <li>Modern alternative to traditional plastering for exterior finishes</li>
                </ul>
              </div>

              {/* Who Needs This Service */}
              <div>
                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Who Needs Mazeras Installation?
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>If you want to move beyond basic plastering and give your building's outer walls a modern, decorative finish</li>
                  <li>If you're looking to enhance walking paths around your property that are currently just concrete</li>
                  <li>If you want to add unique attractiveness and character to your compound or premises</li>
                  <li>For properties that need a 21st-century upgrade in exterior decoration and aesthetics</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Installation Areas
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Exterior building walls</li>
                  <li>Walkways and pathways</li>
                  <li>Pool decks and surrounding areas</li>
                  <li>Garden borders and landscaping</li>
                  <li>Entrance areas and driveways</li>
                  <li>Commercial building facades</li>
                  <li>Compound decoration features</li>
                </ul>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Available Colors
                </h3>
                <div className="grid grid-cols-2 gap-2 mb-6">
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Black</li>
                    <li>White</li>
                    <li>Cream</li>
                  </ul>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Red</li>
                    <li>Yellow</li>
                    <li>Green</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold text-green-700 mb-3">
                  Benefits
                </h3>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Natural, authentic coastal stone material</li>
                  <li>Unique irregular shapes for distinctive appearance</li>
                  <li>Durable and weather-resistant</li>
                  <li>Low maintenance requirements</li>
                  <li>Increases property value and curb appeal</li>
                  <li>Environmentally friendly natural material</li>
                  <li>Timeless aesthetic that won't go out of style</li>
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <button
                onClick={handleQuote}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors mr-4"
              >
                Get Quote
              </button>
              <button
                onClick={() => navigate("/gallery")}
                className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors"
              >
                See Mazeras Designs
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default MazerasInstallation;
