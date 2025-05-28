<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated-admin'],
})
const { data } = await useFetch('http://localhost:3000/api/users')

const { user, clear: clearSession } = useUserSession()
async function logout() {
  await clearSession()
  await navigateTo('/login')
}
async function deleteUser(id: string) {
  await fetch(`http://localhost:3000/api/users/${id}`, {
  method: 'DELETE',
})
await refreshNuxtData()
}
</script>
<template>
    <div>Welcome Admin: {{ user.name }}</div>
    <button @click="logout()">logout</button>
    <div class="outline h-8 ml-10 mr-10 mt-5 flex items-center justify-between">
      <div class="ml-5">User:</div>
      <div class="flex">
      <div class="mr-5">Progress:</div>
      <div class="mr-5">Role:</div>
      </div>
    </div>
    <div v-for="person of data" class="outline h-8 ml-10 mr-10 flex items-center justify-between">
      <div class="flex">
      <div class="ml-5 w-30">{{ person.name }}</div>
      <button class="btn text-red-500 ml-5" @click="deleteUser(person._id)">Delete</button>
      </div>
      <div class="flex">
      <div class="mr-5">{{Math.ceil(Math.random() * 10)}}/10</div>
      <div class="mr-5 w-8">{{ person.role }}</div>
      </div>
    </div>
</template>