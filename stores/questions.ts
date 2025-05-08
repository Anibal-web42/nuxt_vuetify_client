import { defineStore } from 'pinia'

export const useStore = defineStore('questions', {
  state: () => ({
    questions: [],
    question: {},
  }),
  actions: {
    async fetchQuestions() {
      try {
        const response = await $fetch('/api/questions', { method: 'GET' })
        this.questions = response
      } catch (error) {
        console.error('Error fetching questions:', error)
      }
    },
  },
})