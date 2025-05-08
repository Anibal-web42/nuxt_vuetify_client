<template>
    <v-card class="mb-4" elevation="2">
      <v-card-title>{{ question.question }}</v-card-title>
      <v-card-text>
        <v-radio-group v-model="selectedAnswer">
          <v-radio
            v-for="(answer, key) in question.answers[0]"
            :key="key"
            :label="answer"
            :value="key"
          ></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    question: { type: Object, required: true },
  })
  
  const selectedAnswer = ref(null)
  </script>
  
  <style scoped>
  .mb-4 {
    margin-bottom: 16px;
  }
  </style>