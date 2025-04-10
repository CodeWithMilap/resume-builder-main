"use client";

import React from "react";
import Button from "./PixelBlock/Button";

interface SidebarProps {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  setShowTemplateModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleExportPDF: () => void;
  isExporting: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({
  setShowSidebar,
  setShowTemplateModal,
  handleExportPDF,
  isExporting,
}) => {
  return (
    <div className="fixed inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out">
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-semibold">Resume Builder</h2>
        <Button onClick={() => setShowSidebar(false)} variant="link">
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
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </Button>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <Button
            onClick={() => setShowTemplateModal(true)}
            className="w-full"
            icon={
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
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="4"></circle>
                <line x1="21.17" y1="8" x2="12" y2="8"></line>
                <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
                <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
              </svg>
            }
          >
            Change Template
          </Button>
        </div>

        <div>
          <Button
            onClick={handleExportPDF}
            disabled={isExporting}
            className="w-full"
            icon={
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
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            }
          >
            Export to PDF
          </Button>
        </div>

        <div className="pt-4 border-t">
          <p className="text-xs text-gray-500">
            Click on any text in the resume to edit it directly. Your changes
            are saved automatically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
