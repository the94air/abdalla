<template>
    <div>
        <Header />
        <Intro />
        <Ads />
        <Footer />
    </div>
</template>

<script>
    import Header from '../Components/Header';
    import Intro from '../Components/Intro';
    import Ads from '../Components/Ads';
    import Footer from '../Components/Footer';

    export default {
        components: { Header, Intro, Ads, Footer },
    }
</script>
