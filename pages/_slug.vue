<template>
  <article>
    <h1>{{ page.title }}</h1>
    <p>{{ page.readingTime }}</p>
    <nuxt-content :document="page" />
  </article>
</template>

<script>
export default {
  name: 'page',
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
  async asyncData({params, error, $content}) {
    const slug = params.slug;
    const page = await $content('pages', {deep: true})
      .where({slug})
      .limit(1)
      .fetch();
    if (page.length === 0) {
      error({statusCode: 404, message: 'Page not found'});
    }
    return {page: page[0]};
  },
};
</script>
