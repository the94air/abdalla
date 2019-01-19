<template>
    <div class="about">
        <parallax-container>
            <div class="container py-24">
                <div class="flex items-center justify-center">
                    <div class="w-full">
                        <div class="flex w-full">
                            <div class="w-full md:w-4/5 ml-auto">
                                <parallax-element :parallaxStrength="-5" :type="'translation'">
                                    <h2>About</h2>
                                </parallax-element>
                                <parallax-element :parallaxStrength="-5" :type="'translation'">
                                    <p class="about-text">I am a senior developer. I wrote my first line of code 5 years ago. I focus on designing, coding, deploying web applications. Most of the time, I build PHP Websites and admin panels with Laravel Framework with the help of CSS and JavaScript preprocessors like Webpack. My favorite JavaScript Framework is Vue. Usually, I am used to working with APIs whenever it needed because it makes our life more easier and more connected.</p>
                                </parallax-element>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="background py-24">
                    <parallax-element :parallaxStrength="-80" :type="'translation'">
                        <div class="flex items-center justify-center">
                            <div class="w-full">
                                <div class="flex w-full">
                                    <div class="w-full md:w-1/3 mr-auto">
                                        <div class="shape-2"></div>
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
