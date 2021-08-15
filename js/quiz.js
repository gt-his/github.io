'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '悠雅の好きなおもちゃは?', c: ['クルマ', 'トランプ', 'TVゲーム']},
    {q: '悠雅の誕生日は?', c: ['12月20日', '7月26日', '5月28日']},
    {q: '悠雅の名前の由来は?', c: ['悠々自適に生きてほしい', '春生まれから', '悠仁様から']},
    {q: '悠雅の好きな食べ物は?', c: ['納豆ごはん', 'グラタン', 'らーめん']},
    {q: '悠雅のお気に入りの洋服は?', c: ['恐竜', '無地', 'りんご']},
    {q: '悠雅の投資する米国ETFは?', c: ['VT(全世界株式)', 'SPYD(高配当)', 'QQQ(NASDAQ100)']},
  ]);
  let currentNum = 0;
  let isAnswered;
  let score = 0;
  
  function shuffle(arr) {
    for (let i = arr.length -1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }
  
  function checkAnswer(li) {
    if (isAnswered === true) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    btn.classList.remove('disabled');
  }


  function setQuiz() {
    isAnswered = false;

    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild) {
      choices.removeChild(choices.firstChild);
    }
  
    const shuffleChoices = shuffle([...quizSet[currentNum].c]);
    shuffleChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) {
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if (btn.classList.contains('disabled')) {
      return;
    }
    btn.classList.add('disabled');

    if (currentNum === quizSet.length - 1) {
      scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum+++
      setQuiz();
    }

  });
}