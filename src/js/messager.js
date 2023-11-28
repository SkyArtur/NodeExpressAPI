/* ------------------------------------ AUTOMESSAGE ------------------------------------ */
function autoMessage(messages, element, timer=8000) {
    const elem1 = element.elem1
    const elem2 = element.elem2
    let control = 0
    setInterval(function (){
        elem1.html(messages[control].title)
        elem2.html(messages[control].text)
        if (control === messages.length - 1) {
            control = 0
        } else {
            control++
        }
    }, timer)
}

/* -------------------------------------- MESSAGE -------------------------------------- */
const messages = [
    {
        title: 'Experimente e reproduza',
        text: 'Faça uma engenharia reversa e reproduza esta API. Será uma experiência empolgante!'
    },
    {
        title: 'Realize cadastros',
        text: 'Faça os testes de registros e se desafie a corrigir os erros.'
    },
    {
        title: 'Enfim...',
        text: 'Aproveite e divirta-se!'
    }
]
/* ------------------------------------ ADD-MESSAGE ------------------------------------ */
const messagesAdd = [
    {
        title: 'Registre uma nova pessoa!',
        text: 'Atenção aos requisitos de cada input. Não vai me digitar errado! kkkk'
    },
    {
        title: 'Atenção as mensagens!',
        text: 'Se algo acontecer de errado, eu te avisarei aqui!'
    }
]

autoMessage(messages, {elem1: $('[messages] > h3'), elem2: $('[messages] > p > code')})
autoMessage(messagesAdd, {elem1: $('[messages] > h3'), elem2: $('[messages] > p > code')}, 15000)