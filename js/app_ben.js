

function play(userChoice) {
    const choices = ['rock', 'scissors', 'paper'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let choice = '';
    if (computerChoice === 'rock') {
        choice = 'グー';
    } else if (computerChoice === 'scissors') {
        choice = 'チョキ';
    } else {    // computerChoice === 'paper'
        choice = 'パー';}

    let result = '';
    if (userChoice === computerChoice) {
        userChoice = 'ベンジャミンが出したのは'+choice;
        result = '引き分け！もう一回';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')
    ) {
        userChoice = 'ベンジャミンが出したのは'+choice;
        result = '勝ち！';
    } else {
        userChoice = 'ベンジャミンが出したのは'+choice;
        result = '負け！';
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = result;

    const userChoiceElement = document.getElementById('userChoice');
    userChoiceElement.textContent = userChoice;

    // Remove the animation class if it exists
    resultElement.classList.remove('fade-in');

    // Force a reflow (redraw of the element), necessary for the animation to restart
    void resultElement.offsetWidth;

    // Add the animation class
    resultElement.classList.add('fade-in');

    // 勝ち負けに応じたボタンの表記と遷移先を設定
    if (result === '勝ち！') {
        document.getElementById('next').textContent = 'オリビアを捕まえる';
        document.getElementById('next').href = './janken_olive.html';
    } else if (result === '負け！') {
        document.getElementById('next').textContent = 'もう一度初めから';
        document.getElementById('next').href = './janken_tpl.html';
    } else {
        document.getElementById('next').textContent = 'もう一度初めから';
        document.getElementById('next').href = './janken_tpl.html';
    }

    const nextElement = document.getElementById('next');
    nextElement.classList.remove('fade-in');
    void nextElement.offsetWidth;
    nextElement.classList.add('fade-in');

}


