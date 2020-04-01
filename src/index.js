import x from './x.js'
import png from './assets/2.png'

console.log(png)
const div = document.getElementById('app')

div.innerHTML = `
  <img src="${png}">
`

const button = document.createElement('button')
button.innerText = 'Lazy Loading'
button.onclick = () => {
  const promise = import('./lazy')
  promise.then((module) => {
    const fn = module.default
    fn()
  }, () => {
    console.log('Fail to load module')
  })
}

div.appendChild(button)