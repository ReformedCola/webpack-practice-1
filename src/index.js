import x from './x.js'
import png from './assets/2.png'

console.log(png)
const div = document.getElementById('app')

div.innerHTML = `
  <img src="${png}">
`