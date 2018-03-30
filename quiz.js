let currentQuestion, currentForm;

const message = document.querySelector('#message');
const clue = document.querySelector('#clue');
const codeform = document.querySelector('#codeform');
const code = codeform.querySelector('#code');
const puzzle = document.querySelector('#puzzle');
const question = document.querySelector('#question');
const one = puzzle.querySelector('#one');
const two = puzzle.querySelector('#two');
const operator = puzzle.querySelector('#operator');
const answer = puzzle.querySelector('#answer');

const formatOperator = q => {
  if (q === '*' || q.toLowerCase() === 'x') {
    return '&times;';
  } else if (q === '/') {
    return '&divide;';
  } else if (q === '+') {
    return '&plus;';
  } else if (q === '-') {
    return '&minus;';
  }
};

const setQuestion = question => {
  one.innerHTML = question[0];
  operator.innerHTML = formatOperator(question[1]);
  two.innerHTML = question[2];
  currentQuestion = question;
  answer.value = '';
};

const calculate = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y
};

const product = q => calculate[q[1]](q[0], q[2]);

const showMsg = msg => {
  message.innerText = msg;
  message.classList.add('show');
  setTimeout(() => message.classList.remove('show'), 3000);
};

const setMode = mode => {
  switch (mode) {
    case 1:
      // Show code.
      codeform.removeAttribute('hidden');
      clue.setAttribute('hidden', 1);
      puzzle.setAttribute('hidden', 1);
      code.focus();
      currentForm = code;
      break;
    case 2:
      // Show puzzle.
      codeform.setAttribute('hidden', 1);
      clue.setAttribute('hidden', 1);
      puzzle.removeAttribute('hidden');
      answer.focus();
      currentForm = answer;
      break;
    case 3:
      // Show clue.
      codeform.removeAttribute('hidden');
      clue.removeAttribute('hidden');
      puzzle.setAttribute('hidden', 1);
      code.value = '';
      code.focus();
      currentForm = code;
      break;
  }
};

puzzle.addEventListener('submit', e => {
  e.preventDefault();
  if (product(currentQuestion) === parseInt(answer.value)) {
    clue.innerHTML = codedquestions[code.value][3];
    setMode(3);
  } else {
    answer.select();
    showMsg('incorrect');
  }
});

codeform.addEventListener('submit', e => {
  e.preventDefault();
  if (codedquestions.hasOwnProperty(code.value)) {
    setQuestion(codedquestions[code.value]);
    setMode(2);
  } else {
    code.select();
    showMsg('incorrect code');
  }
});

document.body.addEventListener('click', () => currentForm.focus());

setMode(1);
