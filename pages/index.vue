<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p>{{ page.readingTime }}</p>
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
  async asyncData({$content}) {
    const page = await $content('pages/index').fetch();
    return {page};
  },
};
</script>
