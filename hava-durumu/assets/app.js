
const app = Vue.createApp({
    data() {
        return {
            sehir: "istanbul",
            name: "",
            region: "",
            country: "",
            localtime: "",
            temp_c: "",
            text: "",
            icon: ""


        }
    },
    methods: {
        callApi() {
            fetch('https://api.weatherapi.com/v1/current.json?key=0be70cbd7ff948cb96a184335251606&q=' + this.sehir + '&aqi=no')
                .then(res => res.json())
                .then(data => {

                    this.name = data.location.name;
                    this.localtime = data.location.localtime;
                    this.temp_c = data.current.temp_c;
                    this.text = data.current.condition.text;
                    this.icon = data.current.condition.icon;
                });
        },
        sehirsec(e) {
            console.log(e.target.value);
            this.sehir = e.target.value;
            this.callApi();
        }
    },
    mounted() {
        this.callApi();
    }
});
app.mount("#app");