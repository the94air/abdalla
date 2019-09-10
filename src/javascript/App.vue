<template>
	<div>
		<Header />
		<main>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
		</main>
		<Footer />
	</div>
</template>

<script>
	import Header from './Components/Header';
	import Footer from './Components/Footer';
	import FirstSection from './Components/FirstSection';
	import SecondSection from './Components/SecondSection';
	import ThirdSection from './Components/ThirdSection';
	import FourthSection from './Components/FourthSection';
	import FifthSection from './Components/FifthSection';

	export default {
		components: { Header, Footer, FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection },
	}
</script>