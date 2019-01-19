<template>
    <aside class="stars">
        <parallax-container>
            <div class="container py-20">
                <div class="flex">
                    <div class="w-full md:w-4/5 ml-auto">
                        <parallax-element :parallaxStrength="-5" :type="'translation'">
                            <h2>Side projects</h2>
                        </parallax-element>
                        <div class="flex flex-wrap items-center -mx-16">
                            <div class="w-full md:w-1/2 px-16 mb-8 md:mb-0">
                                <a target="_blank" href="https://codolog.com">
                                    <parallax-element :parallaxStrength="-5" :type="'translation'">
                                        <div class="star">
                                            <div class="star-img">
                                                <img src="images/codolog.png" alt="Codolog" title="Codolog">
                                            </div>
                                            <div class="star-content">
                                                <h3>Codolog</h3>
                                                <p class="sub-title">Your notes, simplified.</p>
                                                <p>A cloud-based app for saving notes, thoughts, and ideas. Build especially for developers.</p>
                                            </div>
                                        </div>
                                    </parallax-element>
                                </a>
                            </div>
                            <div class="w-full md:w-1/2 px-16">
                                <a target="_blank" href="https://larastrator.js.org/">
                                    <parallax-element :parallaxStrength="-10" :type="'translation'">
                                        <div class="star">
                                            <div class="star-img">
                                                <img src="images/larastrator.png" alt="Larastrator" title="Larastrator">
                                            </div>
                                            <div class="star-content">
                                                <h3>Larastrator</h3>
                                                <p class="sub-title">Build a nice looking admin panel in a blink.</p>
                                                <p>A Lightweight admin panel components with Tailwindcss and Vue.</p>
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
