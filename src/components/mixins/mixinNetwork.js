export const mixinNetwork = {
    data: () => ({
        connection: {
            isOnline: Boolean,
        },
    }),
    created(){
        window.addEventListener("online", this.handleNetwork);
        window.addEventListener("offline", this.handleNetwork);
        this.handleNetwork();
    },
    methods: {
        handleNetwork() {
            this.connection.isOnline = navigator.onLine;
        },
    },
    unmounted() {
        window.removeEventListener("online", this.handleNetwork);
        window.removeEventListener("offline", this.handleNetwork);
    },
}
