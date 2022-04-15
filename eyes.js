window.onload = () => {
  const balls = document.getElementsByClassName('iris');
  document.onmousemove = moveEyesTogether;
  document.ontouchmove = moveEyesTogether;

  function moveEyesTogether() {
    let x;
    let y;
    if (event.type === 'mousemove') {
      x = (event.clientX * 100) / (window.innerWidth) + '%';
      y = (event.clientY * 100) / (window.innerHeight) + '%';
    }
    if (event.type === 'touchmove') {
      x = (event.touches[0].clientX * 100) / window.innerWidth + '%';
      y = (event.touches[0].clientY * 100) / window.innerHeight + '%';
    }

    for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].style.transform = 'translate(-' + x + ',-' + y + ')';
    }
  }
};
