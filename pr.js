async function getAstroData() {
    const URL = "http://api.open-notify.org/astros.json";
    const response = await axios.get(URL);
    const astroData = response.data;