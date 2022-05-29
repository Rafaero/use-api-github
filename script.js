async function req() {

    let login = document.getElementById("login").value

    if (login == "") {
        alert("Preencha o campo")
    } else {

        const data = await (await fetch(`https://api.github.com/users/${login}`)).json();

        const { name, avatar_url, bio, message } = data

        if (message == 'Not Found') {
            alert("Usuario não encontrado")
        } else {
            document.getElementById("avatar").setAttribute("src", avatar_url);
            document.getElementById("name").innerText = name;
            document.getElementById("bio").innerText = bio;
        }
    }

}
