const button = document.getElementById("magic-button");
const box = document.getElementById("message-box");
// 2. Listen for a click on the button
button.addEventListener("click", function() {
// 3. When clicked, run this function:
  changeMessage();
  
  function changeMessage() {
  // Change the text inside the div
  box.textContent = " You clicked! I have been changed by JavaScript!";
  // Change the background color using inline CSS
  box.style.backgroundColor = "lightgreen";
  // Add a CSS class (defined in style.css)
  box.classList.add("success-box");
  }
});
