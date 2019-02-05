<template>
    <header class="header">
        <div class="background">
            <parallax-container>
                <div class="container">
                    <div class="flex items-center justify-center md:py-32">
                        <div class="w-full">
                            <div class="flex w-full">
                                <div class="w-full md:w-1/2 ml-auto">
                                    <parallax-element :parallaxStrength="-17" :type="'translation'">
                                        <div class="shape-1"></div>
                                    </parallax-element>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </parallax-container>
        </div>
        <div class="forground">
            <div class="container">
                <div class="py-16 md:py-64">
                    <div class="md:flex md:items-center md:justify-center">
                        <div>
                            <h1>Abdalla Arbab</h1>
                            <p class="sub-title">A Full Stack Developer, Websites Designer, and Admin panels specialist.</p>
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import Menu from './Menu';

    export default {
        components: { Menu },
    }
</script>
