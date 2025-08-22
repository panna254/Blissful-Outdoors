// QuotationInfo.jsx
import React from "react";

const QuotationInfo = () => {
  return (
    <section className="bg-gray-100 px-6 md:px-20 py-16 mt-12 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 animate-fade-in-down">
          <span className="text-green-700">Site Survey Information</span>
        </h2>

        <p className="text-gray-700 mb-6 animate-fade-in">
          At{" "}
          <span className="font-semibold text-green-700">
            Blissful Outdoor Solutions
          </span>
          , we prioritize{" "}
          <span className="italic text-blue-600">transparency</span> and{" "}
          <span className="italic text-blue-600">professionalism</span>. Before
          providing any quotation for your home beautification project, we
          conduct a thorough on-site survey.
        </p>

        <p className="mb-4 text-gray-700 animate-fade-in">
          The cost for the site survey varies by location and serves as a{" "}
          <strong className="text-red-600">facilitation</strong> fee for our
          team to visit your location. This amount is{" "}
          <span className="text-green-600 font-semibold">
            deducted from your final project cost
          </span>{" "}
          if you proceed with us.
        </p>

        <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2 animate-fade-in-up">
          <li>
            <span className="font-medium text-black">
              You do not pay before the visit.
            </span>
          </li>
          <li>
            <span className="font-medium text-black">
              Payment is only made after the survey is done.
            </span>
          </li>
          <li>
            <span className="font-medium text-black">
              You receive a detailed quotation after the survey.
            </span>
          </li>
        </ul>

        <p className="text-gray-700 animate-fade-in">
          By requesting a survey, you agree to the respective fee for your
          location. We look forward to{" "}
          <span className="text-green-700 font-semibold">transforming</span>{" "}
          your outdoor space beautifully.
        </p>
      </div>
    </section>
  );
};

export default QuotationInfo;
