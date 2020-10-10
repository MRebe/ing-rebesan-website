export class Project {
  name: string;
  rendersPaths: string[];
}

export const projects: Project[] = [
  {
    name: 'Progetto Fontana',
    rendersPaths: [
      'assets/images/render/Fontana_1.jpg',
      'assets/images/render/Fontana_2.jpg',
      'assets/images/render/Fontana_3.jpg',
      'assets/images/render/Fontana_4.jpg'
    ]
  },
  {
    name: 'Progetto interni',
    rendersPaths: [
      'assets/images/render/Soggiorno_1.jpg',
      'assets/images/render/Soggiorno_2.jpg',
      'assets/images/render/Soggiorno_3.jpg'
    ]
  }
];
