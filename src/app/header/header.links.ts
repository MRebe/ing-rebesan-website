export class Link {
  label: string;
  path: string;
  isActive: boolean;
}

export const links: Link[] = [
  {
    label: 'Progettazione',
    path: 'Progettazione',
    isActive: false
  },
  {
    label: 'Rendering',
    path: 'Rendering',
    isActive: false
  },
  {
    label: 'Calcoli',
    path: 'Calcoli',
    isActive: false
  },
  {
    label: 'Contatti',
    path: 'Contatti',
    isActive: false
  }
];
