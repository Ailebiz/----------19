
let countdown;
let countdownNumber;

document.getElementById('startButton').addEventListener('click', function() {
  clearInterval(countdown);
  countdownNumber = 5;
  document.getElementById('message').innerText = '';
  
  countdown = setInterval(function() {
    if (countdownNumber > 0) {
      document.getElementById('countdown').innerText = countdownNumber;
      countdownNumber--;
    } else {
      clearInterval(countdown);
      document.getElementById('countdown').innerText = '';
      document.getElementById('message').innerText = 'Уақытыңыз аяқталды! 😊';
    }
  }, 1000);
});
