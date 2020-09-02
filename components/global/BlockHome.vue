<template>
  <div
    class="flex flex-col-reverse md:flex-row p-1 md:p-3 border-gray-400 border-2"
  >
    <div class="flex-1 flex flex-col px-2 md:px-6 py-4">
      <h2 class="font-sans leading-9 text-4xl test">{{ title }}</h2>
      <p class="my-4 text-base">
        <slot></slot>
      </p>
      <div class="pt-4 flex justify-end">
        <MyButton :to="ctaTarget">{{ ctaLabel }}</MyButton>
      </div>
    </div>
    <div class="p-2 w-full md:w-2/5">
      <rim :src="imgSrc" :alt="imgAlt ? imgAlt : title" size="700"></rim>
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
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: null,
    },
    ctaLabel: {
      type: String,
      required: true,
    },
    ctaTarget: {
      type: String,
      default: null,
    },
  },
};
</script>
