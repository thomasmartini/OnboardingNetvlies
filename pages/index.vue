<script setup lang="ts">
import Timeline from '~/components/timeline.vue'
definePageMeta({
  layout: 'default',
  middleware: ['authenticated'],
})

const { user, clear: clearSession } = useUserSession()
const data = await $fetch(`http://localhost:3000/api/users/${user.value.email}`)
</script>
<template>
  <UContainer>   
  <div class="grid grid-flow-col grid-rows-2 font-[family-name:circular]">
    <div class="name row-span-2 self-center">{{ user.name }}</div>
    <div class="row-span-2 pr-35">
    <div class="profile-pic-wrapper justify-self-center mr-1.5">
    <img :src="user.photo" class="profile-pic">
    </div>
    <div class="h-[74vh] overflow-auto no-scrollbar">
  <Timeline v-if="data.progress >= 0">
    <template #title>
      Eerste dag
    </template>
    <template #content>
      klaar voor je eerste dag? lees hier meer
    </template>
    <template #link>
      <a href="/onboarding">Door naar de eerste onboarding module</a>
    </template>
  </Timeline>
  <Timeline v-if="data.progress >= 1">
    <template #link><a href="/onboardingactivetest">ga naar actieve onboarding</a></template>
  </Timeline>
  <Timeline v-if="data.progress >= 2">

  </Timeline>
  <Timeline v-if="data.progress >= 3">
    <template #link><a href="/onboardingnew"> ga naar de nieuwe onboarding</a></template>
  </Timeline>
  <Timeline v-if="data.progress >= 4">
    <template #title>nieuwe title</template>
  </Timeline>
  </div>
</div>
</div>
  </UContainer>
  </template>