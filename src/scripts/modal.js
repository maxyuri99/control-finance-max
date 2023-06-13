export const closeModal = () => {
    const buttonX = document.querySelector('.modal-close__button')
    const buttonCancel = document.querySelector('.modal-cancel__button')
    const modalController = document.querySelector('.modal__controller')

    const buttonsEvent = () => {
        modalController.close()
    }

    buttonX.addEventListener('click', buttonsEvent)
    buttonCancel.addEventListener('click', buttonsEvent)
}

export const closeModalOutlineClick = () => {
    const body = document.querySelector('body')

    body.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal__controller')) {
            const modal = document.querySelector('.modal__controller')

            modal.close()
        }
    })
}

export const setupModalForm = () => {
    const modalForm = document.querySelector('.modal-form__container')

    const handleFormSubmit = (event) => {
        event.preventDefault()
    }

    modalForm.addEventListener('submit', handleFormSubmit)
}



