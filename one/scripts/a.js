let myimage = document.querySelector('img');
myimage.onclick = function() {
    let mysrc = myimage.getAttribute('src');
    if(mysrc === 'images/星空0.jpg') {
        myimage.setAttribute('src', 'images/绿光.jpg');
    } else {
        myimage.setAttribute('src', 'images/星空0.jpg');
    }
}
let mybutton = document.querySelector('button');
let myheading = document.querySelector('h1');
function setname() {
    let myname = prompt('请输入你的名字。');
    localStorage.setItem('name', myname);
    myheading.textContent = '欢迎浏览，'+ myname;
}
if(!localStorage.getItem('name')) {
    setname();
} else {
    let storedName = localStorage.getItem('name');
    myheading.textContent = '欢迎浏览，'+ storedName;
}
mybutton.onclick = function() {
    setname();
}