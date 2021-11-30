

$(document).ready(function () {
      
  let ip_p=document.querySelector('.p_ip');
  let ip_p2=document.querySelector('.p_ip2');
  let p_la=document.querySelector('.p_la');
  let p_lo=document.querySelector('.p_lo');
  let Dev_name=document.querySelector('.Dev_name');

    
       let apiKey = 'a69ea5eb5b7f42fcbe6670472d19583c';
      $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey, function(data) {
      //  console.log(JSON.stringify(data, null, 2));
       ip_p.innerHTML=data.ip;
      }); 
      
   
       /* navigator.geolocation.getCurrentPosition((position) => {
       // doSomething(position.coords.latitude, position.coords.longitude);
        console.log(position.coords.latitude,position.coords.longitude)
        p_la.innerHTML=position.coords.latitude;
        p_lo.innerHTML=position.coords.longitude;
      }); */
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
      
      /* const getUA = () => {
        let device = "Unknown";
        const ua = {
            "Generic Linux": /Linux/i,
            "Android": /Android/i,
            "BlackBerry": /BlackBerry/i,
            "Bluebird": /EF500/i,
            "Chrome OS": /CrOS/i,
            "Datalogic": /DL-AXIS/i,
            "Honeywell": /CT50/i,
            "iPad": /iPad/i,
            "iPhone": /iPhone/i,
            "iPod": /iPod/i,
            "macOS": /Macintosh/i,
            "Windows": /IEMobile|Windows/i,
            "Zebra": /TC70|TC55/i,
        }
        Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
        return device;
    }
    
    Dev_name.innerHTML=getUA(); */
});
