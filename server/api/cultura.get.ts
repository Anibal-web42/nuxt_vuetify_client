export default defineEventHandler((event) => {
    const questions = [
      {
        id: 1,
        question: "¿Qué colores tiene la bandera de Colombia?",
        answers: [
          {
            a: "Amarillo, Azul y Rojo",
            b: "Verde, Negro y Azul",
            c: "Blanco, Verde, Rojo",
          },
        ],
      },
      {
        id: 2,
        question: "¿Cuál es la capital de Colombia?",
        answers: [
          {
            a: "Bogotá",
            b: "Medellín",
            c: "Cali",
          },
        ],
      },
      {
        id: 3,
        question: "¿Quién escribió 'Cien años de soledad'?",
        answers: [
          {
            a: "Gabriel García Márquez",
            b: "Mario Vargas Llosa",
            c: "Pablo Neruda",
          },
        ],
      },
      {
        id: 4,
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: [
          {
            a: "Júpiter",
            b: "Saturno",
            c: "Tierra",
          },
        ],
      },
      {
        id: 5,
        question: "¿En qué continente se encuentra Egipto?",
        answers: [
          {
            a: "África",
            b: "Asia",
            c: "Europa",
          },
        ],
      },
    ]
  
    return questions
  })