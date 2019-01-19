<template>
    <div class="langs">
        <parallax-container>
            <div class="container py-20">
                <div class="flex items-center justify-center">
                    <div class="w-full">
                        <div class="flex w-full">
                            <div class="w-full md:w-4/5 ml-auto">
                                <parallax-element :parallaxStrength="-5" :type="'translation'">
                                    <h2>What I am good at</h2>
                                </parallax-element>
                                <parallax-element :parallaxStrength="-5" :type="'translation'">
                                    <div class="flex flex-wrap -mx-2">
                                        <Lang v-for="(lang, index) in langs" :key="index" :lang="lang" />
                                    </div>
                                </parallax-element>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="background py-20">
                    <parallax-element :parallaxStrength="-80" :type="'translation'">
                        <div class="flex items-center justify-center">
                            <div class="w-full">
                                <div class="flex w-full">
                                    <div class="w-full md:w-4/5 mr-auto ml-auto">
                                        <div class="shape-3"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </parallax-element>
                </div>
            </div>
        </parallax-container>
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
                        name: 'SASS',
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
