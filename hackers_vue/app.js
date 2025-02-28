const { createApp, ref, onMounted } = Vue;

createApp({
    setup() {
        const city = ref("서울");
        const temperature = ref(0);
        const weather = ref("");
        const humidity = ref(0);
        const windSpeed = ref(0);
        const lat = ref(37.5665);
        const lon = ref(126.9780);
        const apiKey = "32fe0e7f4f117d247ffb32edf91797d4";

        // 🟢 날씨 데이터 가져오기
        const fetchWeather = async () => {
            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric&lang=kr`);
                const data = await res.json();
                temperature.value = data.main.temp;
                weather.value = data.weather[0].description;
                humidity.value = data.main.humidity;
                windSpeed.value = data.wind.speed;
                lat.value = data.coord.lat;
                lon.value = data.coord.lon;
                loadMap(lat.value, lon.value);
            } catch (error) {
                console.error("날씨 데이터를 가져오는 중 오류 발생:", error);
            }
        };

        onMounted(fetchWeather);

        return { city, temperature, weather, humidity, windSpeed };
    }
}).mount("#app");
