const btn = document.getElementById('btn');
const colorCode = document.getElementById("color-code");


const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomColorCode = "#" + randomNumber.toString(16);

    document.body.style.backgroundColor = randomColorCode;
    colorCode.innerText = randomColorCode;
    navigator.clipboard.writeText = randomColorCode;
}

getColor()

