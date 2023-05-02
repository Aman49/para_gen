const input = document.getElementById('numberOfWords');

let numOfWords;
let container = document.querySelector('.container');
const generateWord = (n) => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let text = "";
    for(let i=0; i<n; i++){
        const random = (Math.random()*(alphabet.length-1)).toFixed(0);
        text += alphabet[random];
    }
    return text;
}
const getData = () => {
    numOfWords = Number(input.value);
    const para = document.createElement('p');
    let data = '';
    for(let i=0; i<numOfWords; i++) {
        const randomNum = (Math.random()*15).toFixed(0);
        data += generateWord(randomNum);
        data += " ";
    }
    para.innerText = 'sample';
    para.setAttribute('class', 'paras')
    container.append(para)
}