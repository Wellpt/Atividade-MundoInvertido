

const txtName = document.querySelector('#txtName')
const txtEmail = document.querySelector('#txtEmail')
const txtLevel = document.querySelector('#txtLevel')
const txtCharacter = document.querySelector('#txtCharacter')
const btnSubscribe = document.querySelector('#btnSubscribe')


console.log ('txtName')

btnSubscribe.addEventListener('click', () =>{
    const subscription = { // Isso aqui é um objeto
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }
    // salvar no banco de dados
    console.log(subscription)

})