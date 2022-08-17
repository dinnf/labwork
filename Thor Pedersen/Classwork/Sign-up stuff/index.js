

function submitBtn(e){
    e.preventDefault();
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    console.log(firstName.value);
    console.log(lastName.value);

    fetch('https://reqres.in/api/users', {
  method: 'POST',
  body: JSON.stringify({
    first_name: firstName.value,
    last_name: lastName.value,

  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
  })
  .then(function(response){ 
  return response.json()})
  .then(function(data){console.log(data)});

  return false;
}