
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