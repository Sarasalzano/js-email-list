//seleziono elemento di output
const listaEmail = document.getElementById("email-list");


//settiamo costante endpoint API
const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail";



//ciclo for per ciclare le email
 for(let i=0; i<10; i++) {
    //chiamata ajax con axios
    axios.get(endPoint)
    .then(rispApi => {
    const result = rispApi.data.response;
    const list = document.createElement("li");
    list.textContent = result;
    listaEmail.appendChild(list);
    console.log(result);
})

.catch(error => {
console.log(error);
});
    }



