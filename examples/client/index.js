alert("loaded index.js")

const button = document.getElementById("all_cats_button")

button.addEventListener('click', function(event){
  fetch('http://127.0.0.1:8090/cats')
    .then(response => response.text())
    .then(body => document.getElementById('all_cats_results').innerHTML=body)
    .catch( (error) => alert(error))
});
