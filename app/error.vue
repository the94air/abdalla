<script setup lang="ts">
import type { NuxtError } from 'nuxt/app'

const { error } = defineProps<{ error: NuxtError }>()

function handelError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <Body class="dark:bg-surface dark:text-white">
    <main class="md:h-[70vh]">
      <div class="h-full py-20 container lg:py-4">
        <div class="h-full items-center justify-center md:flex">
          <div class="text-center">
            <div class="mb-6">
              <h1 class="text-[4rem] lg:text-[8rem] lg:leading-tight">
                {{ error.status }}
              </h1>
              <p class="mb-3 text-lg leading-relaxed">
                {{
                  error.status === 404
                    ? "Huh, I can't find that page, sorry :("
                    : "There was an issue showing you this page, sorry"
                }}
              </p>
              <p
                v-if="error.message"
                class="mt-1 max-w-sm text-sm font-mono"
              >
                <code
                  class="border border-gray-300 rounded-md bg-gray-50 px-2 pb-1 pt-1.6 dark:border-gray-700 dark:bg-gray-900"
                >
                  {{ error.message }}
                </code>
              </p>
            </div>
            <div>
              <XButton
                size="xl"
                @click="handelError"
              >
                Go Home
              </XButton>
            </div>
          </div>
        </div>
      </div>
    </main>
  </Body>
</template>
