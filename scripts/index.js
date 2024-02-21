document.addEventListener("DOMContentLoaded", function (){
    async function fetchData(api) {
        const response = await fetch(api);
        const data = response.json();
        return data;
    };

    async function prikaziLansiranja() {
        try {
            const lansiranja = await fetchData("https://api.spacexdata.com/v4/launches");
            const listaLansiranja = document.getElementById("listaLansiranja");
            // console.log(lansiranja);
            lansiranja.forEach((lansiranje) => {
                const lansiranjeDiv = document.createElement("div");
                if(lansiranje.links.patch.small){
                    let logoLansiranja = document.createElement("img");
                    logoLansiranja.src = lansiranje.links.patch.small;
                    lansiranjeDiv.appendChild(logoLansiranja);
                };
                
                let lansiranjaIme = document.createElement("h1");
                lansiranjaIme.textContent = lansiranje.name;
                let lansiranjaDatum = document.createElement("p");
                lansiranjaDatum.textContent = new Date (lansiranje.date_utc).toLocaleDateString();
                let lansiranjaMisija = document.createElement("p");
                lansiranjaMisija.textContent = "Misija";
                let lansiranjaUspeh = document.createElement("p");
                if(lansiranje.success === true) {
                    lansiranjaUspeh.textContent = "Lansiranje uspesno"
                } else if(lansiranje.success === false) {
                    lansiranjaUspeh.textContent = "Lansiranje neuspesno"
                } else {
                    lansiranjaUspeh.textContent = "Nema informacija o lansiranju"
                };
                
                lansiranjeDiv.appendChild(lansiranjaIme);
                lansiranjeDiv.appendChild(lansiranjaDatum);
                lansiranjeDiv.appendChild(lansiranjaMisija);
                lansiranjeDiv.appendChild(lansiranjaUspeh);
                listaLansiranja.appendChild(lansiranjeDiv);
            });


        } catch (error) {
            console.error("Greska pri preuzimanju podataka:", error);
        }
    }
    prikaziLansiranja();
});













