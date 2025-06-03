<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated-admin'],
})
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const toast = useToast()
const { data } = await useFetch('/api/users')
const items = ref(['user', 'admin'])
const { user, clear: clearSession } = useUserSession()

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string(),
  role: z.string()
})
type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  name: undefined,
  role: undefined
})

async function deleteUser(id: string) {
  await fetch(`/api/users/${id}`, {
  method: 'DELETE',
})
await refreshNuxtData()
}
async function onSubmit(event: FormSubmitEvent<Schema>) {
   await $fetch('/api/users/', {
  method: 'POST',
  body: {
    "email": event.data.email,
    "name": event.data.name,
    "role": event.data.role,
    "password": event.data.name
  }
})
await refreshNuxtData()
toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
}
</script>

<template>
    <div>Welcome Admin: {{ user.name }}</div>
    <UModal>
    <UButton label="Add User" color="neutral" variant="subtle" />

    <template #content>
    <UForm :schema="schema" :state="state" class="h-60 m-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>

    <UFormField label="Name" name="Name">
      <UInput v-model="state.name" />
    </UFormField>
    <UFormField label="Role">
      <UInputMenu v-model="state.role" :items="items" />
    </UFormField>
    <UButton type="submit" class="mt-5">
      Submit
    </UButton>
  </UForm>
    </template>
  </UModal>
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