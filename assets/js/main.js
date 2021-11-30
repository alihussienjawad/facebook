
      var options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        var crd = pos.coords;
        p_la.innerHTML=crd.latitude;
        p_lo.innerHTML=crd.longitude;
      }
      
      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }
      
      navigator.geolocation.getCurrentPosition(success, error, options);
