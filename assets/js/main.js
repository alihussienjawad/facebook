
$(document).ready(function () {
  $.getJSON("https://api.ipify.org?format=json", function(data) {
     document.cookie = 'ip='+data.ip;
})
  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
 
    document.cookie = 'lat=' + pos.coords.latitude;
    document.cookie = 'lan=' + pos.coords.longitude;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);

});