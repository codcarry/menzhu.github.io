/*
 * @Author: cola
 * @Date: 2022-08-03 23:48:58
 * @LastEditors: cola
 * @Description:
 */
const love = document.querySelector(".rectangle-love");
const wrapper = document.querySelector(".rectangle-wrapper");
const close = document.querySelector(".close");
love.addEventListener("click", () => {
  if (wrapper.classList.contains("animation")) {
    wrapper.classList.remove("animation");
  } else {
    wrapper.classList.add("animation");
  }
});
close.addEventListener("click", () => {
  wrapper.classList.remove("animation");
});


const imgzhuzhu = document.querySelector('.zhuzhu')
const btn = document.querySelector('.my-button').addEventListener('click',function(){
  let width = 0
  let opacity = 0
  console.dir(imgzhuzhu.style);
let timer =  setInterval(() => {
    width++
    if(opacity < 100){
      opacity += 2
    }
    if(width >= 55){
      setTimeout(() => {
        imgzhuzhu.style.zIndex = '-999'
      }, 1000);
      clearInterval(timer)
    }
    imgzhuzhu.style.filter = `opacity(${opacity}%)`
    imgzhuzhu.style.width = `${width}vw`
  }, 500);
})
