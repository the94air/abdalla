<script setup lang="ts">
import { defineNuxtLink } from 'nuxt/app'
import type { NuxtXButtonProps } from '@the94air/ui'
import { useXButton } from '@the94air/ui'

const XNuxtLink = defineNuxtLink({
  componentName: 'XNuxtLink',
})

defineOptions({
  inheritAttrs: false,
})

const props = withDefaults(defineProps<NuxtXButtonProps>(), {
  type: 'button',
  variant: 'surface',
})

defineSlots<{
  default(): unknown
}>()

const { base, computedDisabled, computedInteract, computedSize, computedRadius, computedVariant } = useXButton(props)
</script>

<template>
  <XNuxtLink
    v-if="to !== undefined || href !== undefined"
    :target
    :to
    :href
    :external
    :rel
    :no-rel
    :prefetched-class
    :prefetch
    :prefetch-on
    :no-prefetch
    v-bind="$attrs"
    :class="[base, computedDisabled, computedInteract, computedSize, computedRadius, computedVariant]"
  >
    <slot />
  </XNuxtLink>
  <button
    v-else
    :onClick
    :type
    :disabled
    v-bind="$attrs"
    :class="[base, computedDisabled, computedInteract, computedSize, computedRadius, computedVariant]"
  >
    <slot />
  </button>
</template>
