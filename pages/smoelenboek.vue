<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})
import * as dataJSON from '../assets/smoelenboekUsers/smoelen.json'
const { user, clear: clearSession } = useUserSession()
import fs from 'fs'

let data = dataJSON
function editJson(){
    let getFile = data.default
    let newUser =  {
    "name": "Thomas Martini",
    "email": "tmartini@netvlies.nl",
    "role": "Full-stack developer",
    "photo": "https://www.netvlies.nl/sites/default/files/styles/thumbnail/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=KI-orLye",
    "sourceset": [
      "https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_320_445/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=h1-A4KwA",
      "https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_240_334/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=G-QwNyjB",
      "https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_214_298/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=k-V8VDZZ",
      "https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_342_478/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=4CQwkhZ9",
      "https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_320_448/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=H7AZXLF8",
      "https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_200_280/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=sIvB7W_l",
      "https://www.netvlies.nl/sites/default/files/styles/twig_image_portrait_150_210/public/images/medewerkers/tomas%20van%20den%20nieuwendijk.png?itok=73Fuqnty"
    ],
    "fun_fact": "Heeft een letterboxd account"
  }
  getFile.push(newUser)
  data = getFile
  refreshNuxtData()
}
</script>
<template>
    <UButton v-if="user.role == `admin`" @click="editJson" class="ml-5">Add Smoel</UButton>
    <section class="person-overview">
        <div class="person-overview__list h-screen overflow-scroll no-scrollbar grid grid-cols-4 gap-6 pl-25 pr-25">

    <div v-for="smoel in data.default" class="person-overview__item person-overview__item--1">

<article class="person">    <picture class="person__picture">
        <source :srcset="`${smoel.sourceset[0]} 1x`" media="(min-width: 90em)" type="image/jpeg" width="320" height="445">
                    <source :srcset="`${smoel.sourceset[1]} 1x`" media="(min-width: 80em)" type="image/jpeg" width="240" height="334">
                    <source :srcset="`${smoel.sourceset[2]} 1x`" media="(min-width: 64em)" type="image/jpeg" width="214" height="298">
                    <source :srcset="`${smoel.sourceset[3]} 1x`" media="(min-width: 48em)" type="image/jpeg" width="342" height="478">
                    <source :srcset="`${smoel.sourceset[4]} 1x`" media="(min-width: 30em)" type="image/jpeg" width="320" height="448">
                    <source :srcset="`${smoel.sourceset[5]} 1x`" media="(min-width: 22.5em)" type="image/jpeg" width="200" height="280">
                    <source :srcset="`${smoel.sourceset[6]} 1x`" media="(min-width: 0)" type="image/jpeg" width="150" height="210">
        
        <img :src="smoel.photo" :alt="smoel.name" class="person__img" loading="lazy">
        <div class="person__picture_overlay">
        <div class="person__picture_hobby">Hobbies: {{ smoel.name }}</div>
        <div class="person__picture_fact">Leuk Feitje: {{ smoel.role }}</div>
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