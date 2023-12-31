export interface Experience {
  position: string;
  company: string;
  since: string;
  until: string;
  isWorking: boolean;
  workDescription: string;
  techStack: string;
}

export interface ExperienceComponentProps {
  experience: string;
  company: string;
  since: string;
  isWorking: boolean;
  until: string;
  workDescription: string;
  techStack: string;
  setTechStack: (techStack: string) => void;
  setWorkDescription: (workDescription: string) => void;
  setExperience: (experience: string) => void;
  setCompany: (company: string) => void;
  setSince: (since: string) => void;
  setIsWorking: (isWorking: boolean) => void;
  setUntil: (until: string) => void;
  addExperience: () => void;
  deleteExperience: (index: number) => void;
  experiences: Experience[];
}
