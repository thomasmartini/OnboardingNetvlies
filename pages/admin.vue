<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated-admin'],
})
const { user, clear: clearSession } = useUserSession()
async function logout() {
  await clearSession()
  await navigateTo('/login')
}
</script>
<template>
    <span>Welcome Admin: {{ user.name }}</span><br>
    <button @click="logout()">logout</button>
</template>