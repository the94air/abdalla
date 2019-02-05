<template>
    <footer>
        <div class="footer">
            <div class="container">
                <div class="flex flex-wrap">
                    <div class="w-full text-center md:w-1/2 md:text-left mb-10 md:mb-0">
                        &copy; Codolog {{ date }}
                    </div>
                    <div class="w-full text-center md:w-1/2 md:text-right">
                        <Links />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Links from './Links';

    export default {
        components: { Links },
        computed: {
            date() {
                return new Date().getFullYear();
            }
        }
    }
</script>
