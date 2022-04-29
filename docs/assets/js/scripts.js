
  //Stars 
  
  // targeting the svg itself
  // const starBodyArray = document.getElementsByClassName("star");
  
  // for (let i = 0; i < starBodyArray.length; i++) {
  //   const star =  document.createElementNS("http://www.w3.org/2000/sv", "svg");
  //   star.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  //   star.setAttribute("width", "16");
  //   star.setAttribute("height", "16");
  //   star.setAttribute("fill", "currentColor");
  //   star.setAttribute("class", "bi bi-star-fill");
  //   star.setAttribute("viewBox", "0 0 16 16");
    
  //   const path = document.createElementNS("http://www.w3.org/2000/sv", "path")
  //   path.setAttribute("d", "M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z");
    
  //   star.appendChild(path);
  //   console.log(star);
  //   starBodyArray[i].appendChild(star)
    
  // }
  // card efect on mouse over
  const cards = document.getElementsByClassName("card")
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", function( event ){
      event.target.style.color = "black";
      event.target.style.bottom = "10px";
      const button = event.target.querySelector("button");
      button.style.background = "black";
    }, false)
  }
  
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseleave", function( event ) {
      event.target.style.color = "white";
      event.target.style.bottom = "0px";
      const button = event.target.querySelector("button");
      button.style.background = "red";
    }, false)
  }
  
  
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg> */}
  