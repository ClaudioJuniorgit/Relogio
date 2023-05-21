const currenTime = () => {
    const element = document.querySelector("h1");

    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour = hour < 10 ? `0${hour}` : hour
    min = min < 10 ? `0${min}` : min
    sec = sec < 10 ? `0${sec}` : sec

    let time = `${hour}:${min}:${sec}`

    element.innerHTML = time;
};
const loc = () => {
const location = navigator.geolocation

const elementPosit = document.querySelector("h2");

location.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    elementPosit.innerHTML = `${lat}, ${long}`
});
}
currenTime()
setInterval(currenTime, 1000);
loc();


