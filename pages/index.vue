<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
import type { StepperItem } from '@nuxt/ui'

const items = ref<StepperItem[]>([
  {
    icon: 'https://github.com/benjamincanac.png',
  
  },
  {
    title: 'Na de werkdag',
    description: 'Wat doen wij na het werk?',
    icon: 'i-lucide-beer',
    
  },
  {
    title: 'Lees het Smoelenboek',
    description: 'Hier kan je wat meer leren over je nieuwe collegas',
    icon: 'i-lucide-book-open'
  },
  {
    title: 'Lees het Smoelenboek',
    description: 'Hier kan je wat meer leren over je nieuwe collegas'
  }
])
</script>
<template>
  <UContainer class="flex justify-start">
  <div class="self-center name">Jan van Blocken</div>
    <UStepper orientation="vertical" size="xl" :items="items" class="timeline w-full justify-start " />
  </UContainer>
  </template>