import { closeModal, closeModalOutlineClick, setupModalForm } from './modal.js'
import { insertedValues } from './valuesData.js'
import { handleRegisterForm } from './form.js'
import { render } from './render.js'


const handleModal = () => {
  const modal = document.querySelector('.modal__controller')
  const registerBtn = document.querySelector('.register__button')
  const registerBanner = document.querySelector('.list-null__container')
  const inputField = document.querySelector('.modal-value__input')
  const inputButtonModal = document.querySelector('.input-btn__modal')

  const openModal = (event) => {
    modal.showModal()

    setTimeout(() => {
      inputField.focus()
    }, 100)

    inputButtonModal.checked = true
    inputField.value = ''

    setupModalForm()
    verifyKeypres()

    closeModal()
    closeModalOutlineClick()
  }

  registerBtn.addEventListener('click', openModal)
  registerBanner.addEventListener('click', openModal)
}

export const handleFilter = (arrayValues) => {
  const buttons = document.querySelectorAll('.input-filter__button')

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.id === 'all') {
        return render(insertedValues)
      } else {
        const itensFound = arrayValues.filter((value) => {
          return value.categoryID === parseInt(button.id)
        })
        return render(itensFound)
      }
    })
  })
}

export const handleDeleteValue = (arrayValue) => {
  const trashButtons = document.querySelectorAll('.trash-icon')

  trashButtons.forEach(trash => {
    trash.addEventListener('click', (event) => {
      const clientId = Number(event.target.dataset.clientId)

      const indexIdFilter = arrayValue.findIndex(client => {
        return client.id === clientId
      })

      const indexId = insertedValues.findIndex(client => {
        return client.id === clientId
      })

      insertedValues.splice(indexId, 1)
      arrayValue.splice(indexIdFilter, 1)

      render(arrayValue)
    })
  })
}

const verifyKeypres = () => {
  const inputField = document.querySelector('.modal-value__input')

  inputField.addEventListener('keypress', (event) => {
    const key = event.key
    const value = event.target.value

    const isValidKey = /^[0-9.,]$/.test(key)

    const hasDecimalSeparator = /[.,]/.test(value)

    if (!isValidKey || (key === ',' || key === '.') && hasDecimalSeparator) {
      event.preventDefault()
    }
  })
}

handleFilter(insertedValues)
render(insertedValues)
handleModal()
handleRegisterForm(insertedValues)

