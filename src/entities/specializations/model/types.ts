interface Specialization {
  id: number;
  title: string;
  description: string;
  imageSrc: string | null;
  createdAt: string;
  updatedAt: string;
}
export interface ISpecializationResponse {
  data: Specialization[];
  page: number;
  limit: number;
  total: number;
}
