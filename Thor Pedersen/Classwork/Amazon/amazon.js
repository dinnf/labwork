const signUp = document.getElementById('sign-up');
const signIn = document.getElementById('sign-in');

signUp.addEventListener('mouseenter', DisplaySignIn);
signIn.addEventListener('mouseenter', DisplaySignIn);
signUp.addEventListener('mouseleave' , noDisplaySignIn);
signIn.addEventListener('mouseleave', noDisplaySignIn);

function DisplaySignIn() {
    signIn.style.display = 'flex';
}

function noDisplaySignIn() {
    signIn.style.display = 'none';
}