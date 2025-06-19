<script setup lang="ts">
const colorMode = useColorMode();

const link = computed(() => {
  return colorMode.value === "light"
    ? [
        {
          rel: "shortcut icon",
          href: "/favicon.ico?v=4.1",
        },
      ]
    : [
        {
          rel: "shortcut icon",
          href: "/favicon-dark.ico?v=4.1",
        },
      ];
});

useHead({
  link,
});

useSeoMeta({
  title: "This website has a new home",
  ogSiteName: "This website has a new home",
  ogType: "website",
});
</script>

<template>
  <Html class="h-full">
    <Body class="h-full dark:bg-surface dark:text-white">
      <main class="h-full flex items-center justify-center px-2">
        <div class="text-center">
          <h1 class="mb-4 mb-4 max-w-lg text-4xl 3xl:text-6xl md:text-5xl">
            This website has a new home
          </h1>
          <div class="mb-2">
            <ButtonLink href="https://abdalla.sd">
              Visit new website
            </ButtonLink>
          </div>
          <div>
            <p class="text-xs">
              <a
                class="text-gray-400"
                href="https://abdalla.sd/"
                >https://abdalla.sd/
              </a>
            </p>
          </div>
        </div>
      </main>
    </Body>
  </Html>
</template>
