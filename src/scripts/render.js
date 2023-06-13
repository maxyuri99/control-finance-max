import { valuesCategory } from './valuesData.js'
import { handleDeleteValue } from './index.js'

export const render = (arrayDatabase) => {
    const listController = document.querySelector('.main-list-value__controller')
    const registerBanner = document.querySelector('.list-null__container')
    const sumValue = document.querySelector('.sum__value')

    sumValue.innerText = '00.00'
    let calcValues = 0

    listController.innerHTML = ''

    if (arrayDatabase.length === 0) {
        registerBanner.style.display = 'flex' 
    } else {
        registerBanner.style.display = 'none'
        arrayDatabase.forEach((element) => {
            const values = element
            calcValues += parseFloat(element.value)

            const cardValues = createCard(values)

            listController.appendChild(cardValues)
        })
        sumValue.innerText = calcValues
        handleDeleteValue(arrayDatabase)
    }

}

const createCard = (valueArray) => {
    const listValue = document.createElement('li')
    const valueItemP = document.createElement('p')
    const valueItemSpan = document.createElement('span')
    const typeDelete = document.createElement('div')
    const typeDeleteP = document.createElement('p')
    const typeDeleteTrash = document.createElement('i')

    listValue.classList.add('list__value')
    valueItemSpan.classList.add('value__item')
    typeDelete.classList.add('type-delete__container')

    typeDeleteTrash.dataset.clientId = valueArray.id

    typeDeleteTrash.classList.add('fas')
    typeDeleteTrash.classList.add('fa-trash')
    typeDeleteTrash.classList.add('trash-icon')

    valueItemP.innerText = 'R$'
    valueItemSpan.innerText = valueArray.value

    const categoryIndex = valueArray.categoryID
    const categoryName = valuesCategory[categoryIndex]



    typeDeleteP.innerText = categoryName

    listValue.append(valueItemP, typeDelete)
    valueItemP.appendChild(valueItemSpan)
    typeDelete.append(typeDeleteP, typeDeleteTrash)

    return listValue
}