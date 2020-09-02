<template>
  <picture>
    <source
      v-if="this.size > 510"
      media="(max-width: 500px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=500&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.size > 510"
      media="(max-width: 500px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=500`)"
      type="image/jpeg"
    />
    <source
      v-if="this.size > 790"
      media="(max-width: 780px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=780&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.size > 790"
      media="(max-width: 780px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=780`)"
      type="image/jpeg"
    />
    <source
      v-if="this.size > 1190"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=1180&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.size > 1190"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=1180`)"
      type="image/jpeg"
    />
    <img
      :width="this.size"
      loading="lazy"
      :alt="this.alt"
      class="lazyload"
      :data-src="getImageSrc"
    />
  </picture>
</template>

<script>
export default {
  name: 'rim',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 1200,
    },
  },
  computed: {
    getImageSrc() {
      switch (true) {
        case this.size < 510:
          return require(`~/uploads/${this.src}?resize&size=500`);
          break;
        case this.size < 790:
          return require(`~/uploads/${this.src}?resize&size=780`);
          break;
        case this.size < 1080:
          return require(`~/uploads/${this.src}?resize&size=1070`);
          break;
        default:
          return require(`~/uploads/${this.src}?resize&size=1200`);
          break;
      }
    },
  },
};
</script>
