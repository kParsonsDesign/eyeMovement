window.onload = setSizing;
window.onresize = setSizing;

function setSizing() {
  const leftEyeDiv = document.getElementsByClassName('left-eye')[0];
  const leftEye = document.getElementById('left-eye');
  const leftEyeBox = leftEye.getBoundingClientRect();

  const rightEyeDiv = document.getElementsByClassName('right-eye')[0];
  const rightEye = document.getElementById('right-eye');
  const rightEyeBox = rightEye.getBoundingClientRect();

  // Iris Information
  let leftIris = {
    img: document.getElementById('left-iris'),
    div: document.getElementsByClassName('left-iris')[0],
    x: 0, // x position
    y: 0, // y position
    left: {
      min: leftEyeBox.width * 0.08, // ~20px
      max: leftEyeBox.width * 0.37, // ~90px
    },
    top: {
      min: leftEyeBox.height * 0.25,
      max: 0,
    },
    width: {
      min: 0,
      max: 0,
    },
    height: {
      min: 0,
      max: 0,
    },
  };
  
  let rightIris = {
    img: document.getElementById('right-iris'),
    div: document.getElementsByClassName('right-iris')[0],
    x: 0, // x position
    y: 0, // y position
    left: {
      min: rightEyeBox.width * 0.08, // ~20px
      max: rightEyeBox.width * 0.37, // ~90px
    },
    top: {
      min: rightEyeBox.height * 0.25,
      max: 0,
    },
    width: {
      min: 0,
      max: 0,
    },
    height: {
      min: 0,
      max: 0,
    },
  };
  
  // iris Divs
  console.log(leftEyeBox);
  console.log(leftIris.div);
  leftIris.div.style.width = `${(leftEyeBox.width) * 0.7}px`;
  leftIris.div.style.left = `${(leftEyeBox.width) * 0.1}px`;
  leftIris.div.style.height = `${(leftEyeBox.height) * 0.6}px`;
  leftIris.div.style.top = `-${(leftEyeBox.height) * 0.7}px`;
  
  rightIris.div.style.width = `${(rightEyeBox.width) * 0.7}px`;
  rightIris.div.style.left = `${(rightEyeBox.width) * 0.2}px`;
  rightIris.div.style.height = `${(rightEyeBox.height) * 0.6}px`;
  rightIris.div.style.top = `-${(rightEyeBox.height) * 0.7}px`;

  // iris Start Position
  leftIris.img.style.left = `25%`;
  rightIris.img.style.left = `30%`;
  leftIris.img.style.top = `25%`;
  rightIris.img.style.top = `25%`;
  

  // Iris Sizes
  //leftIris.img.style.height = `${leftEye.clientHeight * 0.4}px`;
  //rightIris.img.style.height = `${rightEye.clientHeight * 0.4}px`;


  /*
  // left iris Div
  // top min = eyeBox.height * 0.25
  leftIrisDiv.style.top = `${leftEyeBox.height * 0.4}px`;
  // left min = eyeBox.width * 0.08
  leftIrisDiv.style.left = `${leftEyeBox.height * 0.08}px`;
  leftIris.style.left = `90px`;

  leftIrisDiv.style.width = `${leftEyeBox.width}px`;
  leftIrisDiv.style.height = `${leftEye.clientHeight * 0.4}px`;

  //right iris Div
  //rightIrisDiv.style.top = `${(rightEyeBox.height) * 0.25}px`;
  rightIrisDiv.style.top = `100px`;
  rightIrisDiv.style.left = `40px`;
*/

  // start iris appropriate location
  // left
  //leftIris.style.left = `${leftEyeBox.x + (leftEyeBox.width)/4.1}px`;
  //leftIris.style.top = `${leftEyeBox.y + (leftEyeBox.height)/2.4}px`;

  // right
  //rightIris.style.left = `${rightEyeBox.x + (rightEyeBox.width)/2.4}px`;
  //rightIris.style.top = leftIris.style.top;
};
