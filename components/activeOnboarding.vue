<template>
<div class="flex justify-between h-[88vh] font-[family-name:circular] block">
    <div class="mw-[20vh] w-[80vh] justify-items-center outline">
        <div class="text-5xl weight-200 ml-[40vh]"><slot name="title">Default Title</slot></div>
        <div><slot name="content-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</slot></div>
    </div>
    <div class=" w h-full outline"></div>
    <div><div class="text-5xl">Challenge</div>
    <div><iframe
  width="600"
  height="450"
  style="border:0"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed/v1/place?key=API_KEY
    &q=Space+Needle,Seattle+WA">
</iframe></div>
</div>
</div>
</template>