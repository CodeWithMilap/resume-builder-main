import React, { useState, useEffect, useCallback } from "react";
import Button from "./PixelBlock/Button";

const tourSteps = [
  {
    title: "Welcome to Resume Builder",
    description:
      "Create a professional resume in minutes. Let's get started with a quick tour.",
  },
  {
    title: "Edit Mode",
    description:
      "Toggle edit mode to make changes to your resume. Editable areas will be highlighted.",
  },
  {
    title: "Change Template",
    description:
      "Choose from a variety of professional templates to find the perfect style for your resume.",
  },
  {
    title: "Export Options",
    description:
      "When you're done, export your resume as a PDF or Word document to share with employers.",
  },
];

const OnboardingTour: React.FC = () => {
  const [showTour, setShowTour] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Check localStorage when component mounts
  useEffect(() => {
    if (!localStorage.getItem("hasSeenResumeTour")) {
      setShowTour(true);
    }
  }, []);

  // Function to complete and close the tour
  const completeTour = useCallback(() => {
    setShowTour(false);
    localStorage.setItem("hasSeenResumeTour", "true");
  }, []);

  // Handle Next Step
  const nextStep = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      completeTour();
    }
  };

  if (!showTour) return null; // Don't render if the tour is completed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 mx-4">
        <h3 className="text-xl font-semibold mb-2">
          {tourSteps[currentStep].title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          {tourSteps[currentStep].description}
        </p>

        <div className="flex justify-between items-center">
          {/* Step Indicators */}
          <div className="flex space-x-1">
            {tourSteps.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 w-6 rounded-full ${
                  index === currentStep
                    ? "bg-blue-500"
                    : "bg-gray-200 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Buttons */}
          <div className="flex space-x-2">
            <Button onClick={completeTour} variant="outline" size="sm">Skip</Button>
            <Button onClick={nextStep} size="sm">
              {currentStep < tourSteps.length - 1 ? "Next" : "Get Started"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTour;
