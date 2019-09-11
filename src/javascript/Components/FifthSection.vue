<template>
	<parallax-container>
		<div class="perfect-green py-24 md:py-40 text-white">
			<div class="container">
				<div class="w-full lg:w-8/12 lg:mx-auto">
					<p class="perfect-yellow-text font-title uppercase text-sm mb-4" data-aos="fade" data-aos-duration="250">Open source and personal tools</p>
					<div class="mb-16" data-aos="zoom-in-right" data-aos-delay="250" data-aos-duration="250">
						<h2 class="inline-block text-2xl md:text-5xl perfect-green-light perfect-green-dark-border pt-4 pb-1 px-6 rounded shadow-lg">Projects</h2>
					</div>
				</div>
				<div class="w-full lg:w-10/12 lg:mx-auto">
					<div class="flex flex-wrap -mx-3">
						<div class="w-full md:w-1/3 px-3 mb-10" v-for="(project, index) in projects" :key="project.id" data-aos="zoom-in" data-aos-duration="150" :data-aos-delay="500 + ( project.id * 100 )">
							<a target="_blank" :href="project.link" class="text-black hover:text-black">
								<parallax-element :parallaxStrength="-5 * (index + 1)" :type="'translation'">
									<div class="project-box p-4 md:p-10 shadow-lg rounded-lg">
										<div v-if="project.image">
											<img class="max-w-xxs mx-auto mb-4" :src="project.image" :alt="project.name + ' icon'">
										</div>
										<h3 class="text-title mb-4 text-center lg:text-4xl" v-text="project.name"></h3>
										<p class="mb-2 text-gray-900 italic" v-text="project.sub"></p>
										<p class="text-gray-700" v-text="project.description"></p>
									</div>
								</parallax-element>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</parallax-container>
</template>

<script>
	export default {
		data() {
			return {
				projects: [
					{
						id: 1,
                        name: 'Codolog',
                        sub: 'Your Notes, Simplified',
                        description: 'A Cloud-based App For Notes, Thoughts, & Ideas. Build Especially For Developers',
                        link: 'https://codolog.herokuapp.com',
                        image: 'images/codolog.png',
                    },
                    {
                    	id: 2,
                        name: 'Larastrator',
                        sub: 'Build A Nice Looking Admin Panel In A Blink',
                        description: 'A Lightweight Admin Panel Components With Tailwindcss & Vue',
                        link: 'https://github.com/the94air/larastrator',
                        image: 'images/larastrator.png',
                    },
                    {
                    	id: 3,
                        name: 'Form',
                        sub: 'Single Class CSS Framework For Web Forms',
                        description: 'A Classic Form Styling With Ease',
                        link: 'https://form.js.org',
                        image: 'images/form.png',
                    },
                    {
                    	id: 4,
                        name: 'Bun',
                        sub: 'Make Checkboxes & Radios With CSS Only Without Images',
                        description: 'A Custom Checkboxes & Radios CSS Generator',
                        link: 'https://bun.js.org',
                        image: 'images/bun.png',
                    },
                    {
                    	id: 5,
                        name: 'Landio',
                        sub: 'Just Like A Feather',
                        description: 'The Lightweight Landing Page With Tailwindcss',
                        link: 'https://landio.netlify.com/',
                        image: 'images/landio.png',
                    },
				]
			}
		},
	}
</script>
