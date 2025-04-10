"use client";

import { useState, useRef } from "react";
import { exportToPDF } from "@/lib/export-utils";
import {
  type ResumeData,
  defaultResumeData,
  type TemplateCategory,
  Experience,
  Education,
  Skill,
  // Education,
  // Skill,
} from "@/lib/types";
import ModernTemplate from "./templates/modern-template";
import ClassicTemplate from "./templates/classic-template";
import MinimalTemplate from "./templates/minimal-template";
import ProfessionalTemplate from "./templates/professional-template";
import {
  getTemplateById,
} from "@/lib/template-data";
import Sidebar from "./Sidebar";
import FloatingButtons from "./FloatingButtons";
import OnboardingTour from "./OnboardingTour";
import AcademicResearchTemplate from "./templates/academic-research-template";
import BusinessCorporateTemplate from "./templates/business-corporate-template";
import CompactTemplate from "./templates/compact-template";
import CreativeDesignTemplate from "./templates/creative-design-template";
import CreativeTemplate from "./templates/creative-template";
import EntryLevelGraduateTemplate from "./templates/entry-level-graduate-template";
import ExecutiveLeadershipTemplate from "./templates/executive-leadership-template";
import ExecutiveTemplate from "./templates/executive-template";
import FreelancerConsultantTemplate from "./templates/freelancer-consultant-template";
import GovernmentLegalTemplate from "./templates/government-legal-template";
import MedicalHealthcareTemplate from "./templates/medical-healthcare-template";
import MinimalistProTemplate from "./templates/minimalist-pro-template";
import MinimalPlusTemplate from "./templates/minimal-plus-template";
import ModernSplitTemplate from "./templates/modern-split-template";
import SidebarTemplate from "./templates/sidebar-template";
import StartupEntrepreneurialTemplate from "./templates/startup-entrepreneurial-template";
import TechDeveloperTemplate from "./templates/tech-developer-template";
import ClassicTemplate1 from "./templates/template1";
import TemplateSelectionModal from "./TemplateSelectionModal";
import ToastNotification from "./ToastNotification";
import TopRibbonMenu from "./TopRibbonMenu";

export default function ResumeBuilder() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("modern");
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showTemplateModal, setShowTemplateModal] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<TemplateCategory>("all");
  const resumeRef = useRef<HTMLDivElement>(null);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [exportStatus, setExportStatus] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastId, setToastId] = useState<string>("");
  const [exportProgress, setExportProgress] = useState<number>(0);
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  // Toast functionality
  const showToastMessage = (
    message: string,
    type: "success" | "error" = "success",
    duration = 3000
  ) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToastMessage(message);
    setToastType(type);
    setToastId(id);
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, duration);

    return id;
  };

  const updateToastMessage = (
    id: string,
    message: string,
    type: "success" | "error" = "success"
  ) => {
    if (id === toastId) {
      setToastMessage(message);
      setToastType(type);
    }
  };

  // Update the handleExportPDF function to use the new component
  const handleExportPDF = async () => {
    setIsExporting(true);
    setEditMode(false); // Turn off edit mode during export
    setExportProgress(5);
    setExportStatus("Preparing your PDF...");

    // Create a toast with loading state that we can update
    const exportToastId = showToastMessage(
      "Preparing your PDF...",
      "success",
      10000
    );

    try {
      // Show different stages of the export process
      setTimeout(() => {
        setExportProgress(30);
        setExportStatus("Capturing resume content...");
        updateToastMessage(
          exportToastId,
          "Capturing resume content...",
          "success"
        );
      }, 500);

      setTimeout(() => {
        setExportProgress(70);
        setExportStatus(
          document.documentElement.classList.contains("dark")
            ? "Preserving dark mode styling"
            : "Formatting and optimizing"
        );
        updateToastMessage(exportToastId, "Generating PDF file...", "success");
      }, 1500);

      // Actually export the PDF
      await exportToPDF(
        "resume-preview-container",
        resumeData.personalInfo.name
      );

      // Show success message with 100% progress
      setExportProgress(100);
      setExportStatus("PDF exported successfully!");
      updateToastMessage(
        exportToastId,
        "PDF exported successfully!",
        "success"
      );
    } catch (error) {
      console.error("Error exporting to PDF:", error);
      updateToastMessage(
        exportToastId,
        "Export failed. Please try again or use a different browser.",
        "error"
      );
    } finally {
      setIsExporting(false);
      setTimeout(() => {
        setExportProgress(0);
      }, 3000);
    }
  };


  // Add experience function
  const handleAddExperience = () => {
    setResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          title: "New Position",
          company: "Company Name",
          period: "2023 - Present",
          description: "Job responsibilities and achievements...",
        } as Experience,
      ],
    }));
  };

  // // Add skill function
  const handleAddSkill = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        {
          name: "New Skill",
          level: "Intermediate",
        } as Skill,
      ],
    }));
  };

  // // Add education function
  const handleAddEducation = () => {
    setResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "Degree Name",
          institution: "Institution Name",
          date: "2020 - 2023",
        } as Education,
      ],
    }));
  };

  // Update experience function
  const updateExperience = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    setResumeData((prev) => {
      const updatedExperiences = [...prev.experience];
      updatedExperiences[index] = {
        ...updatedExperiences[index],
        [field]: value,
      };
      return { ...prev, experience: updatedExperiences };
    });
  };

  // Pass these to templates
  const templateProps = {
    resumeData,
    handleAddExperience,
    updateExperience,
  };

  // Get the current template component
  const getCurrentTemplate = () => {
    const template = getTemplateById(selectedTemplate);
    if (!template) {
      throw new Error(`Template with ID ${selectedTemplate} not found.`);
    }

    // Use a switch statement to return the correct template component
    switch (template.id) {
      case "academic-research":
        return <AcademicResearchTemplate {...templateProps} />;
      case "business-corporate":
        return <BusinessCorporateTemplate {...templateProps} />;
      case "classic":
        return <ClassicTemplate {...templateProps} />;
      case "compact":
        return <CompactTemplate {...templateProps} />;
      case "creative-design":
        return <CreativeDesignTemplate {...templateProps} />;
      case "creative":
        return <CreativeTemplate {...templateProps} />;
      case "entry-level-graduate":
        return <EntryLevelGraduateTemplate {...templateProps} />;
      case "executive-leadership":
        return <ExecutiveLeadershipTemplate {...templateProps} />;
      case "executive":
        return <ExecutiveTemplate {...templateProps} />;
      case "freelancer-consultant":
        return <FreelancerConsultantTemplate {...templateProps} />;
      case "government-legal":
        return <GovernmentLegalTemplate {...templateProps} />;
      case "medical-healthcare":
        return <MedicalHealthcareTemplate {...templateProps} />;
      case "minimalist-pro":
        return <MinimalistProTemplate {...templateProps} />;
      case "minimal-plus":
        return <MinimalPlusTemplate {...templateProps} />;
      case "minimal":
        return <MinimalTemplate {...templateProps} />;
      case "modern-split":
        return <ModernSplitTemplate {...templateProps} />;
      case "modern":
        return <ModernTemplate {...templateProps} />;
      case "professional":
        return <ProfessionalTemplate {...templateProps} />;
      case "sidebar":
        return <SidebarTemplate {...templateProps} />;
      case "startup-entrepreneurial":
        return <StartupEntrepreneurialTemplate {...templateProps} />;
      case "tech-developer":
        return <TechDeveloperTemplate {...templateProps} />;
      case "template1":
        return <ClassicTemplate1 {...templateProps} />;
      default:
        return <ModernTemplate {...templateProps} />; // Fallback to a default template
    }
  };

  // Toggle section dropdown
  const toggleSection = (section: string) => {
    if (activeSection === section) {
      setActiveSection(null)
    } else {
      setActiveSection(section)
    }
  }


  return (
    <div className="relative max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden my-8">
      {/* Top Ribbon Menu */}
      <TopRibbonMenu
        activeSection={activeSection}
        toggleSection={toggleSection}
        handleAddExperience={handleAddExperience}
        handleAddEducation={handleAddEducation}
        handleAddSkill={handleAddSkill}
      />

      {/* Toast notification */}
      <ToastNotification
        showToast={showToast}
        toastMessage={toastMessage}
        toastType={toastType}
        setShowToast={setShowToast}
        exportProgress={exportProgress}
        exportStatus={exportStatus}
      />

      {/* Onboarding Tour */}
      <OnboardingTour />

      {/* Add floating add buttons */}
      <FloatingButtons
        editMode={editMode}
        toggleEditMode={toggleEditMode}
        setShowTemplateModal={setShowTemplateModal}
        handleExportPDF={handleExportPDF}
        isExporting={isExporting}
      />

      {/* Sidebar */}
      {showSidebar && (
        <Sidebar
          setShowSidebar={setShowSidebar}
          setShowTemplateModal={setShowTemplateModal}
          handleExportPDF={handleExportPDF}
          isExporting={isExporting}
        />
      )}

      {/* Template selection modal */}
      {showTemplateModal && (
        <TemplateSelectionModal
          showTemplateModal={showTemplateModal}
          activeCategory={activeCategory}
          selectedTemplate={selectedTemplate}
          setShowTemplateModal={setShowTemplateModal}
          setActiveCategory={setActiveCategory}
          setSelectedTemplate={setSelectedTemplate}
        />
      )}

      {/* Resume preview */}
      <div
        id="resume-preview-container"
        className="w-full mx-auto border border-black/10 bg-white rounded-sm overflow-hidden p-4"
        ref={resumeRef}
      >
        {getCurrentTemplate()}
      </div>
    </div>
  );
}
