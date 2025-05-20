<script setup lang="ts">
definePageMeta({
    layout: 'default',
})
const { loggedIn, user, fetch: refreshSession } = useUserSession()
const credentials = reactive({
  email: '',
  password: '',
})
async function login() {
  $fetch('/api/login', {
    method: 'POST',
    body: credentials
  })
  .then(async () => {
    // Refresh the session on client-side and redirect to the home page
    await refreshSession()
    await navigateTo('/')
  })
  .catch(() => alert('Bad credentials'))
}
</script>

<template>
  <div class="text-6xl justify-self-center mb-8">Netvlies Onboarding</div>
  <form @submit.prevent="login" class="justify-self-center block">
    <div><input v-model="credentials.email" type="email" placeholder="Email" class="outline mb-2" /></div>
  <div><input v-model="credentials.password" type="password" placeholder="Password"class="outline" /></div>
    <button type="submit">Login</button>
  </form>
</template>