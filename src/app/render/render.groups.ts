export class Project {
  name: string;
  description: string;
  rendersPaths: string[];
}

export const projects: Project[] = [
  {
    name: 'Progetto Fontana',
    description: 'Quando le linee tradizionali incontrano gli stili moderni',
    rendersPaths: [
      'assets/images/render/Fontana_1.jpg',
      'assets/images/render/Fontana_2.jpg',
      'assets/images/render/Fontana_3.jpg',
      'assets/images/render/Fontana_4.jpg'
    ]
  },
  {
    name: 'Progetto interni',
    description: 'Riprogettazione degli interni di una abitazione.',
    rendersPaths: [
      'assets/images/render/Soggiorno_1.jpg',
      'assets/images/render/Soggiorno_2.jpg',
      'assets/images/render/Soggiorno_3.jpg'
    ]
  }
];
