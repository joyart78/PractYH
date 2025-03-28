export interface IQuestionResponse {
  data: IQuestion[];
  page: number;
  limit: number;
  total: number;
}

export interface IQuestion {
  id: number;
  title: string;
  description: string;
  code: string | null;
  imageSrc: string | null;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  status: string;
  rate: number;
  complexity: number;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
  questionSpecializations: Specialization[];
  questionSkills: Skill[];
}

interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}

interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
}
