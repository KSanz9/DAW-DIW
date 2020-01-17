
function alCarrito(){
    console.log(this.dataset.idfigura);
    const datos = { idfigura : this.dataset.idfigura}
    fetch("http://localhost:8080/gestion/api/gestion",{
	method: "POST",
	headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
	},
	body:JSON.stringify(datos)
        })
	.then(res => {
	    return res.json();
	})
        .then(response => {
	    console.log(response);
	    fetch("http://localhost:8080/gestion/api/cuenta",{
		method:"GET",
		headers: {
		    'Accept': 'application/json, text/plain, */*',
		    'Content-Type': 'application/json'
		}})
		.then(resb => {
		    return resb.json();
		})
		.then(responseb =>{
		    console.log(responseb);
		    document.querySelector("a").text="Tienes "+responseb.totalElementos+" en la cesta";
		});	
	});
}





function init(){
    console.log(" * [ INFO ] : Init loaded");

    // Eventos vinculados

    document.querySelectorAll("input[data-idfigura]").forEach(input => input.addEventListener("click",alCarrito));
    
}

window.onload = init;
