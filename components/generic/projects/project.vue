<template>
  <div
    class="project row col-8"
    :class="{ 'align-right flex-row-reverse': index % 2 === 1 }"
  >
    <datocms-image
      :data="project.projectPicture.responsiveImage"
      class="project-img"
    />
    <div class="project-infos col-5 d-flex flex-column justify-content-center">
      <h3>{{ project.projectName }}</h3>
      <p>{{ project.shortDescription }}</p>
      <projectLinks :links="links" />
    </div>
  </div>
</template>

<script>
import { Image } from 'vue-datocms'
import projectLinks from '~/components/generic/projects/projectLinks'
export default {
  name: 'Project',
  components: {
    'datocms-image': Image,
    projectLinks,
  },
  props: {
    index: {
      default: null,
      type: Number,
    },
    project: {
      type: Object,
      default: null,
    },
  },
  computed: {
    links() {
      return {
        projectLink: this.project.projectLink,
        playStoreLink: this.project.playStoreLink,
        appStoreLink: this.project.appStoreLink,
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.project {
  margin: 2% 0;
  &.align-right {
    flex-direction: row-reverse;
  }
  &-img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
  &-infos {
    padding-left: 5%;
    h3 {
      font-family: $serif-font-family;
      font-size: 2rem;
      margin-bottom: 4%;
      font-weight: bold;
    }
    p {
      font-weight: 300;
    }
  }
}
</style>
