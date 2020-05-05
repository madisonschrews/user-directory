const form = document.querySelector('form#userForm')

const handleSubmit = function(ev) {
    ev.preventDefault()
  const form = ev.target

  const user = {
      'Name': form.userName.value,
      'Age': form.age.value,
      'Favorite Color': renderColor(form.favoriteColor.value),
  }

  const users = document.querySelector('#users')

  users.appendChild(renderList(user))

  form.reset()
  form.userName.focus()
}

form.addEventListener('submit', handleSubmit)

const clearList = document.querySelector('#b3')
clearList.addEventListener('click', clearTheList)

function renderList(data){
    const list = document.createElement('dl')
    Object.keys(data).forEach(function(label){
        list.appendChild(renderListItem(label, data[label]))
      })
    return list
}

function renderListItem(label, value) {
    const item = document.createElement('li')
    const term = document.createElement('dt')
    term.textContent = label
    const description =  document.createElement('dd')
    try {
      description.appendChild(value)
    } catch(e) {
      description.textContent += value
    }
    item.appendChild(term)
    item.appendChild(description)
    return item
}
 
function renderColor(color){
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.style.width = '6rem'
    colorDiv.style.height = '3rem'
    colorDiv.style.marginLeft = '0%'
    return colorDiv
}


function clearTheList(){
    (document.querySelector('#users')).remove()
    form.userName.focus()
}