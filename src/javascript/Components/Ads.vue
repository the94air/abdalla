<template>
    <aside class="stars">
        <parallax-container>
            <div class="container py-16 md:py-32">
                <div class="flex">
                    <div class="w-full md:w-4/5 mr-auto">
                        <h2>Side Projects</h2>
                        <div class="flex flex-wrap items-center -mx-16">
                            <div v-for="(project, index) in projects" :key="index" class="w-full md:w-1/2 px-16 mb-16">
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
                        sub: 'Your Notes, Simplified.',
                        description: 'A Cloud-based App For Notes, Thoughts, & Ideas. Build Especially For Developers.',
                        link: 'https://codolog.com',
                        image: 'images/codolog.png',
                    },
                    {
                        name: 'Empathy',
                        sub: 'Build A Nice Looking Admin Panel In A Blink.',
                        description: 'A Lightweight Admin Panel Components With Tailwindcss & Vue.',
                        link: 'https://empathy.js.org',
                        image: 'images/empathy.png',
                    },
                    {
                        name: 'Form',
                        sub: 'Single Class CSS Framework For Web Forms.',
                        description: 'A Classic Form Styling With Ease.',
                        link: 'https://form.js.org',
                        image: 'images/form.png',
                    },
                    {
                        name: 'Fun',
                        sub: 'Make Checkboxes & Radios With CSS Only Without Images.',
                        description: 'A Custom Checkboxes & Radios CSS Generator.',
                        link: 'https://fun.js.org',
                        image: 'images/fun.png',
                    },
                ]
            }
        }
    }
</script>
