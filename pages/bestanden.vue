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
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:chrome" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:gitlab" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="logos:microsoft-onedrive" class="size-5 mr-2"/>Ga naar bestand</a></div>
    </UContainer>
    <UContainer class="w-150 h-100">
        <div class="text-4xl">Binnen Kantoor</div>
        <USeparator></USeparator>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:chrome" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="logos:microsoft-onedrive" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:figma" class="size-5 mr-2"/>Ga naar bestand</a></div>
    </UContainer> 
</UContainer> 
<UContainer class="flex"> 
    <UContainer class="w-150 h-100"> 
        <div class="text-4xl">Buiten Kantoor</div> 
        <USeparator></USeparator> 
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:gitlab" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:chrome" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="logos:microsoft-onedrive" class="size-5 mr-2"/>Ga naar bestand</a></div>
    </UContainer> 
    <UContainer class="w-150 h-100"> 
        <div class="text-4xl">Overige</div> 
        <USeparator></USeparator> 
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:gitlab" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="devicon:chrome" class="size-5 mr-2"/>Ga naar bestand</a></div>
        <div class="mt-5 flex"><a href="" class="flex underline bestand"><UIcon name="logos:microsoft-onedrive" class="size-5 mr-2"/>Ga naar bestand</a></div>
    </UContainer> 
</UContainer> 
</div> 
</template> 