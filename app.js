const buttonPlayer1 = document.getElementById('btnPlayer1');
const buttonPlayer2 = document.getElementById('btnPlayer2');
const buttonReset = document.querySelector('#btnReset');
const inputWinScore = document.getElementById('winScore');
const spanPlayer1 = document.getElementById('spanPlayer1');
const spanPlayer2 = document.getElementById('spanPlayer2');

let scoreP1 = 0;
let scoreP2 = 0;
let winScore = Number(inputWinScore.value);
// console.log(winScore, typeof winScore);

function player1Click(event) {
  console.log(event);
  // console.log('button clicked');
  if (event.target.id == 'btnPlayer1') {
    scoreP1++;
    spanPlayer1.textContent = scoreP1;
    if (scoreP1 >= winScore) {
      buttonPlayer1.disabled = true;
      buttonPlayer2.disabled = true;
      spanPlayer1.style.color = 'Green';
      spanPlayer2.style.color = 'Red';
    }
  } else if (event.target.id == 'btnPlayer2') {
    scoreP2++;
    spanPlayer2.textContent = scoreP2;
    if (scoreP2 >= winScore) {
      buttonPlayer1.disabled = true;
      buttonPlayer2.disabled = true;
      spanPlayer2.style.color = 'Green';
      spanPlayer1.style.color = 'Red';
    }
  }
}

buttonPlayer1.addEventListener('click', player1Click);
buttonPlayer2.addEventListener('click', player1Click);

// buttonPlayer2.addEventListener('click', (e) => {
//   console.log(e.target.id);
//   scoreP2++;
//   spanPlayer2.textContent = scoreP2;
//   if (scoreP2 >= winScore) {
//     buttonPlayer1.disabled = true;
//     buttonPlayer2.disabled = true;
//     spanPlayer2.style.color = 'Green';
//     spanPlayer1.style.color = 'Red';
//   }
// });

buttonReset.addEventListener('click', function () {
  scoreP1 = 0;
  scoreP2 = 0;
  spanPlayer1.textContent = 0;
  spanPlayer2.textContent = 0;
  spanPlayer1.style.color = 'Black';
  spanPlayer2.style.color = 'Black';
  buttonPlayer1.removeAttribute('disabled');
  buttonPlayer2.removeAttribute('disabled');
});

inputWinScore.addEventListener('change', () => {
  winScore = Number(inputWinScore.value);
});
