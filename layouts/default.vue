<template>
  <div class="max-w-6xl mx-auto">
    <nuxt />
  </div>
</template>

<script>
import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

export default {
  mounted() {
    Prism.highlightAll();
    console.log('hello');
  },
};

</script>
