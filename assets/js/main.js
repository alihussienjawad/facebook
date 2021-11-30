

$(document).ready(function () {
      
 
  let p_la=document.querySelector('.p_la');
  let p_lo=document.querySelector('.p_lo');
 

   // console.log(navigator)
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(position=>{

        p_la.innerHTML=position.coords.latitude;
        p_lo.innerHTML=position.coords.longitude;
      })
    }
});
