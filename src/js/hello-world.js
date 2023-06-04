
import "../scss/helloworld.scss";
import "../components/hello-world";
import "../components/button-location";


window.addEventListener('DOMContentLoaded', () => {
    // console.log(window);
    if (typeof window.bootstrap === 'undefined') {
        throw new Error('Bootstrap is not loaded.');
        //alert("Bootstrap is not loaded.")
      }
     
      const getLocation = document.getElementById("getLoc");
      const compHello = document.getElementsByTagName('hello-world');

      getLocation.addEventListener("click",(e)=>{
      
          if(!compHello[0].ask_location){
            compHello[0].ask_location="true";
          }else{
            compHello[0].ask_location="false";
          }
          setLocation(compHello);
      });
    
    
      function setLocation(compHello){
        if(compHello[0]){
          compHello[0].innerHTML = 'Hello world';
           if(compHello[0].ask_location) {
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(showPosition);
              }else {
                  throw new Error('Geolocation is not supported by this browser.');
                }
           }
        }else{
          const newComponent = document.createElement('hello-world');
           newComponent.innerHTML = 'Hello world';
           document.body.appendChild(newComponent);
        }
      }


      function showPosition(position){
        console.log(position);
        const coordinates = position.coords;
        compHello[0].innerHTML += ` </br> Your Location is <span> (${coordinates.latitude}, ${coordinates.longitude}) </span> </br>`;
    }
});

