const form = document.querySelector('#convertForm')
const input = document.querySelector('#convertField')
const result = document.querySelector('#result')
const jsonResult = document.querySelector('#jsonResult')

form.addEventListener('submit', function (event) {
  event.preventDefault()
  const url = `${form.action}?${input.name}=${input.value}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      result.textContent = data.string || data.error || data
      jsonResult.textContent = JSON.stringify(data)
      input.value = ''
    })
    .catch(console.error)
}, false)
