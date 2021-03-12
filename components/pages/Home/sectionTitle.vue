<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
    <nextSection
      v-if="subTitle && type === 'scrollTo'"
      :to="to"
      :title="subTitle"
      class="subtitle"
      scroll-to
    />
    <nextSection
      v-if="subTitle && type === 'external'"
      :to="to"
      :title="subTitle"
      class="subtitle"
      external
    />
    <nextSection
      v-if="subTitle && type === 'internal'"
      :to="to"
      :title="subTitle"
      class="subtitle"
      internal
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
    to: {
      type: String,
      default: '#',
    },
    type: {
      type: String,
      default: '',
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
