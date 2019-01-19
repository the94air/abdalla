<template>
    <div class="w-1/3 px-2">
        <parallax-element :parallaxStrength="-50" :type="'translation'">
            <div class="lang">
                <Fa :icon="[ 'fab', lang.icon ]" />
                <p v-text="lang.name"></p>
            </div>
            <svg width="0" height="0">
                <linearGradient :id="'lgrad' + lang.id" x1="100%" y1="100%" x2="0%" y2="0%" gradientTransform="rotate(45)">
                    <stop offset="0%" :style="style1" />
                    <stop offset="100%" :style="style2" />
                </linearGradient>
            </svg>
        </parallax-element>
    </div>
</template>

<script>
export default {
    data() {
        return {
            style1: {
                "stop-color": this.lang.color_top,
                "stop-opacity": 1,
            },
            style2: {
                "stop-color": this.lang.color_bottom,
                "stop-opacity": 1,
            }
        }
    },
    mounted() {
        let style = document.createElement('style');
        style.type = "text/css";
        style.appendChild(document.createTextNode(''));
        this.styleNode = style.childNodes[0];
        document.head.appendChild(style);
        this.styleNode.textContent = '.fa-' + this.lang.icon + ' * {fill: url(#lgrad' + this.lang.id + ');}';
    },
    props: {
        lang: Object,
    }
}
</script>
