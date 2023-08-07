export interface Education {
  university: string;
  degree: string;
  startDate: string;
  endDate: string;
  isOngoing: boolean;
}

export interface EducationComponentProps {
  educationList: Education[];
  setEducationList: React.Dispatch<React.SetStateAction<Education[]>>;
  university: string;
  setUniversity: React.Dispatch<React.SetStateAction<string>>;
  degree: string;
  setDegree: React.Dispatch<React.SetStateAction<string>>;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
  isOngoing: boolean;
  setIsOngoing: React.Dispatch<React.SetStateAction<boolean>>;
  addEducation: () => void;
  deleteEducation: (index: number) => void;
}
