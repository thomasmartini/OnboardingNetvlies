<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'
const toast = useToast()
const schema = z.object({
  answer: z.string()
})
type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  answer: undefined,
})
async function onSubmit(event: FormSubmitEvent<Schema>) {
  if(event.data.answer == "Haven 19"){
    toast.add({ title: 'Yes, goed gedaan!!', description: 'Je antwoord klopt!', color: 'success' })
  }
  else{
        toast.add({ title: 'Ah jammer', description: 'Dit antwoord klopt niet', color: 'error' })
  }
}
</script>
<template>
<div class="flex justify-between h-[88vh] font-[family-name:circular] block">
    <div class="mw-[20vh] w-[100vh] ml-[5vh] justify-items-center overflow-y-scroll overflow-x-auto no-scrollbar">
        <div class="text-5xl font-bold mb-5"><slot name="title">Default Title</slot></div>
        <div><slot name="content-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</slot></div>
    </div>
    <div class=" w h-full outline"></div>
    <div class="justify-items-center mr-[5vh] overflow-y-scroll no-scrollbar">
      <div class="text-5xl mb-5 font-bold">Challenge</div>
      <div class=""><slot name="challenge">Wat is het addres van onze stamkroeg Dok 19? (straatnaam en nummer)</slot></div>
      <div><UForm :schema="schema" :state="state" @submit="onSubmit"><UInput class="mr-1" placeholder="vul hier je antwoord in" v-model="state.answer"></UInput><UButton type="submit">submit</UButton></UForm></div>
<div class="mt-10"><slot name="map"><iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Prinsenkade+8,+4811+VB+Breda&t=&z=18&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></slot></div>
</div>
</div>
</template>