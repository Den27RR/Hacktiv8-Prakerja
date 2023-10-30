document.addEventListener("DOMContentLoaded", function() {
    const paragraphs = document.querySelectorAll(".paragraf");
    let currentColorIndex = 0;
    const colors = ["red", "green", "blue"]; 
  
    function changeColor() {
      for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = colors[currentColorIndex];
      }
  
      // Increment the color index
      currentColorIndex = (currentColorIndex + 1) % colors.length;
    }
  
    function startColorAnimation() {

      setInterval(changeColor, 1000);
    }
  
    setTimeout(startColorAnimation, 2000);
  });