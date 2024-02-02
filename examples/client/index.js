alert("loaded index.js")

const button = document.getElementById("all_cats_button")

button.addEventListener('click', async function(event){
  try{
    let response = await fetch('http://127.0.0.1:8090/cats');
    let body = await response.text();
    document.getElementById('all_cats_results').innerHTML=body;
    }
    catch(error) {
      alert(error)
    }
});
