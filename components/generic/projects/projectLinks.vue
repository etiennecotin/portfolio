<template>
  <div class="links-container d-flex align-items-center">
    <a
      v-if="links.projectLink"
      :href="links.projectLink"
      target="_blank"
      class="link"
    >
      <LinkIcon class="link-icon" />
    </a>
    <a
      v-if="links.playStoreLink"
      :href="links.playStoreLink"
      target="_blank"
      class="link"
    >
      <PlayStoreIcon class="link-icon" />
    </a>
    <a
      v-if="links.appStoreLink"
      :href="links.appStoreLink"
      target="_blank"
      class="link"
    >
      <AppStoreIcon class="link-icon" />
    </a>
  </div>
</template>

<script>
import LinkIcon from '~/components/icons/LinkIcon'
import PlayStoreIcon from '~/components/icons/PlayStoreIcon'
import AppStoreIcon from '~/components/icons/AppStoreIcon'
export default {
  name: 'ProjectLinks',
  components: {
    LinkIcon,
    PlayStoreIcon,
    AppStoreIcon,
  },
  props: {
    links: {
      type: Object,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.links-container {
  margin-top: 5%;
  .link {
    cursor: pointer;
    margin-right: 6%;
    &-icon {
      width: 25px;
      height: 25px;
      transition: 0.2s ease-out;
      &:hover {
        opacity: 0.5;
      }
    }
  }
}
</style>
