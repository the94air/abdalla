<template>
    <aside class="stars">
        <parallax-container>
            <div class="container py-16 md:py-32">
                <div class="flex">
                    <div class="w-full md:w-4/5 mr-auto">
                        <h2>Side Projects</h2>
                        <div class="flex flex-wrap items-center -mx-16">
                            <div v-for="(project, index) in projects" :key="index" class="w-full md:w-1/2 px-16" :class="[ projects.length == index + 1 ? '' : 'mb-8 md:mb-0' ]">
                                <a target="_blank" :href="project.link">
                                    <parallax-element :parallaxStrength="-5 * (index + 1)" :type="'translation'">
                                        <div class="star">
                                            <div class="star-img">
                                                <img :src="project.image" :alt="project.name" :title="project.name">
                                            </div>
                                            <div class="star-content">
                                                <h3>{{ project.name }}</h3>
                                                <p class="sub-title">{{ project.sub }}</p>
                                                <p>{{ project.description }}</p>
                                            </div>
                                            <div class="star-icon">
                                                <Fa :icon="[ 'fas', 'external-link-square-alt' ]" />
                                            </div>
                                        </div>
                                    </parallax-element>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </parallax-container>
    </aside>
</template>

<script>
    export default {
        data() {
            return {
                projects: [
                    {
                        name: 'Codolog',
                        sub: 'Your notes, simplified.',
                        description: 'A cloud-based app for saving notes, thoughts, and ideas. Build especially for developers.',
                        link: 'https://codolog.com',
                        image: 'images/codolog.png',
                    },
                    {
                        name: 'Larastrator',
                        sub: 'Build a nice looking admin panel in a blink.',
                        description: 'A Lightweight admin panel components with Tailwindcss and Vue.',
                        link: 'https://codolog.com',
                        image: 'images/larastrator.png',
                    },
                ]
            }
        }
    }
</script>
