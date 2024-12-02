// models/item-experiencias.ts
export interface ItemExperiencias {
  duracaoExperiencia: string;
  imgUrl: string;
  alt: string;
  titulo: string;
  descricao: string;
  stack?: string[]; // Array de tecnologias utilizadas
  empresa?: string; // Nome da empresa (opcional)
  local?: string;   // Localização (opcional)
  tipo?: 'fulltime' | 'parttime' | 'freelance' | 'education'; // Tipo da experiência
}
