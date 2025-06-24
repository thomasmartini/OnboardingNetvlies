<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})
import { z } from 'zod'
import * as dataJSON from '../assets/smoelenboekUsers/smoelen2.json'
import type { FormSubmitEvent } from '@nuxt/ui'
const { handleFileInput, files } = useFileStorage()

const { user, clear: clearSession } = useUserSession()
let data = dataJSON

const schema = z.object({
  email: z.string().email('Invalid email'),
  name: z.string(),
  role: z.string(),
  hobbies: z.string(),
  funFact: z.string()
})
type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  name: undefined,
  role: undefined,
  hobbies: undefined,
  funFact: undefined
})
const submitFiles = async () => {
    const response = await $fetch('/api/files', {
        method: 'POST',
        body: {
            files: files.value
        }
    })
   console.log(files.value[0].name)
}
async function onSubmit(event: FormSubmitEvent<Schema>){
  console.log('helle world')
    submitFiles()
    let getFile = data.default
    let newUser =  {
        "name": event.data.name,
        "email":event.data.email,
        "role": event.data.role,
        "photo": `_nuxt/assets/userFiles/${files.value[0].name}.jpg`,
        "fun_fact": event.data.funFact,
        "hobbies": event.data.hobbies
  }
  getFile.push(newUser)
  data = getFile
  await $fetch('/api/json/', {
  method: 'POST',
  body: data
  }
)
}
</script>
<template>
    <UModal>
    <UButton v-if="user.role == `admin`" class="ml-5">Add Smoel</UButton>

    <template #content>
    <UForm :schema="schema" :state="state" class="h-120 m-4" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormField>
    <UFormField label="Naam" name="name">
      <UInput v-model="state.name" />
    </UFormField>
    <UFormField label="titel" name="role">
      <UInput v-model="state.role"/>
    </UFormField>
    <UFormField label="Hobbies" name="hobbies">
      <UInput v-model="state.hobbies"/>
    </UFormField>
    <UFormField label="Fun Fact" name="funFact">
      <UInput v-model="state.funFact"/>
    </UFormField>
    <UInput type="file" @input="handleFileInput" class="mt-5"/><br>
    <UButton type="submit" class="mt-5">
      Submit
    </UButton>
  </UForm>
    </template>
  </UModal>
    <section class="person-overview font-[family-name:circular] mt-22.5">
        <div class="person-overview__list h-[88vh] pb-20 overflow-scroll no-scrollbar grid grid-cols-4 gap-6 pl-25 pr-25">

    <div v-for="smoel in data.default" class="person-overview__item person-overview__item--1">

<article class="person">    <picture class="person__picture">
        <source v-if="smoel.sourceset" :srcset="`${smoel.sourceset[0]} 1x`" media="(min-width: 90em)" type="image/jpeg" width="320" height="445">
                    <source v-if="smoel.sourceset" :srcset="`${smoel.sourceset[1]} 1x`" media="(min-width: 80em)" type="image/jpeg" width="240" height="334">
                    <source v-if="smoel.sourceset" :srcset="`${smoel.sourceset[2]} 1x`" media="(min-width: 64em)" type="image/jpeg" width="214" height="298">
                    <source v-if="smoel.sourceset" :srcset="`${smoel.sourceset[3]} 1x`" media="(min-width: 48em)" type="image/jpeg" width="342" height="478">
                    <source v-if="smoel.sourceset" :srcset="`${smoel.sourceset[4]} 1x`" media="(min-width: 30em)" type="image/jpeg" width="320" height="448">
                    <source v-if="smoel.sourceset" :srcset="`${smoel.sourceset[5]} 1x`" media="(min-width: 22.5em)" type="image/jpeg" width="200" height="280">
                    <source v-if="smoel.sourceset" :srcset="`${smoel.sourceset[6]} 1x`" media="(min-width: 0)" type="image/jpeg" width="150" height="210">
        <img :src="smoel.photo" :alt="smoel.name" class="person__img" loading="lazy">
        <div class="person__picture_overlay">
        <div class="person__picture_hobby">Hobbies:<div class="text-black">{{ smoel.hobbies }}</div></div>
        <div class="person__picture_fact">Leuk Feitje: <div class="text-black">{{ smoel.fun_fact }}</div></div>
</div>
    </picture>
<header class="person__header">
        <h2 class="person__title">{{ smoel.name }}</h2>
    </header>

    <div class="person__content">{{smoel.role}}</div><footer class="person__actions">	
	
	<a class="link" :href="`mailto:${smoel.email}`">stuur email<span class="link__arrow">        
    </span>
	</a>
</footer></article>
</div>
      </div>     
    </section>
</template>