<template>
    <div>
        <Header />
        <About />
        <Languages />
        <Ads />
        <Footer />
    </div>
</template>

<script>
    import Header from '../Components/Header';
    import About from '../Components/About';
    import Languages from '../Components/Languages';
    import Ads from '../Components/Ads';
    import Footer from '../Components/Footer';

    export default {
        components: { Header, About, Languages, Ads, Footer },
    }
</script>
