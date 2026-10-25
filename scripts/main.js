const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// 演示一个弹窗
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("我最喜欢巧克力冰淇淋了！");
} else {
  alert("但是巧克力才是我的最爱呀...");
}

// 演示为一个元素添加一个 click事件
document.querySelector("html").addEventListener("click", function () {
  alert("别戳我，我怕疼！");
});

const myImage = document.querySelector("img");

// 实现点击图片切换图片的效果
myImage.onclick = () => {
  // 一共两个图片路径，如果不是预先判断的就是另一个
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "./images/mozilla.svg") {
    myImage.setAttribute("src", "./images/tomcat.svg");
  } else {
    myImage.setAttribute("src", "./images/mozilla.svg");
  }
};

let myButton = document.querySelector("button");

// 通过提示框获得一个用户名，将这个用户名放入本地存储之中
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

// 每一次执行main.js都会判断本地存储是否有name
// 如果有就直接展示
// 如果没有就调用setUserName放入一个name并且展示
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

// 点击按钮可以主动调用setUserName函数
myButton.onclick = function () {
  setUserName();
};
