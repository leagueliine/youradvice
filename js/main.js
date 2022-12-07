async function ramdomAdvice(){
    let url = "https://api.adviceslip.com/advice";
    let conselhoAleatorio = await fetch(url);
    return await conselhoAleatorio.json()
};

async function adviceInHtml(){
    let advice = await ramdomAdvice();
    document.getElementById('advice').innerText = await `"${advice.slip.advice}"`;
};

document.getElementById('adviceClick').addEventListener('click', () => adviceInHtml());

adviceInHtml();