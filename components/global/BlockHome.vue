<template>
  <div class="flex p-2">
    <div class="flex-1">
      <h2 class="font-sans leading-9 text-4xl text-blue-900">{{ title }}</h2>
      <p class="mt-4 text-base">{{ text }}</p>
      <MyButton overclass="ml-auto">{{ button }}</MyButton>
    </div>
    <div class="p-2 md:w-2/5">
      <rim :src="src" :alt="alt ? alt : title" size="500"></rim>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlockHome',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: null,
    },
    button: {
      type: String,
      required: true,
    },
  },
};
</script>
