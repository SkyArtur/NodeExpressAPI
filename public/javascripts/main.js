import {autoMessage} from "./messager.js";

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

const elementsMessages = {
    elem1: document.querySelector('[messages] > h3'),
    elem2: document.querySelector('[messages] > p > code')
}

autoMessage(messages, elementsMessages)

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

const elementsMessagesAdd = {
    elem1: document.querySelector('[add-messages] > h3'),
    elem2: document.querySelector('[add-messages] > p')
}

autoMessage(messagesAdd, elementsMessagesAdd, 15000)

/* --------------------------------------- LINKS --------------------------------------- */
const newLink = document.querySelector('[new-link]')
const updateLink = document.querySelector('[update-link]')
const deleteLink = document.querySelector('[delete-link]')
let id = 0

document.querySelectorAll('[radio-persons]').forEach(element => {
    element.addEventListener('click', () => {
        id = element.attributes.getNamedItem('value').value
    })
})

newLink.addEventListener('click', () => {
    window.open('/new', '_self')
})

updateLink.addEventListener('click', () => {
    window.open(`/update/${id}`, '_self')
})

deleteLink.addEventListener('click', () => {
    window.open(`/delete/${id}`, '_self')
})

