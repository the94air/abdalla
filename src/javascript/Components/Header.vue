<template>
    <header class="header">
        <parallax-container>
            <div class="container">
                <div class="flex items-center justify-center h-screen">
                    <div>
                        <parallax-element :parallaxStrength="-10" :type="'translation'">
                            <h1>Abdalla Arbab</h1>
                        </parallax-element>
                        <parallax-element :parallaxStrength="-5" :type="'translation'">
                            <p class="sub-title">A Full Stack Developer, Websites Designer, and Admin panels specialist.</p>
                        </parallax-element>
                        <parallax-element :parallaxStrength="-3" :type="'translation'">
                            <Menu />
                        </parallax-element>
                    </div>
                </div>
                <div class="background">
                    <parallax-element :parallaxStrength="-80" :type="'translation'">
                        <div class="flex items-center justify-center h-screen">
                            <div class="w-full">
                                <div class="flex w-full">
                                    <div class="w-full md:w-1/3 ml-auto">
                                        <div class="shape-1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </parallax-element>
                </div>
            </div>
        </parallax-container>
    </header>
</template>

<script>
    import Menu from './Menu';

    export default {
        components: { Menu },
    }
</script>
