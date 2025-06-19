<script lang="ts">
import XButton from "@the94air/ui/lib/components/XButton.vue";

export default defineComponent({
  components: { XButton },
  extends: XButton,
});
</script>

<template>
  <XButton
    :class="$attrs.class"
    :style="$attrs.style"
    v-bind="$props"
  >
    <slot />
  </XButton>
</template>
