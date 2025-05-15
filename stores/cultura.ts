import { defineStore } from 'pinia'

export const useStoreCultura = defineStore('cultura', {
  state: () => ({
    questions: [], // Lista de preguntas
    currentQuestion: null, // Pregunta actualmente seleccionada
  }),
  actions: {
    async fetchQuestions() {
      try {
        const response = await $fetch('/api/cultura', { method: 'GET' })
        this.questions = response
      } catch (error) {
        console.error('Error fetching cultura:', error)
      }
    },
    setCurrentQuestion(cultura) {
        this.currentQuestion = { ...question } // Clonamos para evitar mutaciones directas
    },
    updateQuestion(updatedcultura) {
      // Encontrar el índice de la pregunta por ID
      const index = this.questions.findIndex(q => q.id === updatedQuestion.id)
      if (index !== -1) {
        // Reemplazar la pregunta completa para mantener la reactividad
        this.questions[index] = { ...updatedQuestion }
        // Si la pregunta actual es la que se actualizó, también actualizamos currentQuestion
        if (this.currentQuestion && this.currentQuestion.id === updatedQuestion.id) {
          this.currentQuestion = { ...updatedQuestion }
        }
      }
    },      
  },
  persist: {
    storage: process.client ? localStorage : undefined // Solo usa localStorage en el cliente
  }
});