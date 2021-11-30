

$(document).ready(function () {
      
  let ip_p=document.querySelector('.p_ip');
  let ip_p2=document.querySelector('.p_ip2');
  let p_la=document.querySelector('.p_la');
  let p_lo=document.querySelector('.p_lo');
  let Dev_name=document.querySelector('.Dev_name');

    
       let apiKey = 'a69ea5eb5b7f42fcbe6670472d19583c';
      $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey, function(data) {
       ip_p.innerHTML=data.ip;
      }); 
      
   
     
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        p_la.innerHTML=crd.latitude;
        p_lo.innerHTML=crd.longitude;
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
     
});
