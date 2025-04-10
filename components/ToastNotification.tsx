import React from 'react';

interface ToastNotificationProps {
  showToast: boolean;
  toastMessage: string;
  toastType: 'success' | 'error';
  setShowToast: (show: boolean) => void;
  exportProgress?: number;
  exportStatus?: string;
}

export default function ToastNotification({
  showToast, 
  toastMessage, 
  toastType, 
  setShowToast, 
  exportProgress = 0, 
  exportStatus = ''
}: ToastNotificationProps) {
  return (
    <>
      {showToast && (
        <div
          className={`fixed top-4 right-4 z-50 max-w-md transition-all duration-300 ease-in-out transform ${
            showToast ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div
            className={`rounded-lg shadow-lg p-4 ${
              toastType === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            <div className="flex items-center">
              {toastType === "success" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
              <p>{toastMessage}</p>
              <button
                onClick={() => setShowToast(false)}
                className="ml-auto text-gray-400 hover:text-gray-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {exportProgress > 0 && (
              <div className="mt-2">
                <div className="text-xs text-gray-500 mb-1">{exportStatus}</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-in-out"
                    style={{ width: `${exportProgress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}