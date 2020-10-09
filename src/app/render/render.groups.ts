export class Render {
  project: string;
  description: string;
  renderPaths: string[];
}

export const renderGroups: Render[] = [
  {
    project: 'Progetto villetta',
    description: 'Nuova villetta  a schiera',
    renderPaths: [
      'assets/images/render/Fontana_1.jpg',
      'assets/images/render/Fontana_2.jpg',
      'assets/images/render/Fontana_3.jpg',
      'assets/images/render/Fontana_4.jpg'
    ]
  },
  {
    project: 'Progetto villetta',
    description: 'Nuova villetta  a schiera',
    renderPaths: [
      'assets/images/render/Fontana_2.jpg',
      'assets/images/render/Fontana_1.jpg',
      'assets/images/render/Fontana_3.jpg',
      'assets/images/render/Fontana_4.jpg'
    ]
  }
];
