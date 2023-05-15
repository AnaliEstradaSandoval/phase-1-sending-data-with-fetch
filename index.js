// Add your code here
function submitData(name, email){
const userData = {
    name,
    email
}
const url = "http://localhost:3000/users"
const configurationObject = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    };
    return fetch(url, configurationObject)
    .then(function (response){
        return response.json();
    })
    .then(function (object){
        document.body.append(object.id)
    })
    .catch(function (error){
        alert.apply("Unathorized Access");
        document.body.append(error.message)
    })
}