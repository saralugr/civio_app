export type Chamber = 'Senado' | 'Cámara';

export interface EducationEntry {
  degree: string;
  institution: string;
  year: string;
}

export interface CareerEntry {
  position: string;
  institution: string;
  period: string;
  details?: string;
}

export interface FeaturedBill {
  number: string;
  title: string;
  status: string;
  role: string;
}

export interface CongressMember {
  id: string;
  name: string;
  displayName: string;
  party: string;
  chamber: Chamber;
  role: string;
  commission: string;
  seat: string;
  period: string;
  photo: string;
  education?: EducationEntry[];
  professionalTrajectory: CareerEntry[];
  legislativeStats?: {
    filedProjects: number;
    oversightDebates: number;
    reportsSubmitted: number;
  };
  featuredBills?: FeaturedBill[];
  citation?: string;
  citationUrl?: string;
}