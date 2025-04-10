"use client";

import { type ResumeData } from "@/lib/types";
import { useRef } from "react";

interface TemplateProps {
  resumeData: ResumeData;
}

export default function ClassicTemplate1({ resumeData }: TemplateProps) {
  const { personalInfo, experience, education, skills } = resumeData;
  const resumeRef = useRef(null);

  return (
    <div ref={resumeRef} className="font-sans max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 contentEditable className="text-3xl font-bold text-gray-800">{personalInfo.name}</h1>
        <p contentEditable className="text-lg text-gray-600">{personalInfo.title}</p>
        <div className="mt-2 text-sm text-gray-600 flex flex-wrap justify-center gap-4">
          <span contentEditable>{personalInfo.email}</span>
          <span contentEditable>{personalInfo.phone}</span>
        </div>
      </header>

      <hr className="my-4" />

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Summary</h2>
        <p contentEditable className="mt-2 text-gray-700">{personalInfo.summary}</p>
      </section>

      <hr className="my-4" />

      {/* Technical Skills */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Technical Skills</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {skills.map((skill, index) => (
            <li key={index} contentEditable>{skill.name}</li>
          ))}
        </ul>
      </section>

      <hr className="my-4" />

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Work Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 contentEditable className="font-bold text-gray-800">{exp.title}</h3>
            <span contentEditable className="text-gray-600">{exp.period}</span>
            <p contentEditable className="font-semibold text-gray-700">{exp.company}</p>
            <p contentEditable className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </section>

      <hr className="my-4" />

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h3 contentEditable className="font-bold text-gray-800">{edu.degree}</h3>
            <span contentEditable className="text-gray-600">{edu.date}</span>
            <p contentEditable className="font-semibold text-gray-700">{edu.institution}</p>
            <p contentEditable className="text-gray-700">{edu.description}</p>
          </div>
        ))}
      </section>

      <hr className="my-4" />

      {/* Contact */}
      <section className="mb-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">Contact</h2>
        <p contentEditable className="text-gray-700">📧 {personalInfo.email}</p>
        <p contentEditable className="text-gray-700">📞 {personalInfo.phone}</p>
        {/* <p contentEditable className="text-gray-700">🌐 {personalInfo.website}</p> */}
        {/* <p contentEditable className="text-gray-700">🔗 {personalInfo.linkedin}</p> */}
      </section>
    </div>
  );
}
