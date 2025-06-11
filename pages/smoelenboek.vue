<script setup lang="ts">
definePageMeta({
  middleware: ['authenticated'],
})
import * as data from '../assets/smoelenboekUsers/smoelen.json'
const { user, clear: clearSession } = useUserSession()

</script>
<template>
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