export interface Category {
    id: string;
    name: string;
    description: string;
    books: Book[];
}
export interface Book {
    id: string;
    title: string;
    description: string;
    url: string;
    img_url?: string;
}
export const CATEGORIES: Category[] = [{
    id: '1',
    name: 'Investigación',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'Metodología de la Investigación 6° edición (Sampieri)',
        description: 'Es una guía para la elaboración de proyectos de investigación, tesis y tesinas. El libro es una herramienta para estudiantes, profesores e investigadores que deseen realizar una investigación científica.',
        url: 'https://share.imagica.ai/?q=6b8d823e-4456-4027-95bd-5b318e968840',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/fa/b9/fab968b9c3e23a2f6f9a7b95a03addae.jpg'

    },{
        id: '2',
        title: 'To Kill a Mockingbird',
        description: 'Es una guía para la elaboración de proyectos de investigación, tesis y tesinas. El libro es una herramienta para estudiantes, profesores e investigadores que deseen realizar una investigación científica.',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/fa/b9/fab968b9c3e23a2f6f9a7b95a03addae.jpg'
    },{
        id: '3',
        title: 'To Kill a Mockingbird',
        description: 'Es una guía para la elaboración de proyectos de investigación, tesis y tesinas. El libro es una herramienta para estudiantes, profesores e investigadores que deseen realizar una investigación científica.',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/fa/b9/fab968b9c3e23a2f6f9a7b95a03addae.jpg'
    },{
        id: '4',
        title: 'To Kill a Mockingbird',
        description: 'Es una guía para la elaboración de proyectos de investigación, tesis y tesinas. El libro es una herramienta para estudiantes, profesores e investigadores que deseen realizar una investigación científica.',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/fa/b9/fab968b9c3e23a2f6f9a7b95a03addae.jpg'
    },{
        id: '4',
        title: 'To Kill a Mockingbird',
        description: 'Es una guía para la elaboración de proyectos de investigación, tesis y tesinas. El libro es una herramienta para estudiantes, profesores e investigadores que deseen realizar una investigación científica.m',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/fa/b9/fab968b9c3e23a2f6f9a7b95a03addae.jpg'
    }],
},{
    id: '2',
    name: 'Psicología',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'hola pepe',
        description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
        url: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg',
        img_url:'https://medilibro.com/wp-content/uploads/works.5294.cover_.w_800.q_95.jpg.jpg'
    },{
        id: '2',
        title: 'To Kill a Mockingbird',
        description: 'The story of a young',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG',
        img_url:'https://medilibro.com/wp-content/uploads/works.5294.cover_.w_800.q_95.jpg.jpg'
    }]
},{
    id: '3',
    name: 'Investigación',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'hola pepe',
        description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
        url: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg',
    },{
        id: '2',
        title: 'To Kill a Mockingbird',
        description: 'The story of a young',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG'
    }]
    
    
    
},{
    id: '4',
    name: 'Investigación',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'hola pepe',
        description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
        url: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg',
    },{
        id: '2',
        title: 'To Kill a Mockingbird',
        description: 'The story of a young',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG'
    }]
    
    
    
},{
    id: '5',
    name: 'Investigación',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'hola pepe',
        description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
        url: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg',
    },{
        id: '2',
        title: 'To Kill a Mockingbird',
        description: 'The story of a young',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG'
    }]
    
    
    
}
,{
    id: '6',
    name: 'Investigación',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'Sampiere',
        description: 'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan.',
        url: 'https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.jpeg',
    },{
        id: '2',
        title: 'To Kill a Mockingbird',
        description: 'The story of a young',
        url: 'https://upload.wikimedia.org/wikipedia/en/7/79/To_Kill_a_Mockingbird.JPG'
    }]
    
    
    
}
];
