export class Render {
  project: string;
  description: string;
  selectedPhotoFade1: number;
  selectedPhotoFade2: number;
  renderPaths: string[];
}

export const renderGroups: Render[] = [
  {
    project: 'Progetto Fontana',
    description: 'Quando le linee tradizionali incontrano gli stili moderni',
    selectedPhotoFade1: 0,
    selectedPhotoFade2: null,
    renderPaths: [
      'assets/images/render/Fontana_1.jpg',
      'assets/images/render/Fontana_2.jpg',
      'assets/images/render/Fontana_3.jpg',
      'assets/images/render/Fontana_4.jpg'
    ]
  },
  {
    project: 'Progetto interni',
    description: 'Riprogettazione degli interni di una abitazione.',
    selectedPhotoFade1: 0,
    selectedPhotoFade2: null,
    renderPaths: [
      'assets/images/render/Soggiorno_1.jpg',
      'assets/images/render/Soggiorno_2.jpg',
      'assets/images/render/Soggiorno_3.jpg'
    ]
  }
];
