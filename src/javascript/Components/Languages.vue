<template>
    <div class="langs">
        <div class="container">
            <div class="flex flex-wrap items-center justify-center">
                <div class="w-full">
                    <div class="flex w-full">
                        <div class="w-full">
                            <h2>What I am good at</h2>
                            <div class="flex flex-wrap -mx-2">
                                <Lang v-for="(lang, index) in langs" :key="index" :lang="lang" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Lang from './Lang';

    export default {
        data() {
            return {
                langs: [
                    {
                        id: 1,
                        name: 'HTML5',
                        icon: 'html5',
                        color_top: '#e34f26',
                        color_bottom: '#e6613d',
                    },
                    {
                        id: 2,
                        name: 'CSS3',
                        icon: 'css3-alt',
                        color_top: '#027fd3',
                        color_bottom: '#0270ba',
                    },
                    {
                        id: 3,
                        name: 'Sass',
                        icon: 'sass',
                        color_top: '#d37aa6',
                        color_bottom: '#cd6799',
                    },
                    {
                        id: 4,
                        name: 'JavaScript',
                        icon: 'js',
                        color_top: '#fee854',
                        color_bottom: '#fee53b',
                    },
                    {
                        id: 5,
                        name: 'PHP',
                        icon: 'php',
                        color_top: '#9ca2c9',
                        color_bottom: '#8b92c0',
                    },
                    {
                        id: 6,
                        name: 'Python',
                        icon: 'python',
                        color_top: '#3884c4',
                        color_bottom: '#3277b0',
                    },
                ]
            }
        },
        components: { Lang },
    }
</script>
