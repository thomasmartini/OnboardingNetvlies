<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Dashboard',
    icon: 'i-lucide-user-round',
    class: 'topbar__text',
    to: '/',
  },
  {
    label: 'Bestanden',
    icon: 'i-lucide-database',
    to: '/bestanden',
    class: 'topbar__text',
  },
  {
    label: 'Smoelenboek',
    icon: 'i-lucide-book-open',
    to: '/smoelenboek',
    class: 'topbar__text',
  },
])
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-end topbar" />
</template>