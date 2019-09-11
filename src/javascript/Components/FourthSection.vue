<template>
	<parallax-container>
		<div class="py-24 md:py-40 text-white">
			<div class="container">
				<div class="full-width md:w-8/12 md:mx-auto">
					<p class="perfect-yellow-text font-title uppercase text-sm mb-4" data-aos="fade" data-aos-duration="250">What i use?</p>
					<div class="mb-16" data-aos="zoom-in-right" data-aos-delay="250" data-aos-duration="250">
						<h2 class="inline-block text-black text-2xl md:text-5xl perfect-yellow perfect-yellow-border pt-4 pb-1 px-6 rounded shadow-lg">Tools & Technologies</h2>
					</div>
				</div>
				<div class="flex flex-wrap -mx-2">
					<div class="w-1/3 sm:w-1/5 md:w-2/12 lg:w-1/12 px-2 mb-6" v-for="icon in icons" :key="icon.id" data-aos="fade" :data-aos-delay="500 + ( icon.id * 50 )">
						<parallax-element :parallaxStrength="getRandom(0.5, 2.1)" :type="'translation'">
							<div class="mb-3" v-html="icon.obj.svg" :style="{ fill: '#' + icon.obj.hex }"></div>
							<p class="text-black text-center" v-text="icon.obj.title"></p>
						</parallax-element>
					</div>
				</div>
			</div>
		</div>
	</parallax-container>
</template>

<script>
	import _ from 'lodash';
	let simpleIcons = require('simple-icons');

	export default {
		data() {
			return {
				icons: [
					{
						id: 1,
						obj: simpleIcons.get('HTML5')
					},
					{
						id: 2,
						obj: simpleIcons.get('CSS3')
					},
					{
						id: 3,
						obj: simpleIcons.get('Sass')
					},
					{
						id: 4,
						obj: simpleIcons.get('JavaScript')
					},
					{
						id: 5,
						obj: simpleIcons.get('Bootstrap')
					},
					{
						id: 6,
						obj: simpleIcons.get('Vue.js')
					},
					{
						id: 7,
						obj: simpleIcons.get('React')
					},
					{
						id: 8,
						obj: simpleIcons.get('NPM')
					},
					{
						id: 9,
						obj: simpleIcons.get('Node.js')
					},
					{
						id: 10,
						obj: simpleIcons.get('PHP')
					},
					{
						id: 11,
						obj: simpleIcons.get('composer')
					},
					{
						id: 12,
						obj: simpleIcons.get('Laravel')
					},
					{
						id: 13,
						obj: simpleIcons.get('Laravel Horizon')
					},
					
					{
						id: 14,
						obj: simpleIcons.get('Git')
					},
					{
						id: 15,
						obj: simpleIcons.get('Webpack')
					},
					{
						id: 16,
						obj: simpleIcons.get('MySQL')
					},
					{
						id: 17,
						obj: simpleIcons.get('Shopify')
					},
					{
						id: 18,
						obj: simpleIcons.get('Nginx')
					},
					{
						id: 19,
						obj: simpleIcons.get('Postman')
					},
					{
						id: 20,
						obj: simpleIcons.get('Let’s Encrypt')
					},
					{
						id: 21,
						obj: simpleIcons.get('Debian')
					},
					{
						id: 22,
						obj: simpleIcons.get('Ubuntu')
					},
					{
						id: 23,
						obj: simpleIcons.get('Apple')
					},
					{
						id: 24,
						obj: simpleIcons.get('Windows')
					},
				]
			}
		},
		methods: {
			getRandom(min, max) {
				return _.random(min, max);
			}
		}
	}
</script>