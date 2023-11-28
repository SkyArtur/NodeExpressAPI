/* --------------------------------------- LINKS --------------------------------------- */
let id = 0
document.querySelectorAll('[radio-persons]').forEach(element => {
    element.addEventListener('click', () => {
        id = element.attributes.getNamedItem('value').value
    })
})

window.addEventListener('load', () => {
    $('[link-app]').each((i, element) => {
        if ($(element).attr('link-app') === 'new') {
            element.addEventListener('click', () => {
                window.open(`/${$(element).attr('link-app')}`, '_self')
            })
        } else {
            element.addEventListener('click', () => {
                window.open(`/${$(element).attr('link-app')}/${id}`, '_self')
            })
        }
    })
})