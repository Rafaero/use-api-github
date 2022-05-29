function req() {

    let data = [];
    let login = document.getElementById("login").value

    if (login == "") {
        alert("Preencha o campo")
    } else {

        fetch(`https://api.github.com/users/${login}`)

            .then(response => response.json())
            .then(response => data = response)
            .catch(error => console.log(error))

        console.log(data)
        
        const { name, avatar_url, bio, message } = data

        if(message == 'Not Found'){
            alert("Usuario não encontrado")
        }else{
            document.getElementById("avatar").setAttribute("src", avatar_url);
            document.getElementById("name").innerText = name;
            document.getElementById("bio").innerText = bio;
        }
    }

}
