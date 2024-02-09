
const button = document.getElementById("all_cats_button")

button.addEventListener('click', async function(event){
  try{
    let response = await fetch('http://127.0.0.1:8090/cats');
    let cats = await response.json();
    let table = "<table>"
    table += "<tr><th>name</th><th>breed</th><th>colour</tr>"
    for(let cat of cats){
      table += `<tr> <td>${cat.name}</td> <td>${cat.breed}</td> <td>${cat.colour}</td></tr>`
    }
    table += "</table>"
    document.getElementById('all_cats_results').innerHTML = table;
    }
    catch(error) {
      alert(error)
    }
});

const newCatForm = document.getElementById("new_cat_form");

newCatForm.addEventListener('submit', async function(event){
  event.preventDefault();

  const formData = new FormData(newCatForm);
  const formDataJSON = JSON.stringify(Object.fromEntries(formData));
  let response = await fetch('newcat',
    {
      method: "POST",
      body: formDataJSON,
      headers: {
        "Content-Type": "application/json"
      },
    }
  );
    if(response.ok){
      console.log("response OK to POST request");
    }

})