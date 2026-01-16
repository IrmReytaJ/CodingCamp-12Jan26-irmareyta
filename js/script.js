function submitName() {
    let name = document.getElementById("username").value;

    if (name === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    document.getElementById("welcomeText").innerText = "Selamat datang, " + name;

    document.getElementById("popup").classList.add("hidden");

}

        
