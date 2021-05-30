let step = 1;
const rules = {
  rock: "scissor",
  paper: "rock",
  scissor: "paper",
};
let choice;
const choices = ["rock", "paper", "scissor"];
const paper = document.querySelector(".border-paper");
const rock = document.querySelector(".border-rock");
const scissor = document.querySelector(".border-scissor");

const replayBtn = document.getElementById("step4");

replayBtn.addEventListener("click", (e) => {
  if (e.target.innerHTML == "Play again") {
    document.getElementById("step4").style.display = "none";
    document.getElementById("step1").style.display = "flex";
    document.getElementById("rules").style.visibility = "visible";
  }
});

const moveSelected = () => {
  document.getElementById("rules").style.visibility = "hidden";
  if (step == 2) {
    let playerMove = `
    <h3>You Picked</h3>
    <div class="border-${choice}">
      <div id="${choice}" class="move">
        <img src="./images/icon-${choice}.svg" alt="${choice}" />
      </div>
    </div>
    `;
    document.getElementById("step2").childNodes[1].innerHTML = playerMove;

    let housemove = choices[Math.floor(Math.random() * choices.length)];

    let houseMove = `
    <h3>House Picked</h3>
    <div class="border-${housemove}">
      <div id="${housemove}" class="move">
        <img src="./images/icon-${housemove}.svg" alt="${housemove}" />
      </div>
    </div>
    
    `;

    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "flex";

    setTimeout(() => {
      step = 3;
      document.getElementById("step2").style.display = "none";
      document.getElementById("step3").childNodes[1].innerHTML = playerMove;
      document.getElementById("step3").childNodes[3].innerHTML = houseMove;
      document.getElementById("step3").style.display = "flex";

      let resHtml = `<p>Draw</p>
      <button id='replay'>Play again</button>`;
      let result = "Draw";

      if (rules[choice] == housemove) {
        result = "Win";
        playerMove = `<h3>You Picked</h3>
        <div class="border-${choice} ripple-effect">
          <div id="${choice}" class="move">
            <img src="./images/icon-${choice}.svg" alt="${choice}" />
          </div>
        </div>`;
        resHtml = `<p>You Win</p>
        <button id='replay'>Play again</button>`;
      } else if (rules[housemove] == choice) {
        result = "Lose";
        houseMove = `
          <h3>House Picked</h3>
            <div class="border-${housemove} ripple-effect">
              <div id="${housemove}" class="move">
              <img src="./images/icon-${housemove}.svg" alt="${housemove}" />
            </div>
          </div>
          `;
        resHtml = `<p>You lose</p>
          <button id='replay'>Play again</button>`;
      }

      setTimeout(() => {
        document.getElementById("step3").style.display = "none";
        if (result == "Win") {
          let score = document.getElementById("player-score").innerHTML;
          document.getElementById("player-score").innerHTML = Number(score) + 1;
        }
        document.getElementById("step4").childNodes[1].innerHTML = playerMove;
        document.getElementById("step4").childNodes[3].innerHTML = resHtml;
        document.getElementById("step4").childNodes[5].innerHTML = houseMove;
        document.getElementById("step4").style.display = "flex";
      }, 1000);
    }, 2000);
  }
};

paper.addEventListener("click", () => {
  choice = "paper";
  step = 2;
  moveSelected();
});

rock.addEventListener("click", () => {
  choice = "rock";
  step = 2;
  moveSelected();
});

scissor.addEventListener("click", () => {
  choice = "scissor";
  step = 2;
  moveSelected();
});

if (step == 1) {
  document.getElementById("step1").style.display = "flex";
}

const rulesBtn = document.getElementById("rules");
rulesBtn.addEventListener("click", () => {
  document.getElementById("modal").classList.add("modal-show");
});

const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", () => {
  document.getElementById("modal").classList.remove("modal-show");
});
