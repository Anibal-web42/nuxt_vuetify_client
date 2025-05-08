<template>
    <v-container>
      <h1>Cuestionario</h1>
      <v-row>
        <v-col cols="12">
          <v-alert v-if="!questions.length" type="info">
            No hay preguntas disponibles.
          </v-alert>
          <Test
            v-for="(question, index) in questions"
            :key="index"
            :question="question"
          />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useStore } from '~/stores/questions'
  import Test from '~/components/test.vue'
  
  const store = useStore()
  const questions = computed(() => store.questions)
  
  onMounted(() => {
    store.fetchQuestions()
  })
  </script>