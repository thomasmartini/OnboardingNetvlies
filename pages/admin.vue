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
const { handleFileInput, files } = useFileStorage()

const submitFiles = async () => {
    const response = await $fetch('/api/files', {
        method: 'POST',
        body: {
            files: files.value
        }
    })
    console.log(response)
}

const schema = z.object({
  email: z.string(),
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
toast.add({ title: 'Success', description: 'User Deleted', color: 'success' })
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  submitFiles()
   await $fetch('/api/users/', {
  method: 'POST',
  body: {
    "email": event.data.email,
    "name": event.data.name,
    "role": event.data.role,
    "password": event.data.name,
    "photo": `_nuxt/assets/userFiles/${files.value[0].name}.jpg`,
  }
})
await refreshNuxtData()
toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
}
async function updateUser(id:string){
  const update = await $fetch(`/api/users/${id}`, {
  method: 'PUT',
  body:{
    "email": state.email,
    "name": state.name,
    "role": state.role,
    "photo": `_nuxt/assets/userFiles/${files.value[0].name}.jpg`,
  }
})
refreshNuxtData()
}
</script>

<template>
  <div>
    <div class="ml-10">
    <div class="mb-10 text-2xl font-[family-circular]">Welcome Admin: {{ user.name }}</div>
    <UModal>
    <UButton label="Add User" color="neutral" variant="subtle" />

    <template #content>
    <UForm :schema="schema" :state="state" class="h-80 m-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email"/>
    </UFormField>

    <UFormField label="Name" name="Name">
      <UInput v-model="state.name" />
    </UFormField>
    <UFormField label="Role">
      <UInputMenu v-model="state.role" :items="items" />
    </UFormField>
    <UInput type="file" accept="image/jpeg" @input="handleFileInput" class="mt-5"/><br>
    <UButton type="submit" class="mt-5">
      Submit
    </UButton>
  </UForm>
    </template>
  </UModal>
    </div>
    <div class="outline h-8 ml-10 mr-10 mt-2 flex items-center justify-between">
      <div class="ml-5">User:</div>
      <div class="flex">
      <div class="mr-5">Progress:</div>
      <div class="mr-5">Role:</div>
      </div>
    </div>
    <div v-for="person of data" class="outline h-8 ml-10 mr-10 flex items-center justify-between">
      <div class="flex">
      <div class="ml-5 w-50">{{ person.name }}</div>
          <UModal>
    <button label="delete user" class="text-error mr-4">Delete</button>
    
    <template #content>
      <div class="w-full h-30 justify-center flex flex-col items-center">
        <div class="text-error">Weet je zeker dat je deze gebruiker wilt verwijderen?</div>
        <div class="flex justify-items-between mt-2">
        <UButton label="Verwijder" color="error" variant="solid" @click="deleteUser(person._id)"/>
        </div>
      </div>
    </template>
        </UModal>
       
            <UModal>
     <button label="update user" class="text-warning">Update</button>

    <template #content>
    <UForm :schema="schema" :state="state" class="h-80 m-4" @submit="updateUser(person._id)">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email"/>
    </UFormField>

    <UFormField label="Name" name="Name">
      <UInput v-model="state.name"/>
    </UFormField>
    <UFormField label="Role">
      <UInputMenu v-model="state.role" :items="items" />
    </UFormField>
    <UInput type="file" accept="image/jpeg" @input="handleFileInput" class="mt-5"/><br>
    <UButton type="submit" class="mt-5">
      Submit
    </UButton>
  </UForm>
    </template>
  </UModal>
      </div>
      <div class="flex">
      <div class="mr-11">{{person.progress}}/10</div>
      <div class="mr-5 w-8">{{ person.role }}</div>
      </div>
    </div>
    </div>
</template>