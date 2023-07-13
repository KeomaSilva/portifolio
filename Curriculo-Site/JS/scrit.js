const btnSwitch = document.getElementById(btnThemeChange);

btnSwitch = addEventListener('change', () =>{
    document.body.classList.toggle('dark');
})