<template>
    <div class="intro">
        <div class="background">
            <parallax-container>
                <div class="container">
                    <div class="flex items-center justify-center md:py-48">
                        <div class="w-full">
                            <div class="flex w-full">
                                <div class="w-full md:w-1/2 mr-auto">
                                    <parallax-element :parallaxStrength="-17" :type="'translation'">
                                        <div class="shape-2"></div>
                                    </parallax-element>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </parallax-container>
        </div>
        <div class="forground">
            <About />
            <Languages />
        </div>
    </div>
</template>

<script>
    import About from '../Components/About';
    import Languages from '../Components/Languages';

    export default {
        components: { About, Languages },
    }
</script>
