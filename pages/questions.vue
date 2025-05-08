<template>
  <v-container>
    <h1>Cuestionario</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-alert v-if="!questions.length" type="info">
          No hay preguntas disponibles.
        </v-alert>
        <Test
          v-for="question in questions"
          :key="question.id"
          :question="question"
          @select-question="handleSelectQuestion"
        />
      </v-col>
      <v-col cols="12" md="6">
        <EditQuestion
          v-if="currentQuestion"
          :question="currentQuestion"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from '~/stores/questions'
import Test from '~/components/test.vue'
import EditQuestion from '~/components/EditQuestion.vue'

const store = useStore()

const questions = computed(() => store.questions)
const currentQuestion = computed(() => store.currentQuestion)

const handleSelectQuestion = (question) => {
  store.setCurrentQuestion(question)
}

onMounted(() => {
  store.fetchQuestions() })
</script>