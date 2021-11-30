

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
      
      fetch('https://api.ipregistry.co/?key=xs5fad20xhkncy2m')
      .then(function (response) {
          return response.json();
      })
      .then(function (payload) {
      //  console.log(payload,null,2)
    //   p_la.innerHTML=payload.location.latitude;
     //  p_lo.innerHTML=payload.location.longitude
         // console.log(payload.location.country.name + ', ' + payload.location.city);
      });



      navigator.geolocation.getCurrentPosition((position) => {
       // doSomething(position.coords.latitude, position.coords.longitude);
        console.log(position.coords.latitude,position.coords.longitude)
        p_la.innerHTML=position.coords.latitude;
        p_lo.innerHTML=position.coords.longitude;
      });

      
      const getUA = () => {
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
    
    Dev_name.innerHTML=getUA();
});