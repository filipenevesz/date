function zeraAEsquerda (num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    const dia = zeraAEsquerda(data.getDate());
    const mes = zeraAEsquerda(data.getMonth() + 1);
    const ano = zeraAEsquerda(data.getFullYear());
    const hora = zeraAEsquerda(data.getHours());
    const min = zeraAEsquerda(data.getMinutes());
    const seg = zeraAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);