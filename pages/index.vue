<template>
  <article>
    <h1>{{ page.title }}</h1>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  name: 'homepage',
  head() {
    return {
      title: this.page.title,
    };
  },
  data() {
    return {
      page: {title: ''},
    };
  },
  async fetch() {
    this.page = await this.$content('home').fetch();
  },
};
</script>
