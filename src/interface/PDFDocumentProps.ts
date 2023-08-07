import { Experience } from "./ExperienceProps";
import { Education } from "./EducationProps";

export interface PDFDocumentProps {
  name: string;
  pretendedPosition: string;
  email: string;
  phone: string;
  description: string;
  experiences: Experience[];
  educationList: Education[];
  skills: string[];
}
