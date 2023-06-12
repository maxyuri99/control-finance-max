const handleModal = () => {
    const modal = document.querySelector('.modal__controller')
    const registerBtn = document.querySelector('.register__button')
    
    registerBtn.addEventListener('click', () => {
      modal.classList.add('show')
      modal.showModal()
            
    })
  }

  function setupModalValueInput() {
    const inputField = document.querySelector('.modal-value__input');
    const container = document.querySelector('.modal-value-input__container');
  
    function handleInputEvent() {
      if (inputField.validity.valid && inputField.value) {
        container.classList.add('active');
      } else {
        container.classList.remove('active');
      }
    }
  
    inputField.addEventListener('input', handleInputEvent);
  }
  
  setupModalValueInput();
  handleModal()