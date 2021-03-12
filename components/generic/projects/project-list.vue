<template>
  <div class="project-list row justify-content-center">
    <project
      v-for="(project, index) in projects"
      :key="index"
      :project="project"
      :index="index"
    />
  </div>
</template>

<script>
import project from '~/components/generic/projects/project'
export default {
  name: 'ProjectList',
  components: {
    project,
  },
  props: {
    projects: {
      type: Array,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.project-list {
  margin-top: 5%;
}
</style>
