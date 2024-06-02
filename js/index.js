const logins = {
    email: 'vadimastik2009@gmail.com',
    password: 2233
};


const headerBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close');
const loginBtn1 = document.querySelector('.btn1');
const loginBtn2 = document.querySelector('.btn2');

headerBtn.addEventListener('click', () => {
    const login = document.querySelector('.login');
    login.classList.add('login-block');
});

closeBtn.addEventListener('click', () => {
    const login = document.querySelector('.login');
    login.classList.remove('login-block');
});

loginBtn1.addEventListener('click', () => {
const inputEl1 = document.querySelector('.input1');
const inputEl2 = document.querySelector('.input2');
const loginBtn2 = document.querySelector('.btn2');
    if (inputEl1.value === 'vadimastik2009@gmail.com' && inputEl2.value === '2233') {
        loginBtn2.classList.remove('no-active');
        loginBtn2.disabled = false;
    }
});

loginBtn2.addEventListener('click', () => {
    const entranceEl = document.querySelector('.entrance');
    entranceEl.classList.remove('entrance-none');
});