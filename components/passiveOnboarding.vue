<script setup lang="ts">
const { user, clear: clearSession } = useUserSession()
let done = false
async function updateUser(){
 const data = await $fetch(`/api/users/${user.value.email}`, {
  method: 'GET',
})
let progressUpdated = data.progress + 1
 const update = await $fetch(`/api/users/${data._id}`, {
  method: 'PUT',
  body:{
    "progress": progressUpdated
  }
})
}
async function onClick() {
  done = true
  //updateUser()
  return new Promise(res => setTimeout(res, 1000))
    
}
</script>
<template>
    <div>
    <div class="justify-items-center font-[family-name:circular] overflow-scroll no-scrollbar h-[88vh] pb-15">
    <div class="text-5xl mb-20  font-bold"><slot name="title">Onboarding Component</slot></div>
    <div class="w-250 justify-items-center"><slot name="image"></slot></div>
    <div class="w-250 mt-5"><slot name="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    </slot>
    </div>
    <UButton v-bind:loading-auto="true" label="Rond Module Af" v-bind:disabled="done" @click="onClick()" class="mt-4">
  </UButton>
    </div>

    </div>
</template>