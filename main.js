/*
 * @Author: cola
 * @Date: 2022-08-03 23:48:58
 * @LastEditors: cola
 * @Description:
 */
const music = document.querySelector('.bg-music')
document.documentElement.addEventListener('click',function(){
  console.log(music.muted);
  if(!music.muted){
    music.play()
  }
})
const love = document.querySelector(".rectangle-love");
const wrapper = document.querySelector(".rectangle-wrapper");
const close = document.querySelector(".close");
const imgsArr = Array(8).fill('').map((item,i)=>`./images/${i+1}.jpg`)
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

const imgzhuzhu = document.querySelector(".zhuzhu");
const btn = document.querySelector(".my-button");
imgzhuzhu.src = imgsArr[Math.ceil(Math.random() * imgsArr.length)]
console.log(imgzhuzhu.src);
class ShowImg {
  constructor(imgDom) {
    this.width = 0;
    this.opacity = 0;
    this.timerAppear = null;
    this.timerDisappear = null;
    this.imgDom = imgDom
  }
  appear() {
    this.timerAppear = setInterval(() => {
      this.width++;
      if (this.opacity < 100) {
        this.opacity += 2;
      }
      if (this.width >= 55) {
        clearInterval(this.timerAppear);
        btn.innerText = '收下祝福'
        setTimeout(() => {
          this.timerDisappear = setInterval(()=>{this.disappear()}, 100);
        }, 1000);
      }
      this.imgDom.style.filter = `opacity(${this.opacity}%)`;
      this.imgDom.style.width = `${this.width}vw`;
    }, 100);
  }
  disappear() {
    if (this.width === 0) {
      clearInterval(this.timerDisappear);
    }
    if (this.opacity > 0) {
      this.opacity -= 2;
    }
    this.width -= 1;
    this.imgDom.style.filter = `opacity(${this.opacity}%)`;
    this.imgDom.style.width = `${this.width}vw`;
  }
}

const showImg = new ShowImg(imgzhuzhu)
btn.addEventListener('click',()=>{
  if(btn.innerText === '收下祝福'){
    close.click()
    setTimeout(() => {
      btn.innerText = '好哒~'
    }, 300);
    return 
  }
  imgzhuzhu.src = imgsArr[Math.floor(Math.random() * imgsArr.length)]
  setTimeout(() => {
    showImg.appear()
  }, 2500);
})
