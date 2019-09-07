<template>
	<div class="perfect-green py-24 md:py-40 text-white">
		<div class="container">
			<div class="w-full lg:w-8/12 lg:mx-auto">
				<p class="perfect-yellow-text font-title uppercase text-sm mb-4">Step by step</p>
				<div class="mb-16">
					<h2 class="inline-block text-2xl md:text-5xl perfect-green-light perfect-green-dark-border pt-4 pb-1 px-6 rounded shadow-lg">How I Make Websites</h2>
				</div>
				<div class="flex flex-wrap items-center -mx-3">
					<div class="w-full md:w-3/12 px-3">
						<ul class="steps-menu w-full mb-10 md:mb-0">
							<li class="inline-block mr-2 md:block md:mr-0" v-for="button in buttons" :key="'button' + button.id">
								<button class="border-2 rounded-full shadow-lg focus:outline-none focus:shadow-outline py-2 px-4 mb-5" :class="[ selected == button.id ? 'select' : '' ]" @click="select(button.id)"><span v-if="selected == button.id">{{ button.id }}</span>{{ button.text }}</button>
							</li>
						</ul>
					</div>
					<div class="w-full md:w-9/12 px-3">
						<div class="w-full mb-10">
							<transition name="steps-image" mode="out-in">
								<img class="md:h-64 lg:h-80 mx-auto" v-for="button in buttons" :key="'image' + button.id" :src="'/images/' + button.text.toLowerCase() + '.svg'" :alt="button.text + ' image'" v-if="selected == button.id">
							</transition>
						</div>
						<transition name="steps-text" mode="out-in">
							<div v-for="button in buttons" :key="'desc' + button.id" v-if="selected == button.id">
								<div class="bg-white px-6 py-6 shadow-lg text-black rounded-lg">
									<p v-text="button.description"></p>
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
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
					},
					{
						id: 2,
						text: 'Architecture',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
					},
					{
						id: 3,
						text: 'Design',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
					},
					{
						id: 4,
						text: 'Development',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
					},
					{
						id: 5,
						text: 'Testing',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
					},
					{
						id: 6,
						text: 'Deployment',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
					},
					{
						id: 7,
						text: 'SEO',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
					},
					{
						id: 8,
						text: 'Maintenance',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, ad, obcaecati. Reprehenderit vitae, laboriosam nihil dolores esse odio ipsum quia dolore ex molestias quisquam enim ut, delectus quasi minima totam.'
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