<script setup lang="ts">
import Timeline from '~/components/timeline.vue'
definePageMeta({
  layout: 'default',
  middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()
</script>
<template>
  <UContainer>     
  <div class="grid grid-flow-col grid-rows-2">
    <div class="name row-span-2 self-center">{{ user.name }}</div>
    <div class="row-span-2 pr-35">
    <div class="profile-pic-wrapper justify-self-center mr-1.5">
    <img src="https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_240_334/public/images/medewerkers/Pierre%20no%20bg_0.png?itok=SyBdDI2i" class="profile-pic">
    </div>
    <div class="h-screen overflow-auto no-scrollbar">
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
  <Timeline>
    <template #link><a href="http://localhost:3000/onboardingActiveTest">onboarding 2 test</a></template>
    <template #title>Tweede onboarding</template>
  </Timeline>
  <Timeline></Timeline>
  <Timeline></Timeline>
  <Timeline>
    <template #title>nieuwe title</template>
  </Timeline>
  <Timeline>
    <template #title>
      haal je sleutel op
    </template>
    <template #content>
      je sleutel kan je ophalen
    </template>
    <template #link>
      <a href="/sleutel">Door naar de eerste onboarding module</a>
    </template>
  </Timeline> 
  </div>
</div>
</div>
  </UContainer>
  </template>