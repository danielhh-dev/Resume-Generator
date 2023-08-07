export interface BasicInfoProps {
  name: string;
  pretendedPosition: string;
  email: string;
  phone: string;
  description: string;
  setName: (name: string) => void;
  setPretendedPosition: (position: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setDescription: (description: string) => void;
}
