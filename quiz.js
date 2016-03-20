var questions = [
  [10,'/',2],
  [2,'*',5],
  [4,'+',3],
  [4,'*',3]
];

var level = 0;

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var operator = document.querySelector('#operator');
var answer = document.querySelector('#answer');
var quiz = document.querySelector('form');
var result = document.querySelector('#result');
var step = document.querySelector('#step');

var formatOperator = function(q) {
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

var setQuestion = function(question) {
  one.innerHTML = question[0];
  operator.innerHTML = formatOperator(question[1]);
  two.innerHTML = question[2];

  step.innerHTML = (level + 1) + '/' + questions.length;
};

var calculate = function(q) {
  if (q[1] === '*' || q[1].toLowerCase() === 'x') {
    return q[0] * q[2];
  } else if (q[1] === '/') {
    return q[0] / q[2];
  } else if (q[1] === '+') {
    return q[0] + q[2];
  } else if (q[1] === '-') {
    return q[0] - q[2];
  }
};

quiz.addEventListener('submit', function(e){
  e.preventDefault();
  if (calculate(questions[level]) === parseInt(answer.value)) {
    result.innerHTML = 'Correct';
    level++;
    if (level < questions.length) {
      setQuestion(questions[level]);
    } else {
      result.innerHTML = 'You have reached the end of the quiz.'
    }
  } else {
    result.innerHTML = 'Wrong';
  }
});

setQuestion(questions[level]);
