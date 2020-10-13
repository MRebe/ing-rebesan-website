export class Program {
    name: string;
    description: string;
    iconPath: string;
    link: string;
}

export const programs: Program[] = [
    {
        name: 'Autodesk',
        description: 'Programma per la progettazione di edifici o componenti meccanici e statici.',
        iconPath: 'assets/images/programs/autodesk_logo.png',
        link: 'https://www.autodesk.it/'},
    {
        name: 'Cinema 4D',
        description: 'Uno dei più conosciuti e potenti programmi di modellazione digitale e sviluppo render.',
        iconPath: 'assets/images/programs/cinema_4d_logo.png',
        link: 'https://www.maxon.net/it/prodotti/cinema-4d/cinema-4d/'
    },
    {
        name: 'Corona Renderer',
        description: 'Motore grafico dalle capacità straordinarie. Affiancato a Cinema 4D ti mostrerà immagini che mai avresti detto sviluppate interamente da un computer.',
        iconPath: 'assets/images/programs/corona_renderer_logo.jpg',
        link: 'https://corona-renderer.com/'
    }
];

