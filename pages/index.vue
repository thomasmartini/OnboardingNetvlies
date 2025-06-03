<script setup lang="ts">
import Timeline from '~/components/timeline.vue'
definePageMeta({
  layout: 'default',
  middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()
async function logout() {
  await clearSession()
  await navigateTo('/login')
}

</script>
<template>
  <UContainer>     
  <div class="grid grid-flow-col grid-rows-2">
    <div class="name row-span-2 self-center">{{ user.name }}</div>
    <div class="row-span-2 pr-35">
    <div class="profile-pic-wrapper justify-self-center mr-1.5">
    <img src="https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_214_298/public/images/medewerkers/NET-231109-3725.png?itok=dDjE9kIR" class="profile-pic">
    </div>
    <div class="h-165 overflow-auto no-scrollbar">
  <Timeline>
    <template #title>
      Eerste dag
    </template>
    <template #content>
      klaar voor je eerste dag? lees hier meer
    </template>
    <template #link>
      <a href="http://localhost:3000/onboarding">Door naar de eerste onboarding module</a>
    </template>
  </Timeline>
  <Timeline></Timeline>
  <Timeline></Timeline>
  <Timeline></Timeline>
  <Timeline></Timeline>
  <Timeline></Timeline>
  </div>
</div>
</div>
  </UContainer>
  </template>