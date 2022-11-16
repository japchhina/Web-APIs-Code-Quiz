function printScore() {
  console.log('Your score is ' + score);
}   
highscores.sort(function(a, b) {
    return b.score - a.score;
    });
    highscores.splice(5);
    localStorage.setItem('highscores', JSON.stringify(highscores));
    window.location.assign('highscores.html');
