document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".grid");
  let output = document.querySelector(".input");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let butValue = button.innerHTML;

      if (butValue === "=") {
        let expression = output.innerText;
        let result = evaluateExpression(expression);
        output.innerText = result;
      } else if (butValue === "RESET") {
        output.innerText = "";
      } else if (butValue === "DEL") {
        output.innerText = output.innerText.slice(0, -1);
      } else {
        output.innerText += butValue;
      }
    });
  });

  function evaluateExpression(expression) {
    try {
      return eval(expression);
    } catch (error) {
      return "Error";
    }
  }

  //   Slider
  function slider() {
    let switcher = document.querySelector(".switcher");
    let ball = document.querySelector(".ball");
    let classNames = ["ball", "ball2", "ball3"];
    let currentIndex = 0;

    switcher.addEventListener("click", () => {
      ball.classList.remove(classNames[currentIndex]);
      currentIndex = (currentIndex + 1) % classNames.length;
      ball.classList.add(classNames[currentIndex]);
      if (classNames[currentIndex] === "ball") {
        document.body.style.backgroundColor = "";
        document.body.querySelector(".title").style.color = "";
        document.body.querySelector(".numbering").style.color = "";
        document.body.querySelector(".themetext").style.color = "";
        output.style.backgroundColor = "";
        output.style.color = "";
        document.body.querySelector(".keyframe").style.backgroundColor =
          " hsl(223, 31%, 20%)";
        buttons.forEach((button) => {
          button.style.backgroundColor = "hsl(0, 0%, 100%)";
          button.style.color = "hsl(221, 14%, 31%)";
        });
        document.body.querySelector(".blue").style.backgroundColor =
          "hsl(225, 21%, 49%)";
        document.body.querySelector(".red").style.backgroundColor =
          "hsl(6, 63%, 50%)";
        document.body.querySelector(".blue").style.backgroundColor =
          "hsl(225, 21%, 49%)";
          document.body.querySelector(".blue").style.color =
          "white";
        document.body.querySelector(".blue2").style.backgroundColor =
          "hsl(225, 21%, 49%)";
          document.body.querySelector(".blue2").style.color =
          "white";
        document.body.querySelector(".red").style.backgroundColor =
          "hsl(6, 63%, 50%)";
          document.body.querySelector(".red").style.color =
          "white";
        document.body.querySelector(".attribution").style.color =
          "hsl(0, 0%, 100%)";
        document.body.querySelector(".switcher").style.backgroundColor =
          "hsl(221, 14%, 31%)";
      } else if (classNames[currentIndex] === "ball2") {
        document.body.style.backgroundColor = " hsl(0, 0%, 93%)";
        document.body.querySelector(".title").style.color =
          " hsl(60, 10%, 19%)";
        document.body.querySelector(".numbering").style.color =
          "hsl(60, 10%, 19%)";
        document.body.querySelector(".themetext").style.color =
          "hsl(60, 10%, 19%)";
        output.style.backgroundColor = "white";
        output.style.color = "hsl(60, 10%, 19%)";
        document.body.querySelector(".keyframe").style.backgroundColor =
          "hsl(0, 5%, 81%)";
        buttons.forEach((button) => {
          button.style.backgroundColor = "hsl(45, 7%, 89%)";
        });
        document.body.querySelector(".blue").style.backgroundColor =
          "hsl(185, 42%, 37%)";
          document.body.querySelector(".blue").style.color =
          "white";
        document.body.querySelector(".blue2").style.backgroundColor =
          "hsl(185, 42%, 37%)";
          document.body.querySelector(".blue2").style.color =
          "white";
        document.body.querySelector(".red").style.backgroundColor =
          "hsl(25, 98%, 40%)";
          document.body.querySelector(".red").style.color =
          "white";
        document.body.querySelector(".attribution").style.color =
          "hsl(60, 10%, 19%)";
        document.body.querySelector(".switcher").style.backgroundColor =
          "hsl(0, 5%, 81%)";
      } else{
        document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
        document.body.querySelector(".title").style.color = "white";
        document.body.querySelector(".numbering").style.color = "white";
        document.body.querySelector(".themetext").style.color = "white";
        output.style.backgroundColor = "hsl(281, 89%, 26%)";
        output.style.color = "white";
        document.body.querySelector(".keyframe").style.backgroundColor =
          "hsl(268, 47%, 21%)";
        buttons.forEach((button) => {
          button.style.backgroundColor = "hsl(268, 47%, 21%)";
          button.style.color = "white";
        });
        document.body.querySelector(".blue").style.backgroundColor = "purple";
        document.body.querySelector(".blue2").style.backgroundColor = "purple";
        document.body.querySelector(".red").style.backgroundColor =
          " hsl(177, 92%, 70%)";
        document.body.querySelector(".attribution").style.color = "white";
        document.body.querySelector(".switcher").style.backgroundColor =
          "rgb(93, 0, 93)";
      }
      
    });
  }

  slider();
});
