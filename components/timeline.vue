<!--
hieronder een voorbeeld van hoe dit component gebruikt kan worden in een .vue bestand
<Timeline>
    <template #title>
      Eerste dag
    </template>
    <template #content>
      klaar voor je eerste dag? lees hier meer
    </template>
    <template #link>
      <a href="http://localhost:3000/onboarding">Door naar de eerste onboarding module</a>
    </template>
  </Timeline> 
  -->
<template>
<div class="timeline font-[family-name:circular]">
  <div class="container right">
    <div class="content">
      <div class="text-4xl title"><slot name="title"> Roep "template #title" aan in het timeline blokje om dit aan te passen</slot></div>
      <p><slot name="content"> Roep "template #content" aan in het timeline blokje om dit aan te passen</slot></p>
      <i class="link_timeline flex mt-3 mb-5"><slot name="link">vul hier een a href met een link in </slot><UIcon name="i-lucide-arrow-right" class="size-5 mt-0.5"/></i>
    </div>
  </div>
</div>
</template>
<style>
* {
  box-sizing: border-box;
}

body {
  background-color: #474e5d;
  font-family: Helvetica, sans-serif;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  width: 900px;
  margin: 0 auto;
}
.title{
    color: #ff0953;
}
.link_timeline{
    color: #ff0953;
}
/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #ff0953;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -6.25px;
}

/* Container around content */
.container {

  position: relative;
  background-color: inherit;
  width: 80%;
}

/* The circles on the timeline */
.container::after {
  content: '';
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid #ff0953;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.content {
  padding: 10px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  color: #615E5A;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
  left: 31px;
  }
  
  /* Full-width containers */
  .container {
  width: 100%;
  padding-left: 70px;
  padding-right: 25px;
  }
  
  /* Make sure that all arrows are pointing leftwards */
  .container::before {
  left: 60px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after, .right::after {
  left: 15px;
  }
  
  .right {
  left: 0%;
  }
}
</style>