"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Project {
  id: string;
  name: string;
  businessName: string;
  industry: string;
  location: string;
  lens: string;
  lensColor: string;
  lensGradient: string;
  status: "active" | "draft" | "review";
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "ada-retail",
    name: "Q3 Operational Audit",
    businessName: "Adaeze Retail Co.",
    industry: "Fashion & Retail",
    location: "Lagos",
    lens: "LegacyLens",
    lensColor: "#103fd5",
    lensGradient: "linear-gradient(135deg, #103fd5 0%, #5d7cff 100%)",
    status: "active",
  },
  {
    id: "okeke-tech",
    name: "Founder Baseline Check",
    businessName: "Okeke Technologies",
    industry: "SaaS",
    location: "Abuja",
    lens: "FounderLens",
    lensColor: "#dc2626",
    lensGradient: "linear-gradient(135deg, #dc2626 0%, #f87171 100%)",
    status: "review",
  },
  {
    id: "keiko-interiors",
    name: "Financial Health Audit",
    businessName: "Keiko Interiors",
    industry: "Interior Design",
    location: "Port Harcourt",
    lens: "FinanceLens",
    lensColor: "#d97706",
    lensGradient: "linear-gradient(135deg, #d97706 0%, #fbbf24 100%)",
    status: "draft",
  },
  {
    id: "synergix",
    name: "Capacity Building Review",
    businessName: "Synergix Africa",
    industry: "Consulting",
    location: "Lagos",
    lens: "GovLens",
    lensColor: "#6366f1",
    lensGradient: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
    status: "active",
  },
];

interface ProjectContextType {
  activeProject: Project;
  setActiveProject: (p: Project) => void;
  projects: Project[];
}

const ProjectContext = createContext<ProjectContextType | null>(null);

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [activeProject, setActiveProject] = useState<Project>(PROJECTS_DATA[0]);

  return (
    <ProjectContext.Provider value={{ activeProject, setActiveProject, projects: PROJECTS_DATA }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProject() {
  const ctx = useContext(ProjectContext);
  if (!ctx) throw new Error("useProject must be used inside ProjectProvider");
  return ctx;
}
