<template>
  <div class="link">
    <nuxt-link v-if="internal" :to="target">
      {{ title }}
    </nuxt-link>
    <a :href="target" rel="noopener noreferrer nofollow">
      {{ title }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Link',
  data() {
    return {
      title: '',
      internal: true,
      target: 'home',
      icon: 'linkedin',
    }
  },
}
</script>
<style lang="scss" scoped></style>
