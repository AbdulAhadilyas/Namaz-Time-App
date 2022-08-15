function getData() {
  let city = document.getElementById("city").value;
  console.log(city);

  axios
    .get(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=pakistan&method=1`
    )
    .then(function (response) {
      const data1 = response.data;
      console.log(data1);
      document.getElementById("box1").innerHTML = data1.data.timings.Fajr;
      document.getElementById("box2").innerHTML = data1.data.timings.Sunrise;
      document.getElementById("box3").innerHTML = data1.data.timings.Dhuhr;
      document.getElementById("box4").innerHTML = data1.data.timings.Asr;
      document.getElementById("box5").innerHTML = data1.data.timings.Maghrib;
      document.getElementById("box6").innerHTML = data1.data.timings.Isha;
    });
}
