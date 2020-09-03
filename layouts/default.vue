<template>
  <div class="max-w-6xl mx-auto">
    <navigation></navigation>
    <nuxt />
  </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

export default {
  mounted() {
    Prism.highlightAll();
  },
};
</script>
