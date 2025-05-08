export default defineEventHandler((event) => {
    const questions = [
      {
        question: " ¿Qué colores tiene la bandera de Colombia?",
        answers: [
          {
            a: "Amarillo, Azul y Rojo",
            b: "Verde, Negro y Azul",
            c: "Blanco, Verde, Rojo",
          },
        ],
      },
      {
        question: " ¿Cuál es la capital de Colombia?",
        answers: [
          {
            a: "Bogotá",
            b: "Medellín",
            c: "Cali",
          },
        ],
      },
    ]
  
    return questions
  })