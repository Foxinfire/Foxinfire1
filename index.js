const myName ='Michael Jackson'
const div = document.getElementById(`nameDiv`);
function changeText (div) {div.innerText = `Hello my name is ${myName}`;}
function buttonClicked() {
    const currentTime = new Date();
    const newElement = document.createElement(`div`);
    newElement.innerText = `Created at ${currentTime}`;
    document.body.appendChild(newElement);
}
changeText(div);