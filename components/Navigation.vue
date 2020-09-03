<template>
  <nav>
    <ul class="flex">
      <li class="mx-2" v-for="p in navigation" :key="p.path">
        <navigation-element :value="p"></navigation-element>
        <ul class="ml-4" v-if="p.childrens">
          <li v-for="c in p.childrens" :key="c.path">
            <navigation-element :value="c"></navigation-element>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import createNavigation from '../helpers/create-navigation';

export default {
  name: 'navigation',
  data() {
    return {
      pages: [],
      navigation: [],
    };
  },
  async fetch() {
    this.pages = await this.$content('pages', {deep: true})
      // .where({slug: {$ne: '/'}})
      .fetch();
    this.navigation = createNavigation(this.pages);
  },
};
</script>
