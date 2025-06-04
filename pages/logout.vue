<script setup lang="ts">
definePageMeta({
  layout: 'default',
  middleware: ['authenticated'],
})
const { user, clear: clearSession } = useUserSession()
async function logout() {
  await clearSession()
  await navigateTo('/login')
}
logout()
</script>