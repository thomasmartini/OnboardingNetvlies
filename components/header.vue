<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Dashboard',
    icon: 'i-lucide-user-round',
    to: '/',
  },
  {
    label: 'Bestanden',
    icon: 'i-lucide-database',
    to: '/bestanden',
  },
  {
    label: 'Smoelenboek',
    icon: 'i-lucide-book-open',
    to: '/smoelenboek',
  },
])
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-end topbar" />
</template>