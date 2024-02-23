
const all_cats_button = document.getElementById("all_cats_button")

all_cats_button.addEventListener('click', async function(event){
  try{
    let response = await fetch('http://127.0.0.1:8090/cats');
    let cats = await response.json();

    document.getElementById('all_cats_results').innerHTML = displayCatsInTable(cats);
    }
    catch(error) {
      alert(error)
    }
});

const cat_search_form = document.getElementById("cat_search_form")

cat_search_form.addEventListener('submit', async function(event){
  alert("called cat search listener")
  event.preventDefault();
  try{
    let response = await fetch('http://127.0.0.1:8090/catsearch');
    let cats = await response.json();
    document.getElementById('all_cats_results').innerHTML = displayCatsInTable(cats);
    }
    catch(error) {
      alert(error)
    }
});

function displayCatsInTable(cats){
  let table = "<table>"
  table += "<tr><th>name</th><th>breed</th><th>colour</tr>"
  for(let cat of cats){
    table += `<tr> <td>${cat.name}</td> <td>${cat.breed}</td> <td>${cat.colour}</td></tr>`
  }
  table += "</table>"
  return table;
}

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