<template>
  <div class="goToBtn">
    <div v-if="internal" class="link" @click="scrollTo">
      <ArrowRightIcon class="arrow-icon" :class="{ animate: animate }" />
      <span>{{ title }}</span>
    </div>
    <a
      v-else
      :href="to"
      class="link"
      target="_blank"
      rel="nofollow noreferrer noopener"
    >
      <ArrowRightIcon class="arrow-icon" :class="{ animate: animate }" />
      <span>{{ title }}</span>
    </a>
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
    animate: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    scrollTo() {
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
        &.animate {
          animation: 0.2s ease;
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
