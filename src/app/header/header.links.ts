export class Link {
  label: string;
  path: string;
  isActive: boolean;
}

export const links: Link[] = [
  {
    label: 'Calcolo',
    path: 'Calcolo',
    isActive: false
  },
  {
    label: 'Progettazione',
    path: 'Progettazione',
    isActive: false
  },
  {
    label: 'Render',
    path: 'Render',
    isActive: false
  },
  {
    label: 'Collaborazioni',
    path: 'Collaborazioni',
    isActive: false
  },
  {
    label: 'Contatti',
    path: 'Contatti',
    isActive: false
  }
];
