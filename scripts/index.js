//Need server address filled in URL
function createNewPost(title, content) {
    const url = "server address";
    const date = {title, content};

    fetch(url, {
        method: "POST",
        headers: {"Content-Type": application/JSON},
        body: JSON.stringify(data)})
    
    
    
    .then(response => response.JSON)
    .then(data => {
        console.log("Post success", data)
    })
    .catch(error =>{
        console.error("Post error", error)
    })
}
  