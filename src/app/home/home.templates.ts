export class ImageTemplate {
  imagePath: string;
  title: string;
  description: string;
}

export const templates: ImageTemplate[] = [
  {
    imagePath: 'assets/images/img_1.jpg',
    title: 'Costruisci il tuo sogno',
    description: 'Ogni persona ha il suo sogno, piccolo o grande che sia. ' +
    'Dalle prime fasi della progettazione fino alla sua realizzazione ci sarà sempre qualcuno ad accompagnarti.'
  },
  {
    imagePath: 'assets/images/img_2.jpg',
    title: 'Reali fin da subito',
    description: 'Non hai le idee chiare? ' +
    'Con i più sofisticati software di progettazione tridimensionale i tuoi pensieri prenderanno vita davanti ai tuoi occhi.'
  },
  {
    imagePath: 'assets/images/img_3.jpg',
    title: 'Il sostegno che cerchi',
    description: 'Progettare costruzioni in ferro non è mai stato così semplice e veloce. Dai il peso giusto ai tuoi progetti.'
  }
];
