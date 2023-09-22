
// Reference
const display = document.querySelector('.display')
const displayName = document.querySelector('.container')
const clickBtn = document.querySelector('.click_button')
const digitalClock = document.querySelector('.clock')

const jayJay = new Array('Jay_Shree_Ram', 'Jay_Shree_Krushna', 'Jay_Shree_Hari', 'Har_Har_Mahadev', 'Jay_Shree_Radhe', 'Jay_Shree_Vithoba_Rakhumai')
let press = 0;
let clockInterval;
clickBtn.addEventListener('click',()=>{
  if (press === 0) {
    display.style.display = `block`;
    jayJay.forEach((name) => {
      const h3Element = document.createElement('h3')
      h3Element.innerText = `!! ${name} !!`;
      displayName.appendChild(h3Element);
    })

    clockInterval = setInterval(() => {
      const time = new Date().toLocaleTimeString();
      digitalClock.innerText = `${time}`;
      console.log(time);
    }, 1000);
    press = 1;
  } else{
    display.style.display = `none`;
    displayName.innerHTML = ``;
    press = 0;
    clearInterval(clockInterval);
  }
},false)
