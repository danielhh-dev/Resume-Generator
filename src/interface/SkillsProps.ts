export interface SkillsProps {
  newSkill: string;
  setNewSkill: React.Dispatch<React.SetStateAction<string>>;
  addSkill: () => void;
  deleteSkill: (index: number) => void;
  skills: string[]; // Agrega el tipo adecuado para el array de skills
}
