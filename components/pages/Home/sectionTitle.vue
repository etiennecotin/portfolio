<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <nextSection
      v-if="subTitle"
      to="#business"
      :title="subTitle"
      class="subtitle"
    />
  </div>
</template>

<script>
import nextSection from '~/components/generic/nextSection'
export default {
  name: 'SectionTitle',
  components: {
    nextSection,
  },
  props: {
    title: {
      type: String,
      default: 'Section title',
    },
    subTitle: {
      type: String,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.section-title {
  h2 {
    font-family: $serif-font-family;
    font-size: 4em;
    font-weight: bold;
  }
  .subtitle {
    margin-top: 1%;
  }
}
</style>
