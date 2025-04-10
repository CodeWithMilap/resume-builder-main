import React from 'react';

interface TopRibbonMenuProps {
  activeSection: string | null;
  toggleSection: (section: string) => void;
  handleAddExperience: () => void;
  handleAddEducation: () => void;
  handleAddSkill: () => void;
}

export default function TopRibbonMenu({
  activeSection,
  toggleSection,
  handleAddExperience,
  handleAddEducation,
  handleAddSkill
}: TopRibbonMenuProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-2 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="relative">
            <button 
              onClick={() => toggleSection('add')}
              className="flex items-center space-x-1 px-3 py-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span className="text-gray-700 dark:text-gray-200 font-medium">Add</span>
              {activeSection === 'add' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </button>
            
            {/* Add dropdown menu */}
            {activeSection === 'add' && (
              <div 
                className="absolute left-0 top-full mt-1 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 z-50 transition-all duration-200 ease-in-out"
              >
                <div className="p-1">
                  <button 
                    onClick={() => {
                      handleAddExperience();
                      // Optionally, you might want to pass a function to close the dropdown
                    }}
                    className="flex items-center w-full px-3 py-2 text-left rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9v12h12V9M9 9V5a3 3 0 016 0v4" />
                    </svg>
                    <span>Add Experience</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      handleAddEducation();
                    }}
                    className="flex items-center w-full px-3 py-2 text-left rounded-md hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-700 dark:text-gray-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-purple-500 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 7v-6m0 0l-9-5m9 5l9-5" />
                    </svg>
                    <span>Add Education</span>
                  </button>
                  
                  <button 
                    onClick={() => {
                      handleAddSkill();
                    }}
                    className="flex items-center w-full px-3 py-2 text-left rounded-md hover:bg-amber-50 dark:hover:bg-amber-900/20 text-gray-700 dark:text-gray-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-amber-500 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m4-4H8" />
                    </svg>
                    <span>Add Skill</span>
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <div className="h-6 border-r border-gray-300 dark:border-gray-600 mx-1"></div>
        </div>
      </div>
    </div>
  );
}