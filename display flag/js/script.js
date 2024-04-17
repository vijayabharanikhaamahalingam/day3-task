const API_URL="https://restcountries.com/v3.1/all"
function reqListener() {
    let response=JSON.parse(this.responseText);
    response.forEach(val=>{
        console.log(val["flag"])
    })
  }
  
  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL);
  req.send();