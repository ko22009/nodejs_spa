import './style.css'
import api from '~app/api'

function root() {
    api.get('/').then(res => console.log(res.data))
    return document.createElement('div')
}

document.body.appendChild(root())
