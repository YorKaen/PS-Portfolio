export const mixinScroll = {
    methods: {
        handleScroll(){
            console.log("handleScroll")
        }
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleResize);
    },
}
