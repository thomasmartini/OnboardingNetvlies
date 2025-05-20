<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()
async function logout() {
  await clearSession()
  await navigateTo('/login')
}
import type { StepperItem } from '@nuxt/ui'
const items = ref<StepperItem[]>([
  {
    icon: "https://github.com/benjamincanac.png"
    
  },
  {
    title: 'Onboarding',
    description: 'Begin met de eerste stap van het onboarden',
    icon: 'i-lucide-book-open',
  },
  {
    title: 'Lees het Smoelenboek',
    description: 'Hier kan je wat meer leren over je nieuwe collegas',
    icon: 'i-lucide-book-open'
  },
  {
    title: 'Na de werkdag',
    description: 'Wat doen wij na het werk?',
    icon: 'i-lucide-beer',
    
  },
])
</script>
<template>
  <UContainer class="flex justify-start">
  <div class="self-center name">{{ user.name }}</div>
    <UStepper orientation="vertical" size="xl" :items="items" class="w-full justify-start " color="info"/>
    <button @click="logout()">logout</button>
  </UContainer>
  </template>