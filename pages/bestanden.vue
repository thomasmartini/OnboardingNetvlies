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
    <div class="font-[family-name:circular]">
    <UContainer class="flex">
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Eerste Dag</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Binnen Kantoor</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
</UContainer>
<UContainer class="flex">
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Buiten Kantoor</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Overige</div>
        <USeparator></USeparator>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
        <div class="mt-5">hier komen de bestanden te staan</div>
    </UContainer>
</UContainer>
</div>
</template>