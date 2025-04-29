<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
import type { StepperItem } from '@nuxt/ui'

const items = ref<StepperItem[]>([
  {
    title: 'Roze boekje',
    description: 'lees meer over het roze boekje',
    icon: 'i-lucide-house'
  },
  {
    title: 'Na de werkdag',
    description: 'Wat doen wij na het werk?',
    icon: 'i-lucide-truck'
  },
  {
    title: 'Lees het Smoelenboek',
    description: 'Hier kan je wat meer leren over je nieuwe collegas'
  }
])
</script>
<template>
    <UStepper orientation="vertical" :items="items" class="timeline w-full justify-center " />
  </template>