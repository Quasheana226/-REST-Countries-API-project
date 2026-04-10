const darkModebtn = document.getElementById('dark-mode-btn')
const currenTheme = localStorage('theme')

if( currenTheme){
    document.documentElement.setAttribute('data-theme', currenTheme)
}