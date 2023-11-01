export function autoMessage(messages, element, timer=8000) {
    const elem1 = element.elem1
    const elem2 = element.elem2
    let control = 0
    setInterval(function (){
        elem1.innerHTML = messages[control].title
        elem2.innerHTML = messages[control].text
        if (control === messages.length - 1) {
            control = 0
        } else {
            control++
        }
    }, timer)
}

