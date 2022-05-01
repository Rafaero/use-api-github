async function req() {

    let data = [];
    let login = document.getElementById("login").value

    if (login == "") {
        alert("Preencha o campo")
    } else {

        await fetch(`https://api.github.com/users/${login}`)

            .then(response => response.json())
            .then(response => data = response)

        console.log(data)

        const { name, avatar_url, bio } = data

        document.getElementById("avatar").setAttribute("src", avatar_url);
        document.getElementById("name").innerText = name;
        document.getElementById("bio").innerText = bio;
    }

}