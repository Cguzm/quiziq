import '@babel/polyfill';
import { getData } from './api';

// DOM elements
const playBtn = document.getElementById('playBtn');
// const buttons = document.querySelectorAll('.btn-ans');

// Call API on load
window.onload = () => {
  init();
};

let ans_a;

// DATA delegation
const init = () => {
  getData().then(data => {
    const header = data.results[0].category.toUpperCase();
    const question = data.results[0].question;
    const level = data.results[0].difficulty.toUpperCase();
    ans_a = data.results[0].correct_answer;
    const ans_b = data.results[0].incorrect_answers[0];
    const ans_c = data.results[0].incorrect_answers[1];
    const ans_d = data.results[0].incorrect_answers[2];

    // Debugging TEST
    console.log('This is the correct answer: ' + ans_a);

    const shuffle = a => {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    let answers = [ans_a, ans_b, ans_c, ans_d];

    shuffle(answers);
    // DOM Elements
    document.getElementById('header').textContent = header;
    document.getElementById('question').textContent = question;
    document.getElementById('level').textContent = level;
    document.getElementById('ans_a').textContent = answers[0].toString();
    document.getElementById('ans_b').textContent = answers[1].toString();
    document.getElementById('ans_c').textContent = answers[2].toString();
    document.getElementById('ans_d').textContent = answers[3].toString();
  });
};

// Call API on click
playBtn.addEventListener('click', () => {
  init();
});

const btnA = document.getElementById('ans_a');
const btnB = document.getElementById('ans_b');
const btnC = document.getElementById('ans_c');
const btnD = document.getElementById('ans_d');

// Check option A
btnA.addEventListener('click', () => {
  const btnA = document.getElementById('ans_a').textContent;
  if (btnA != ans_a) {
    alert('Incorret!');
  } else {
    alert('Correct!');
  }
});

// Check option B
btnB.addEventListener('click', () => {
  const btnB = document.getElementById('ans_b').textContent;
  if (btnB != ans_a) {
    alert('Incorret!');
  } else {
    alert('Correct!');
  }
});

// Check option C
btnC.addEventListener('click', () => {
  const btnC = document.getElementById('ans_c').textContent;
  if (btnC != ans_a) {
    alert('Incorret!');
  } else {
    alert('Correct!');
  }
});

// Check option D
btnD.addEventListener('click', () => {
  const btnD = document.getElementById('ans_d').textContent;
  if (btnD != ans_a) {
    alert('Incorret!');
  } else {
    alert('Correct!');
  }
});
