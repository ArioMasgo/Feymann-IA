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
        title: 'Metodologías de Investigación 2019',
        description: 'Una guía esencial para comprender las distintas metodologíasde investigación. Este libro de Sampieri te ofrece una visión completa de las rutas cuantitativa, cualitativa y mixta, proporcionando una sólida base para tus proyectos de investigación.',
        url: 'https://share.imagica.ai/?q=513a552f-e1cb-4350-b9fa-1f523702ccd1',
        img_url: 'https://virtual.cuautitlan.unam.mx/rudics/wp-content/uploads/2019/01/metodologia-de-la-investigacion-las-rutas-cuantit.png'
    },{
        id: '3',
        title: 'Normas APA 7ma Edición',
        description: 'Descubre cómo aplicar las Normas APA 7ma Edición de manera precisa y sencilla con la ayuda de Feynman IA. Este libro es una guía indispensable para estudiantes, académicos y profesionales que desean asegurar la correcta citación y formateo de sus trabajos según los estándares más recientes.',
        url: 'https://share.imagica.ai?q=9d425adf-0bc7-4b1a-b1b8-36a3d20ee189',
        img_url: 'https://eleternoestudiante.com/wp-content/uploads/2019/10/cropped-normas-apa-7-edicion-2020-1.jpg'
    },{
        id: '4',
        title: 'Directrices para Revisiones Sistemáticas en Ingeniería del Software',
        description: 'Descubre pautas clave para revisiones de literatura en ingeniería de software. Fundamental para investigadores, estudiantes y profesionales que buscan rigor en sus proyectos de investigación.',
        url: 'https://share.imagica.ai?q=891ee89e-6f14-400a-98b5-a80b32bc6a9a',
        img_url: 'https://m.media-amazon.com/images/I/71BWqdfvbeL._AC_UF1000,1000_QL80_.jpg'
    }],
},{
    id: '2',
    name: 'Psicología',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'Guía de consulta de los Criterios Diag nósticos del DSM-5',
        description: 'Es una herramienta concisa y accesible para la referencia fundamental en psiquiatría, el DSM-5. Esta guía incluye la clasificación diagnóstica completa revisada y todos los criterios diagnósticos del DSM-5 en un formato fácil de usar.',
        url: 'https://share.imagica.ai/?q=01ee5bce-9bd5-4220-b0e4-9c3f7d3bb2cc',
        img_url:'https://medilibro.com/wp-content/uploads/works.4950.cover_.w_800.q_95.jpg.jpg'
    },{
        id: '2',
        title: 'Psicología Clínica',
        description: 'ste libro amalgama conocimientos del campo de las neurociencias, la psiquiatría, la psicometría y la psicoterapia. Además, ofrece una perspectiva social y preventiva de las psicopatologías, proporcionando al lector una visión holística de la salud y la enfermedad mental',
        url: 'https://share.imagica.ai/?q=27cf1c5e-909c-4118-b5d3-8aa1e4da97fd',
        img_url:'https://glifos.upana.edu.gt/library/images/e/e0/CoverPsicolg%C3%ADaS%C3%A1nchez.jpg'
    },{
        id: '3',
        title: 'Análisis funcional de la conducta humana',
        description: 'En esta obra se hace un recorrido completo por el análisis funcional de la conducta humana, desde su nacimiento en el seno del análisis experimental de la conducta hasta sus aplicaciones en el campo clínico.',
        url: 'https://share.imagica.ai/?q=32ffdf74-1e76-4233-97ba-3b2448511bcc',
        img_url:'https://covers.odilo.io/public/OdiloPlace_Anaya_E8147/9788436843507_215x304.jpeg'
    }]
},{
    id: '3',
    name: 'Programación',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'Javascript Eloquente 4ta edición',
        description: 'La cuarta edición del libro JavaScript es una referencia esencial y actualizada que cubre de manera exhaustiva el lenguaje de programación central para el desarrollo web.',
        url: 'https://share.imagica.ai?q=4069f929-7de5-4e8d-a25e-49bff5ba14da',
        img_url: 'https://pbs.twimg.com/media/GIeXVM4W8AAdurn.jpg'
    },{
        id: '2',
        title: 'Codigo Limpio - Robert C. Martin',
        description: 'En Código Limpio, Robert C. Martin destaca principios y técnicas esenciales para desarrolladores, promoviendo la creación de software legible, eficiente y mantenible.',
        url: 'https://share.imagica.ai?q=faf8fdbc-45ad-495b-aa85-29d3c62ecec2',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/87/da/87da3d378f0336fd04014c4ea153d064.jpg'
        },{
        id: '3',
        title: 'Introducción a la programación en C',
        description: 'La Introducción a la Programación en C ofrece una base sólida para principiantes, abordando conceptos fundamentales y técnicas de programación utilizando el lenguaje C.',
        url: 'https://share.imagica.ai?q=82b8b639-b25b-49f4-8e57-8e5c88b0d06b',
        img_url: 'https://image.cdn1.buscalibre.com/3171388.__RS360x360__.jpg'
        },{
        id: '4',
        title: 'Fundamentos de programación en JAVA',
        description: 'Los Fundamentos de Programación en Java proporcionan una introducción completa a la programación en Java, abarcando desde conceptos básicos hasta aplicaciones avanzadas.',
        url: 'https://share.imagica.ai?q=78e74ac1-cf39-473c-b491-257d2f04217e',
        img_url: 'https://m.media-amazon.com/images/I/615eN+t2s3L._AC_UF1000,1000_QL80_.jpg'
        },{
        id: '5',
        title: 'Programación con Python',
        description: 'El libro Programación con Python es una guía completa para aprender a programar en Python, abordando desde los conceptos básicos hasta aplicaciones avanzadas.',
        url: 'https://share.imagica.ai?q=b8d310e1-9876-49cb-91a0-2699276bb39c',
        img_url: 'https://m.media-amazon.com/images/I/41QZyv4q+GL.jpg'
        },{
        id: '6',
        title: 'Survive React',
        description: 'La Introducción a React es una guía esencial para aprender los fundamentos de esta popular biblioteca de JavaScript para construir interfaces de usuario interactivas y dinámicas.',
        url: 'https://share.imagica.ai?q=5b04837b-bc00-4890-a55f-0ae21182eddc',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/e7/e9/e7e96546245408ef567fcd9dd6a16b08.jpg'
        },{
        id: '7',
        title: 'Typescript',
        description: 'La Introducción a TypeScript ofrece una guía fundamental para comprender y utilizar este lenguaje de programación tipado estáticamente, ampliamente utilizado en el desarrollo web moderno.',
        url: 'https://share.imagica.ai?q=12b52039-49c0-4743-ad38-5f2987d31f1d',
        img_url: 'https://www.lawebdelprogramador.com/pdf/files/1556647787_manual-typescript-86.jpg'
        }]
    
    
},{
    id: '4',
    name: 'Derechos',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'Derecho de las Telecomunicaciones',
        description: 'El libro Derecho de las Telecomunicaciones aborda los marcos legales y regulaciones que gobiernan el sector de las telecomunicaciones, incluyendo aspectos jurídicos y normativos relevantes.',
        url: 'https://share.imagica.ai?q=f6bbb008-8115-4268-8485-33e1c3da4c32',
        img_url: 'https://www.fondoeditorial.pucp.edu.pe/1388-home_default/introduccion-al-derecho-de-las-telecomunicaciones.jpg'
        },{
        id: '2',
        title: 'Derecho Procesal',
        description: 'El libro Derecho Procesal examina los procedimientos legales y las normativas que rigen el desarrollo y la resolución de disputas en los tribunales.',
        url: 'https://share.imagica.ai?q=c75e6305-f709-4170-91d7-e4cf47a2d370',
        img_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/4e/20/4e20ef51aa6921383c03d58441954d00.jpg'
        },{
        id: '3',
        title: 'Análisis económico del derecho',
        description: 'El libro Análisis Económico del Derecho explora cómo los principios económicos influyen en la formulación y aplicación de normas legales y en la resolución de disputas judiciales.',
        url: 'https://share.imagica.ai?q=5e5d35b6-522b-4302-b940-b1a3cd795842',
        img_url: 'https://www.fondoeditorial.pucp.edu.pe/1190-large_default/analisis-economico-del-derecho.jpg'
        },{
        id: '4',
        title: 'Derecho tributario',
        description: 'El libro Derecho Tributario aborda las leyes y regulaciones relacionadas con los impuestos, incluyendo su aplicación, interpretación y efectos en individuos, empresas y entidades gubernamentales.',
        url: 'https://share.imagica.ai?q=a80137b3-e221-4dc8-9082-06c3020f664b',
        img_url: 'https://www.fondoeditorial.pucp.edu.pe/1164-home_default/derecho-tributario-.jpg'
        },{
        id: '5',
        title: 'La interpretación de la Ley',
        description: 'La Interpretación de la Ley analiza los métodos y principios utilizados para entender y aplicar las normas legales, explorando su alcance y significado en diferentes contextos jurídicos.',
        url: 'https://share.imagica.ai?q=d02a6f96-b0ca-4a94-917e-39befcdaed4a',
        img_url: 'https://www.fondoeditorial.pucp.edu.pe/1157-home_default/la-interpretacion-de-la-ley-teoria-y-metodos.jpg'
        }]
    
},{
    id: '5',
    name: 'ISO',
    description: 'Fiction is the art of storytelling.',
    books: [{
        id: '1',
        title: 'Cobit 2019 Intoducción y Metodología',
        description: 'Explora COBIT 2019 con Feynman para dominarlo. Este recurso esencial te ofrece una sólida base para comprender su metodología y aplicarlo eficazmente en la gestión de tecnologías de la información.',
        url: 'https://share.imagica.ai?q=b1b3533a-3fce-4d74-8353-eb00f4d6a679',
        img_url: 'https://image.isu.pub/191015055617-968434a018bf441570b17b77a1bdd4ac/jpg/page_1.jpg'
    },{
        id: '2',
        title: 'ISO/IEC 25021',
        description: 'La norma ISO/IEC 25021, también conocida como SQuaRE (Software Quality Requirements and Evaluation), establece estándares para evaluar y especificar la calidad del software.',
        url: 'https://share.imagica.ai?q=f8854618-6268-4dc8-9193-eb4b690e677c',
        img_url: 'https://5.imimg.com/data5/SELLER/Default/2023/2/YR/OU/GH/41983099/iso-pas-17712-2010-freight-containers-mechanical-seals-certification-500x500.jpg'
        },{
        id: '3',
        title: 'ISO/IEC 25022',
        description: 'La norma ISO/IEC 25022, parte del estándar SQuaRE (Software Quality Requirements and Evaluation), define modelos y métricas para evaluar la calidad del producto de software.',
        url: 'https://share.imagica.ai?q=91688bd1-56c2-46e1-a7ad-2a7eb7faa6f5',
        img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ISO_Logo_%28Red_square%29.svg/260px-ISO_Logo_%28Red_square%29.svg.png'
        },{
        id: '4',
        title: 'ISO/IEC 25023',
        description: 'La norma ISO/IEC 25023, dentro del estándar SQuaRE (Software Quality Requirements and Evaluation), establece directrices para la medición de la calidad del producto de software.',
        url: 'https://share.imagica.ai?q=80156c3d-e303-4208-b556-90a4b6b0e088',
        img_url: 'https://www.shutterstock.com/image-vector/iso-9001-certification-stamp-flat-260nw-2166574775.jpg'
        },{
        id: '5',
        title: 'ISO/IEC 25024',
        description: 'La norma ISO/IEC 25024, parte del estándar SQuaRE (Software Quality Requirements and Evaluation), define modelos y técnicas para la evaluación de la calidad en procesos de software.',
        url: 'https://share.imagica.ai?q=ed0b2744-e8c8-4b93-b822-de4442f78a76',
        img_url: 'https://5.imimg.com/data5/GV/EG/MY-42249117/iso-25000-2014-certification-consultancy-500x500.jpg'
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
