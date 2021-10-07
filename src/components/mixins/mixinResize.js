export const mixinResize = {
    data: () => ({
        window: {
            width: 0,
        },
    }),
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
        },
    },
    mounted() {
        //засунуть в created?
        window.addEventListener("resize", this.handleResize);
        this.handleResize();
    },
    unmounted() {
        window.removeEventListener("resize", this.handleResize);
    },
}
