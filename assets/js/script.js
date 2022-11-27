// Loading DOM
window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
  
    // value implementation

    let TextButton = () => {
      let divCounter = document.querySelector("#divCounter");
      let text_counter = document.createElement("span");
      text_counter.id = "textCounter";
      text_counter.textContent = 0;
      divCounter.appendChild(text_counter);
    };
  
    // implementation button increment
    let incrementButton = () => {
      let counterButton = document.querySelector("#divButton");
      let imgIncrement = document.createElement("img");
      imgIncrement.classList.add("img");
      imgIncrement.src = "assets/img/increment.svg";
      imgIncrement.setAttribute("onclick", "ButtonClick('+')");
      counterButton.appendChild(imgIncrement);
    };
  
    // implementation button decrement
    let decrementButton = () => {
      let counterButton = document.querySelector("#divButton");
      let imgDecrement = document.createElement("img");
      imgDecrement.classList.add("img");
      imgDecrement.src = "assets/img/decrement.svg";
      imgDecrement.setAttribute("onclick", "ButtonClick('-')");
      counterButton.appendChild(imgDecrement);
    };
  
    // implementation button reset
    let resetButton = () => {
      let counterButton = document.querySelector("#divButton");
      let reset = document.createElement("img");
      reset.classList.add("img");
      reset.src = "assets/img/reset.svg";
      reset.setAttribute("onclick", "ResetClick()");
      counterButton.appendChild(reset);
    };
  
    // Call function
    TextButton();
    decrementButton();
    resetButton();
    incrementButton();
  });
  
  // Change value
  let ButtonClick = (counter) => {
    let text_counter = document.querySelector("#textCounter");
    counter === "-"
      ? (text_counter.textContent = --text_counter.textContent)
      : (text_counter.textContent = ++text_counter.textContent);
  };
  
  // Restart button with confirm pop-up
  let ResetClick = () => {
    if (window.confirm("Do you want to reset your counter?")) {
      let text_counter = document.querySelector("#textCounter");
      text_counter.textContent = 0;
    }
  };