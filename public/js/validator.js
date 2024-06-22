const btnSend = document.querySelector('.button');

btnSend.addEventListener('click', (e) => {
    e.preventDefault()
    const btn = e.target;
    if (btn.classList.contains('submit')) {
        verificarForm()
    }
})

function verificarForm() {
    if(verificarMail() &
    verificarPass()) {

        setInterval(() => {
            document.querySelector('.registro').reset()
            document.querySelector('#user').classList.remove('succes')
            document.querySelector('#pass').classList.remove('succes') 
        }, 1000);
        
    }

}

function verificarMail() {
    const email = document.querySelector('#user')

    console.log(email.value);
    if(email.value === '') {
        email.classList.add('error')
        email.classList.remove('succes')
    } else {
        email.classList.remove('error')
        email.classList.add('succes')
        return true;
    }
}

function verificarPass() {
    const pass = document.querySelector('#pass');
    if(pass.value==='' || pass.value.length < 8){
        pass.classList.add('error')
        pass.classList.remove('success')
    } else {

        pass.classList.add('succes')
        pass.classList.remove('error')
        return true;
    }
}