export type LawSection = 'salud' | 'economia' | 'ambiente' | 'elecciones' | 'congreso';

export interface Law {
  id: string;
  section: LawSection;
  type: string;
  number: string;
  date: string;
  dateDisplay?: string;
  title: string;
  author: string;
  details: string;
  status: string;
  stage?: string;
  commission?: string;
  source: string;
  citation: string;
}

export type NewLaw = Omit<Law, 'id'> & { id?: string };