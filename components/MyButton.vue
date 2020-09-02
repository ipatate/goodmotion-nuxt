<template>
  <nuxt-link
    :to="this.to"
    class="font-bold py-2 px-4 text-white"
    :class="btnClass"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    round: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'primary',
    },
    overclass: {
      type: String,
      default: '',
    },
  },
  computed: {
    btnClass() {
      const classes = [];
      if (this.round) {
        classes.push('rounded-full');
      }
      if (this.type === 'primary') {
        classes.push('bg-blue-500 hover:bg-blue-700');
      } else if (this.type === 'secondary') {
        classes.push('bg-gray-500 hover:bg-gray-700');
      }
      return `${classes.join(' ')} ${this.overclass}`;
    },
  },
};
</script>
