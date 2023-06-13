import { render } from './render.js'

export const handleRegisterForm = (arrayValues) => {
    const inputValue = document.querySelector('.modal-value__input')
    const buttonInsert = document.querySelector('.modal-insert__button')
    const buttonsInput = document.querySelectorAll('.modal-input__button')
    const modal = document.querySelector('.modal__controller')
    const buttonsFilter = document.querySelector('.all-button__filter')



    buttonInsert.addEventListener('click', () => {
        buttonsInput.forEach(button => {
            if (button.checked) {
                let newValue = {}
                newValue['value'] = inputValue.value
                newValue['categoryID'] = parseInt(button.dataset.clientId)
                newValue['id'] = arrayValues.length + 1
                arrayValues.push(newValue)
            }
        })
        buttonsFilter.checked = true
        render(arrayValues)
        modal.close()
    })
}
