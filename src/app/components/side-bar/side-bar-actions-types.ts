// Opções para o tipo de modal
export enum ModalType {
  Income = 'income', // fonte de renda
  Expense = 'expense', // despesa
  Investment = 'investment' // investimento
}

export const ModalTypeOptions = {
  [ModalType.Income]: ['Salário', 'Rendimento', 'Freelance', 'Outro'],
  [ModalType.Expense]: ['Aluguel', 'Mercado', 'Energia', 'Outro'],
  [ModalType.Investment]: ['Renda variável', 'Renda fixa', 'Empreendimento', 'Outro'],
};

export const ModalNameOptions = {
  [ModalType.Income]: 'Fonte de renda',
  [ModalType.Expense]: 'Despesa',
  [ModalType.Investment]: 'Investimento'
};

// Interface para os dados do modal
export interface ModalData {
  open: boolean;
  type: ModalType;
  name: string;
  options: string[]; // Opções específicas para cada tipo de modal
}