<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})
  
const { user, clear: clearSession } = useUserSession()

async function logout() {
  await clearSession()
  await navigateTo('/login')
}
</script>
<template>
    
    <UContainer class="flex">
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Bestanden</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Bestanden</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
</UContainer>
<UContainer class="flex">
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Bestanden</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Bestanden</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
</UContainer>
</template>