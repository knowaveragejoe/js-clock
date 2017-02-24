var Clock = function() {
  const self = this;
  const secondHand = document.getElementById('second-hand');
  const minuteHand = document.getElementById('minute-hand');
  const hourHand   = document.getElementById('hour-hand');
  const secondNumber = document.getElementById('second-number');
  const minuteNumber = document.getElementById('minute-number');
  const hourNumber   = document.getElementById('hour-number');

  self.getSecondHandDegrees = (seconds) => {
    return ((seconds/60)*360)+90;
  };

  self.getMinuteHandDegrees = (minutes, seconds) => {
    return ((minutes/60)*360)+((seconds/60)*6)+90;
  };

  self.getHourHandDegrees = (hours, minutes) => {
    return (((hours/12)*360)+(minutes/60)*30)+90;
  };

  self.setHandPosition = (hand, deg) => {
    hand.style.transform =  `rotate(${deg}deg)`;
  };

  self.updateClockHands = now => {
    self.setHandPosition(secondHand, self.getSecondHandDegrees(now.getSeconds()));
    self.setHandPosition(minuteHand, self.getMinuteHandDegrees(now.getMinutes(), now.getSeconds()));
    self.setHandPosition(hourHand, self.getHourHandDegrees(now.getHours()), now.getMinutes());
  };

  self.updateClockReadout = now => {
    secondNumber.innerHTML = now.getSeconds();
    minuteNumber.innerHTML = now.getMinutes();
    hourNumber.innerHTML = now.getHours();
  };

  self.update = () => {
    const now = new Date();

    self.updateClockHands(now);
    self.updateClockReadout(now);
  };

  self.init = () => {
    //Call to set date initially
    self.update();
  };

  self.init();
};

document.addEventListener('DOMContentLoaded', e => {
  let clock = new Clock();

  setInterval(clock.update, 1000);
});