const signin_form = document.querySelector('.form-signin')
const signup_form = document.querySelector('.form-signup')
const show_signin = document.querySelector('.show-signin')
const show_signup = document.querySelector('.show-signup')

signin_form.addEventListener('submit', function(e) {
    e.preventDefault()
})

show_signup.addEventListener('click', (e) => {
    e.preventDefault()
    signin_form.style.display = 'none'
    signup_form.style.display = 'block'
})

show_signin.addEventListener('click', (e) => {
    e.preventDefault()
    signin_form.style.display = 'block'
    signup_form.style.display = 'none'
})