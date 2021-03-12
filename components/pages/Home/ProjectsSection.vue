<template>
  <section class="projects">
    <sectionTitle
      :title="$t('section.project.title')"
      :sub-title="$t('section.project.sub-title')"
      to="projects"
      type="internal"
    />
    <project-list :projects="projects" />
  </section>
</template>

<script>
import ProjectList from '@/components/generic/projects/project-list'
import sectionTitle from '~/components/pages/Home/sectionTitle'
export default {
  name: 'ProjectsSection',
  components: {
    sectionTitle,
    ProjectList,
  },
  props: {
    projects: {
      type: Array,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped></style>
