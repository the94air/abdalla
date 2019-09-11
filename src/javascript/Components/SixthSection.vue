<template>
    <div class="bg-img-red-dark-2 py-24 md:py-40 text-white">
        <div class="container">
            <div class="full-width md:w-8/12 md:mx-auto">
                <p class="perfect-yellow-text font-title uppercase text-sm mb-4" data-aos="fade" data-aos-duration="250">Wanna say hi?</p>
                <div class="mb-10" data-aos="zoom-in-right" data-aos-delay="250" data-aos-duration="250">
                    <h2 class="inline-block text-2xl md:text-5xl perfect-red-light-light perfect-red-dark-dark-border pt-4 pb-1 px-6 rounded shadow-lg">Connect</h2>
                </div>
                <div class="md:w-8/12 md:mr-auto" data-aos="fade" data-aos-duration="250" data-aos-delay="500" itemscope itemtype="http://schema.org/Person">
                    <p itemprop="description" class="text-xl leading-relaxed mb-6">Talk or ask me anything, I am partially available on Twitter but you can DM me on Discord for a faster response. Throw me a message if you need any services or consultations. I am also open to opensource projects if you need help.</p>
                    <div class="flex -mx-2">
                        <div class="w-full md:w-1/2 px-2 mb-2" data-aos="zoom-in" data-aos-duration="150">
                            <a class="block w-full twitter-button text-lg text-white hover:text-white rounded shadow-lg focus:outline-none focus:shadow-outline py-4 px-6 mb-3" target="_blank" href="https://twitter.com/abdalla__arbab">
                                <Fa class="fa-fw twitter-color" :icon="[ 'fab', 'twitter' ]" />
                                Twitter
                            </a>
                        </div>
                        <div class="w-full md:w-1/2 px-2 mb-2" data-aos="zoom-in" data-aos-duration="150" data-aos-delay="150">
                            <a class="block w-full discord-button text-lg text-white hover:text-white rounded shadow-lg focus:outline-none focus:shadow-outline py-4 px-6 mb-3" target="_blank" href="https://discord.gg/rXhpxgC">
                                <Fa class="fa-fw discord-color" :icon="[ 'fab', 'discord' ]" />
                                Discord
                            </a>
                            <p class="discord-id"><small>ID: the94air#2324</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
