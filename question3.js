    // Task 2: Change box color on click
    function changeColor() {
        const box = document.getElementById("box");
        const colors = ["lightblue", "salmon", "lightgreen", "plum", "khaki"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        box.style.backgroundColor = randomColor;
      }
  
      // Task 3: Implement additional styling changes based on user interaction, such as mouse hover effects or button clicks on different HTML elements.
      const text = document.getElementById("text");
      text.addEventListener("mouseover", () => {
        text.style.color = "gold";
        text.style.fontWeight = "bold";
      });
      text.addEventListener("mouseout", () => {
        text.style.color = "";
        text.style.fontWeight = "";
      });
  
      function increaseFont() {
        text.style.fontSize = "24px";
      }
  
      function toggleHighlight() {
        text.classList.toggle("highlight");
      }

      function highlight() {
        document.getElementById("box").classList.add("highlighted");
     }
     
      function enlargeCircle() {
        document.getElementById("circle").style.transform = "scale(1.5)";
      }
  
      function resetCircle() {
        document.getElementById("circle").style.transform = "scale(1)";
      }