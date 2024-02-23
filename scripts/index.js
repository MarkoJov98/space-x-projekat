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
                lansiranjeDiv.className = "lansiranjeDiv";
                if(lansiranje.links.patch.small){
                    let logoLansiranja = document.createElement("img");
                    logoLansiranja.src = lansiranje.links.patch.small;
                    lansiranjeDiv.appendChild(logoLansiranja);
                };
                
                let lansiranjaIme = document.createElement("h1");
                lansiranjaIme.textContent = lansiranje.name;
                let lansiranjaDatum = document.createElement("p");
                lansiranjaDatum.textContent =`Date:  ${new Date (lansiranje.date_utc).toLocaleDateString()}`;
                let lansiranjaMisija = document.createElement("p");
                if(lansiranje.details) {
                    lansiranjaMisija.textContent = `Details: ${lansiranje.details}`;
                } else {
                    lansiranjaMisija.textContent = `Details: Unknown details`;
                };
                let lansiranjaUspeh = document.createElement("p");
                if(lansiranje.success === true) {
                    lansiranjaUspeh.textContent = `Launch: Success`
                } else if(lansiranje.success === false) {
                    lansiranjaUspeh.textContent = "Launch: Failure"
                } else {
                    lansiranjaUspeh.textContent = "Launch: Unknown"
                };
                
                lansiranjeDiv.appendChild(lansiranjaIme);
                lansiranjeDiv.appendChild(lansiranjaDatum);
                lansiranjeDiv.appendChild(lansiranjaMisija);
                lansiranjeDiv.appendChild(lansiranjaUspeh);
                listaLansiranja.appendChild(lansiranjeDiv);
            });


        } catch (error) {
            console.error("Greska pri preuzimanju podataka:", error);
        };
    };

    async function prikaziInformacije() {
        try {
            const informacije = await fetchData("https://api.spacexdata.com/v4/company");
            const informacijeONama = document.getElementById("informacijeONama");
            
            const aboutDiv = document.createElement("div");
            aboutDiv.className = "about-section";

            let containerDiv1 = document.createElement("div");
            containerDiv1.className = "containerDiv";
            

            const headquarters = document.createElement("div");
            headquarters.className = "headquarters-section";

            let containerDiv2 = document.createElement("div");
            containerDiv2.className = "containerDiv";
            
            const socialMedia = document.createElement("div");
            socialMedia.className = "social-media-section";

            let aboutNaslov = document.createElement("h3");
            aboutNaslov.textContent = "ABOUT";
            
            let headquartersNaslov =document.createElement("h3");
            headquartersNaslov.textContent = "HEADQUARTERS";

            let infoKompanije = document.createElement("p");
            infoKompanije.className = "company-info";
            infoKompanije.textContent = `${informacije.name} was founded ${informacije.founded} by ${informacije.founder}.`;

            let employes = document.createElement("p");
            employes.textContent = `Has ${informacije.employees} employees,`;

            let vehicles = document.createElement("p");
            vehicles.textContent = `${informacije.vehicles} vehicles,`;

            let launcSite = document.createElement("p");
            launcSite.textContent = `${informacije.launch_sites} launch sites,`;

            let testSites = document.createElement("p");
            testSites.textContent = `and ${informacije.test_sites} test sites,`;

            let value = document.createElement("p");
            value.textContent = `Valued at $${informacije.valuation}.`;
            
            let infoHeadquarters = document.createElement("p");
            infoHeadquarters.className = "headquarters-info";
            infoHeadquarters.textContent = `${informacije.headquarters.address},`;

            let gradDrzava = document.createElement("p");
            gradDrzava.textContent = `${informacije.headquarters.city}, ${informacije.headquarters.state}`;

            let infoSocialMediaNaslov = document.createElement("h3");
            infoSocialMediaNaslov.textContent = "SOCIAL MEDIA";

            let infoSocialMedia = document.createElement("div");
            infoSocialMedia.className = "social-media-info";
            infoSocialMedia.classList.add("containerDiv");
            

            let websiteLink = document.createElement("a");
            websiteLink.textContent = "Website";
            websiteLink.href = informacije.links.website;
            websiteLink.target = "_blank";

            let flickrLink = document.createElement("a");
            flickrLink.textContent ="Flickr";
            flickrLink.href = informacije.links.flickr;
            flickrLink.target = "_blank";

            let twitterLink = document.createElement("a");
            twitterLink.textContent = "Twitter";
            twitterLink.href = informacije.links.twitter;
            twitterLink.target = "_blank";

            let elonTwitterLink = document.createElement("a");
            elonTwitterLink.textContent = "Elon Musk Twitter";
            elonTwitterLink.href = informacije.links.elon_twitter;
            elonTwitterLink.target = "_blank";

            aboutDiv.appendChild(aboutNaslov);
            aboutDiv.appendChild(containerDiv1);
            containerDiv1.appendChild(infoKompanije);
            containerDiv1.appendChild(employes);
            containerDiv1.appendChild(vehicles);
            containerDiv1.appendChild(launcSite);
            containerDiv1.appendChild(testSites);
            containerDiv1.appendChild(value);
            headquarters.appendChild(headquartersNaslov);
            headquarters.appendChild(containerDiv2);
            containerDiv2.appendChild(infoHeadquarters);
            containerDiv2.appendChild(gradDrzava);
            socialMedia.appendChild(infoSocialMediaNaslov);
            socialMedia.appendChild(infoSocialMedia);
            infoSocialMedia.appendChild(websiteLink);
            infoSocialMedia.appendChild(flickrLink);
            infoSocialMedia.appendChild(twitterLink);
            infoSocialMedia.appendChild(elonTwitterLink);
            informacijeONama.appendChild(aboutDiv);
            informacijeONama.appendChild(headquarters);
            informacijeONama.appendChild(socialMedia);
            

        } catch (error) {
            console.error("Greska pri preuzimanju podataka:", error);
        };
    };

    async function prikaziRakete() {
        const rakete = await fetchData("https://api.spacexdata.com/v4/rockets");
        const lista = document.getElementById("listaRaketa");

        rakete.forEach((raketa) => {
            const raketaDiv = document.createElement("div");
            raketaDiv.className = "divRaketa";
            let infoDiv = document.createElement("div");
            infoDiv.className = "infoDiv";
            let buttonDiv = document.createElement("div");
            buttonDiv.className = "buttonDiv";
            if(raketa.flickr_images) {
                let logoRaketa = document.createElement("img");
                logoRaketa.src = raketa.flickr_images[0];
                raketaDiv.appendChild(logoRaketa);
            };

            let raketaIme = document.createElement("h3");
            raketaIme.textContent = raketa.name;

            let raketaTip = document.createElement("p");
            raketaTip.textContent = `Type: ${raketa.type}`;

            let raketaVisina = document.createElement("p");
            raketaVisina.textContent =`Height: ${raketa.height.meters} m`;

            let raketaMasa = document.createElement("p");
            raketaMasa.textContent = `Mass: ${raketa.mass.kg} kg`


            let detaljiRakete = document.createElement("p");
            detaljiRakete.textContent = `Details: ${raketa.description}`;

            let buttonRaketa = document.createElement("a");
            buttonRaketa.className = "button";
            buttonRaketa.textContent = "Learn More";


            
            lista.appendChild(raketaDiv);
            raketaDiv.appendChild(infoDiv);
            raketaDiv.appendChild(buttonDiv);
            infoDiv.appendChild(raketaIme);
            infoDiv.appendChild(raketaTip);
            infoDiv.appendChild(raketaVisina);
            infoDiv.appendChild(raketaMasa);
            infoDiv.appendChild(detaljiRakete);
            buttonDiv.appendChild(buttonRaketa);
        });

    };
    
    const currentPage = window.location.pathname;
    if (currentPage.includes("lansiranja.html")) {
        prikaziLansiranja();
    } else if (currentPage.includes("rakete.html")) {
        prikaziRakete();
    } else if (currentPage.includes("onama.html")) {
        prikaziInformacije();
    }
});















