<template>
  <picture>
    <source
      v-if="this.realSize > 640"
      media="(max-width: 640px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=640&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.realSize > 640"
      media="(max-width: 640px)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=640`)"
      type="image/jpeg"
    />
    <source
      v-if="this.realSize > 768"
      media="(max-width: 768)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=768&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.realSize > 768"
      media="(max-width: 768)"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=768`)"
      type="image/jpeg"
    />
    <source
      v-if="this.realSize > 1024"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=1024&webp`)"
      type="image/webp"
    />
    <source
      v-if="this.realSize > 1024"
      :data-srcset="require(`~/uploads/${this.src}?resize&size=1024`)"
      type="image/jpeg"
    />
    <img
      :width="this.realSize"
      loading="lazy"
      :alt="this.alt"
      class="lazyload"
      :src="lowImage"
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
      default: '1280',
    },
    // TODO : set dynamique size
    // sizes: {
    //   type: Array,
    //   default: [640, 768, 1024, 1280],
    // },
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
      return width < +this.size && width < 1280 ? width : +this.size;
    },
    lowImage() {
      return require(`~/uploads/${this.src}?inline&resize&size=100`);
    },
    getImageSrc() {
      switch (true) {
        case this.realSize < 640:
          return require(`~/uploads/${this.src}?resize&size=640`);
          break;
        case this.realSize < 768:
          return require(`~/uploads/${this.src}?resize&size=768`);
          break;
        case this.realSize < 1024:
          return require(`~/uploads/${this.src}?resize&size=1024`);
          break;
        default:
          return require(`~/uploads/${this.src}?resize&size=1280`);
          break;
      }
    },
  },
};
</script>
