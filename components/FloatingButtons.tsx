import React, { useState } from "react";
import Button from "./PixelBlock/Button";

interface FloatingButtonsProps {
  editMode: boolean;
  toggleEditMode: () => void;
  setShowTemplateModal: (value: boolean) => void;
  handleExportPDF: () => void;
  isExporting: boolean;
}

const FloatingButtons: React.FC<FloatingButtonsProps> = ({
  setShowTemplateModal,
  handleExportPDF,
  isExporting,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-2 z-50">
      {/* Expandable buttons */}
      <div
        className={`flex flex-col items-centers space-y-2 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <Button
          onClick={() => setShowTemplateModal(true)}
          radius="full"
          className="h-12 w-12 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-palette"
          >
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
          </svg>
        </Button>

        <Button
          onClick={handleExportPDF}
          disabled={isExporting}
          radius="full"
          className="h-12 w-12 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-download"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" x2="12" y1="15" y2="3"></line>
          </svg>
          {isExporting && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-full">
              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Main Button to toggle the floating buttons */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        radius="full"
        color={isOpen? 'error' : 'primary'}
        className={`h-14 w-14 ${isOpen ? "scale-75" : ""}`}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-plus"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5v14"></path>
          </svg>
        )}
      </Button>
    </div>
  );
};

export default FloatingButtons;
