<template>
  <div class="goToBtn">
    <div v-if="scrollTo" class="link" @click="scrollToDiv">
      <ArrowRightIcon class="arrow-icon" :class="{ animate: animate }" />
      <span>{{ title }}</span>
    </div>
    <a
      v-if="external"
      :href="to"
      class="link"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <ArrowRightIcon class="arrow-icon" :class="{ animate: animate }" />
      <span>{{ title }}</span>
    </a>
    <nuxt-link v-if="internal" :to="{ name: to }" class="link">
      <ArrowRightIcon class="arrow-icon" :class="{ animate: animate }" />
      <span>{{ title }}</span>
    </nuxt-link>
  </div>
</template>

<script>
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'
export default {
  name: 'NextSection',
  components: {
    ArrowRightIcon,
  },
  props: {
    to: {
      type: String,
      default: '#',
    },
    title: {
      type: String,
      default: 'Discover me',
    },
    internal: {
      type: Boolean,
      default: false,
    },
    external: {
      type: Boolean,
      default: false,
    },
    scrollTo: {
      type: Boolean,
      default: false,
    },
    animate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollToDiv() {
      document.getElementById(this.to).scrollIntoView(true)
    },
  },
}
</script>
<style lang="scss" scoped>
.goToBtn {
  display: block;
  &:hover {
    cursor: pointer;
    .link {
      span {
        color: $blue;
      }
      .arrow-icon {
        animation: 0;
        -webkit-animation: 0;
        &.animate {
          animation: 0;
          -webkit-animation: 0;
          transform: translateX(8px);
        }
        transform: translateX(8px);
      }
    }
  }
  .link {
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: color 0.3s;
    .arrow-icon {
      width: 50px;
      transition: transform 0.2s;
      transition-timing-function: ease;
      &.animate {
        transition: transform 0.2s;
        transition-timing-function: ease;
        animation: 8s ease infinite bounce;
      }
    }
    span {
      font-weight: bold;
      color: $white;
      text-decoration: none;
    }
  }
  &.subtitle {
    .arrow-icon {
      color: $blue;
    }
    span {
      color: $blue;
    }
  }
}
</style>
