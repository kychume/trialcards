


function pre(){
    fetch("person.json")
.then(response => response.json)
.then(value => {
    console.log(value.data);
    alert(value.data === "hello")
})

}
