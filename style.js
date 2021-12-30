function showTime() {
    let d = new Date(); // Cria a hora
    let dH = d.getHours(); // Pega a hora 
    let dM = d.getMinutes(); // Pega os minutos
    let dS = d.getSeconds(); // Pega os segundos
    let hAtual = ``
    if (dH < 10) {
        hAtual = `0${dH}:${dM}:${dS}`;
    } else if (dM < 10) {
        hAtual = `${dH}:0${dM}:${dS}`;
    } else if (dS < 10) {
        hAtual = `${dH}:${dM}:0${dS}`;
    } else if (dH < 10 || dM < 10) {
        hAtual = `0${dH}:0${dM}:${dS}`;
    } else if (dH < 10 || dS < 10) {
        hAtual = `0${dH}:${dM}:0${dS}`;
    } else if (dS < 10 || dM < 10) {
        hAtual = `${dH}:0${dM}:0${dS}`;
    } else if (dH < 10 || dM < 10 || dS < 10) {
        hAtual = `0${dH}:0${dM}:0${dS}`;
    } else {
        hAtual = `${dH}:${dM}:${dS}`
    }
    document.querySelector('.demo').innerHTML = hAtual;
};
setInterval(showTime, 1000)
