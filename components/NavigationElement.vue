<template>
  <nuxt-link :to="`/${value.slug !== '/' ? value.slug : ''}`">{{
    value.label || value.title
  }}</nuxt-link>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
};
</script>
