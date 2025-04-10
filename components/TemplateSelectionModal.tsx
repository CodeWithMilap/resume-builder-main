import React from 'react';
import Image from 'next/image';
import { TemplateCategory, TEMPLATE_CATEGORIES } from "@/lib/types";
import { templates, getTemplatesByCategory } from "@/lib/template-data";

interface TemplateSelectionModalProps {
  showTemplateModal: boolean;
  activeCategory: TemplateCategory;
  selectedTemplate: string;
  setShowTemplateModal: (show: boolean) => void;
  setActiveCategory: (category: TemplateCategory) => void;
  setSelectedTemplate: (templateId: string) => void;
}

export default function TemplateSelectionModal({
  showTemplateModal,
  activeCategory,
  selectedTemplate,
  setShowTemplateModal,
  setActiveCategory,
  setSelectedTemplate
}: TemplateSelectionModalProps) {
  const filteredTemplates = getTemplatesByCategory(activeCategory);

  if (!showTemplateModal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm">
      <div className="min-h-screen w-full flex items-center justify-center p-4">
        <div
          className="relative w-full max-w-[90vw] max-h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="p-6 bg-gradient-to-r from-blue-500 to-blue-600 flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Choose Your Template
              </h2>
              <p className="text-blue-100">
                Select from our professionally designed templates to create
                your perfect resume
              </p>
            </div>
            <button
              onClick={() => setShowTemplateModal(false)}
              className="p-2 rounded-lg hover:bg-blue-600/50 text-white transition-colors"
            >
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
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Main content area with sidebar layout */}
          <div className="flex flex-1 overflow-hidden">
            {/* Categories sidebar */}
            <div className="w-64 bg-gray-50 border-r border-gray-200 p-4 overflow-y-auto">
              <div className="space-y-2">
                {TEMPLATE_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${
                      activeCategory === category
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="capitalize">{category}</span>
                      <span className="text-sm text-gray-500">
                        {category === "all"
                          ? `(${templates.length})`
                          : `(${
                              templates.filter(
                                (t) => t.category === category
                              ).length
                            })`}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Templates grid with independent scroll */}
            <div className="flex-1 overflow-hidden flex flex-col">
              {/* Search and filters */}
              <div className="p-4 border-b bg-white">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    {activeCategory === "all"
                      ? "All Templates"
                      : `${
                          activeCategory.charAt(0).toUpperCase() +
                          activeCategory.slice(1)
                        } Templates`}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Showing {filteredTemplates.length} templates
                  </p>
                </div>
              </div>

              {/* Templates grid */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                        selectedTemplate === template.id
                          ? "ring-2 ring-blue-500 shadow-lg"
                          : "border border-gray-200 hover:border-blue-200"
                      }`}
                      onClick={() => {
                        setSelectedTemplate(template.id);
                        setShowTemplateModal(false);
                      }}
                    >
                      {/* Template preview */}
                      <div className="relative aspect-[3/4] bg-white overflow-hidden">
                        <Image
                          src="https://via.placeholder.com/300x400"
                          alt={`${template.name} preview`}
                          layout="responsive"
                          width={300}
                          height={400}
                          className="object-cover"
                        />
                      </div>

                      {/* Template info */}
                      <div className="p-4 bg-white border-t">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-gray-900">
                              {template.name}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                              {template.description}
                            </p>
                          </div>
                          <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 capitalize">
                            {template.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}