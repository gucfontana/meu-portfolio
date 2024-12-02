// models/item-habilidades.ts
export interface ItemHabilidades {
  icone: string;
  titulo: string;
  descricao: string;
  nivel?: number; // Porcentagem de 0 a 100
  categoria?: 'technical' | 'soft' | 'tools';
  tags?: string[]; // Tags relacionadas à habilidade
}
