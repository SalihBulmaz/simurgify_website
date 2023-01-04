const signin_form = document.getElementById('form-signin')
const signup_form = document.getElementById('form-signup')
const show_signin = document.getElementById('show-signin')
const show_signup = document.getElementById('show-signup')

signin_form.addEventListener('submit', function(e) {
    e.preventDefault()
})

show_signup.addEventListener('click', (e) => {
    e.preventDefault()
    signin_form.style.display = 'none'
    signup_form.style.display = 'contents'
    console.log('show signup')
})

show_signin.addEventListener('click', (e) => {
    e.preventDefault()
    signin_form.style.display = 'block'
    signup_form.style.display = 'none'
    console.log('show signin')
})

const labels = document.querySelectorAll('label')
labels.forEach((elm) => {
    elm.style.marginTop = '1.2rem'
})