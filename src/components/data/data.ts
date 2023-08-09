export interface IEvents {
    image: string
    date: string
    title: string
    profileImage: string
    author: string
}

export const eventsData: IEvents[] = [
    {
        image: 'imagen1.jpg',
        date: 'Jueves 30 de septiembre de 2023',
        title: 'Ideas de Negocios',
        profileImage: 'perfil1.jpg',
        author: 'Orlando Neto'
    },
    {
        image: 'imagen2.jpg',
        date: 'Lunes 02 de octubre de 2023',
        title: 'Bitcoin y criptos',
        profileImage: 'perfil1.jpg',
        author: 'Otto Ferreira'
    },
    {
        image: 'imagen3.jpg',
        date: 'Viernes 05 de agosto de 2023',
        title: 'Pizza paso a paso',
        profileImage: 'perfil1.jpg',
        author: 'Carolyna Ramos'
    }
]

interface ICategories {
    title: string
    image: string
}

export const categoriesData: ICategories[] = [
    {
        title: 'Programación',
        image: 'categoria_1'
    },
    {
        title: 'Diseño UX y UI',
        image: 'categoria_2'
    },
    {
        title: 'Negocios e Ideas',
        image: 'categoria_3'
    },
    {
        title: 'Ropa y moda',
        image: 'categoria_4'
    },
    {
        title: 'Ejercicio y Bienestar',
        image: 'categoria_5'
    },
    {
        title: 'Fotografia',
        image: 'categoria_6'
    },
    {
        title: 'Comidas',
        image: 'categoria_7'
    },
    {
        title: 'Deseño interior',
        image: 'categoria_8'
    },
    {
        title: 'Café',
        image: 'categoria_9'
    },
    {
        title: 'Cine',
        image: 'categoria_10'
    },
    {
        title: 'Libros',
        image: 'categoria_11'
    },
    {
        title: 'Emprendimiento',
        image: 'categoria_12'
    }
]