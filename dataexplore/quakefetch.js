let axios = require('axios');
const url = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02"



axios.get(url)
.then((res) => {

    const quake = res.data.features[0];
    const date = new Date(quake.properties.time);


    // produce more human-readable date
    const seconds = date.getSeconds();
    const minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const hour = date.getHours()
    const day = date.getDate();

    const monthLegend = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December" 
    }

    const month = monthLegend[date.getMonth()];
    const year = date.getFullYear();

    const datestring = `${month} ${day}, ${year} at ${hour}:${minute} and ${seconds} seconds`
    const timestamp = quake.properties.time;
    console.log(datestring)
});