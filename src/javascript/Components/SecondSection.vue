<template>
	<div class="perfect-green py-24 md:py-40 text-white">
		<div class="container">
			<div class="w-full lg:w-10/12 lg:mx-auto">
				<p class="perfect-yellow-text font-title uppercase text-sm mb-4" data-aos="fade" data-aos-anchor-placement="center-center" data-aos-duration="250">Step by step</p>
				<div class="mb-16" data-aos="zoom-in-right" data-aos-anchor-placement="center-center" data-aos-delay="250" data-aos-duration="250">
					<h2 class="inline-block text-2xl md:text-5xl perfect-green-light perfect-green-dark-border pt-4 pb-1 px-6 rounded shadow-lg">How I Make Websites</h2>
				</div>
				<div class="flex flex-wrap items-start -mx-3">
					<div class="w-full md:w-3/12 px-3 md:mt-10">
						<ul class="steps-menu w-full mb-10 md:mb-0" data-aos="fade-left" data-aos-duration="150" data-aos-delay="500">
							<li class="inline-block mr-2 md:block md:mr-0" v-for="button in buttons" :key="'button' + button.id">
								<button class="border-2 rounded-full shadow-lg focus:outline-none focus:shadow-outline py-2 px-4 mb-5" :class="[ selected == button.id ? 'select' : '' ]" @click="select(button.id)"><span v-if="selected == button.id">{{ button.id }}</span>{{ button.text }}</button>
							</li>
						</ul>
					</div>
					<div class="w-full md:w-9/12 px-3" data-aos="fade" data-aos-delay="650" data-aos-duration="250">
						<div class="w-full mb-10">
							<transition name="steps-image" mode="out-in">
								<img class="md:h-64 mx-auto" v-for="button in buttons" :key="'image' + button.id" :src="'/images/' + button.text.toLowerCase() + '.svg'" :alt="button.text + ' image'" v-if="selected == button.id">
							</transition>
						</div>
						<transition name="steps-text" mode="out-in">
							<div v-for="button in buttons" :key="'desc' + button.id" v-if="selected == button.id">
								<div class="bg-white px-6 py-6 shadow-lg text-black rounded-lg mb-4">
									<h3 class="text-lg mb-2" v-text="button.text"></h3>
									<p v-text="button.description"></p>
								</div>
								<div class="bg-white px-6 py-6 shadow-lg text-black rounded-lg">
									<div class="flex items-start">
										<div class="mr-6">
											<span class="block h-8 leading-none text-6xl text-red-300">&ldquo;</span>
										</div>
										<div>
											<p class="text-lg italic" v-text="button.quote"></p>
										</div>
									</div>
								</div>
							</div>
						</transition>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: 1,
				buttons: [
					{
						id: 1,
						text: 'Content',
						description: 'First, I collect all the information needed to make the content like Text, Photos, Videos, Sketchapp files, Photoshop files ...etc. And then I make a list of all the required features on the website. After that, the client fills a small review to show us what exact kind of website he needs.',
					 	quote: 'Content is the most important part of the process. After all, that\'s why we make websites.'
					},
					{
						id: 2,
						text: 'Architecture',
						description: 'After that, I process all the information to decide what technologies can work well with the client needs. After that, I start making the system architecture includes the number of pages, Site map, menus structure, Database fields, Emails, and SEO.',
						quote: 'Before you succeed at something, you need a plan.'
					},
					{
						id: 3,
						text: 'Design',
						description: 'When all the information is ready, I start making a full-featured design of all the website interfaces based on the client requirements and modify the new design order by the client request.',
						quote: 'Making a website is like building a house. You need a map before you start.'
					},
					{
						id: 4,
						text: 'Development',
						description: 'In this step, I start making the front-end and the back-end using my coding skills and different kinds of technologies to full-fill all the design requirements.',
						quote: 'Quality, tasking, and precision are most when it comes to modern web development.'
					},
					{
						id: 5,
						text: 'Testing',
						description: 'After building the website from the ground up then comes the testing. In this step, we will test the browser compatibility, UX/UI. Then comes the back-end testing to provide full protection to all the data workflow and to provide a fast and informational user experience.',
						quote: 'It\'s not a software if not tested.'
					},
					{
						id: 6,
						text: 'Deployment',
						description: 'At this point, the website is ready for online publishing. We use automation tools to deploy websites from Source control to the website server and later to publish the website after any code modifications.',
						quote: 'Zero downtime deployments are a good choice for publishing your site.'
					},
					{
						id: 7,
						text: 'SEO',
						description: 'And then we put the website to the search engines for everyone to see. This is so important because that is how most people are going to know about your site.',
						quote: 'Being in the top results of a search engine is your open doors to the world.'
					},
					{
						id: 8,
						text: 'Maintenance',
						description: 'Every website should be updated to defend most kinds of security issues and to monitor the server performance to make sure it can handle the amount of your website visitor without any issues.',
						quote: 'A website is a living thing. It needs updates and maintenance so it doesn\'t die.'
					},
				]
			}
		},
		methods: {
			select(id) {
				this.selected = id;
			}
		}
	}
</script>

<style>
	.steps-image-enter-active, .steps-image-leave-active {
		transition: opacity ease 200ms, transform ease 150ms;
	}
	.steps-image-enter, .steps-image-leave-to {
		transform: translate(30px, -30px);
		opacity: 0;
	}
	.steps-text-enter-active, .steps-text-leave-active {
		transition: opacity ease 200ms, transform ease 150ms;
	}
	.steps-text-enter, .steps-text-leave-to {
		transform: translate(-30px, 30px);
		opacity: 0;
	}
</style>