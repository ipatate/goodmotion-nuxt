<template>
  <picture>
    <source
      v-if="this.realSize > 510"
      media="(max-width: 500px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=500&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.realSize > 510"
      media="(max-width: 500px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=500`)"
      type="image/jpeg"
    />
    <source
      v-if="this.realSize > 790"
      media="(max-width: 780px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=780&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.realSize > 790"
      media="(max-width: 780px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=780`)"
      type="image/jpeg"
    />
    <source
      v-if="this.realSize > 1190"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=1180&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.realSize > 1190"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=1180`)"
      type="image/jpeg"
    />
    <img
      :width="this.realSize"
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
      type: String,
      default: '1200',
    },
  },
  mounted() {
    // load original img
    this.img = require(`~/uploads/${this.src}`);
  },
  data() {
    return {
      img: null,
    };
  },
  computed: {
    // get the original size or size props
    realSize() {
      if (!this.img) return;
      const {width} = this.img;
      return width < this.size ? width : this.size;
    },
    getImageSrc() {
      switch (true) {
        case this.realSize < 510:
          return require(`~/uploads/${this.src}?resize&size=500`);
          break;
        case this.realSize < 790:
          return require(`~/uploads/${this.src}?resize&size=780`);
          break;
        case this.realSize < 1080:
          return require(`~/uploads/${this.src}?resize&size=170`);
          break;
        default:
          return require(`~/uploads/${this.src}?resize&size=1200`);
          break;
      }
    },
  },
};
</script>
