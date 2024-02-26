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
                let lansiranjeDiv = document.createElement("div");
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
                    lansiranjaUspeh.textContent = `Launch: Success`;
                } else if(lansiranje.success === false) {
                    lansiranjaUspeh.textContent = "Launch: Failure"
                } else {
                    lansiranjaUspeh.textContent = "Launch: Unknown";
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
            
            let aboutDiv = document.createElement("div");
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
            value.textContent = `Valued at $${informacije.valuation.toLocaleString({ minimumFractionDigits: 2 })}.`;
            
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
        try {
            const rakete = await fetchData("https://api.spacexdata.com/v4/rockets");
            const lista = document.getElementById("listaRaketa");

            rakete.forEach((raketa) => {
                let raketaDiv = document.createElement("div");
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
            raketaMasa.textContent = `Mass: ${raketa.mass.kg.toLocaleString({minimumFractionDigits: 2 })} kg`

            let detaljiRakete = document.createElement("p");
            detaljiRakete.textContent = `Details: ${raketa.description}`;

            let buttonRaketa = document.createElement("a");
            buttonRaketa.className = "button";
            buttonRaketa.textContent = "Learn More";
            buttonRaketa.setAttribute("data-id", raketa.id);
            buttonRaketa.href = `raketa.html?raketaId=${raketa.id}`;
            
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
        } catch (error) {
            console.error("Greska pri dohvatanju:", error);
        };
        
    };
    async function pojedinacnaRaketa() {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const rocketId = urlParams.get("raketaId");
            // console.log(rocketId);
            const raketa = await fetchData(`https://api.spacexdata.com/v4/rockets/${rocketId}`);
            const raketeInfo = document.getElementById("infoRaketa");
            const sliderImg = document.getElementById("slider");

            let imeRakete = document.createElement("h1");
            imeRakete.textContent = raketa.name;
            
            let tipRakete = document.createElement("h3");
            tipRakete.textContent =`Type: ${raketa.type}`;

            let prviLet = document.createElement("h3");
            prviLet.textContent = `First Flight: ${raketa.first_flight}`;

            let cenaLeta = document.createElement("p");
            cenaLeta.textContent = `Cost per launch: ${raketa.cost_per_launch.toLocaleString({minimumFractionDigits: 2 })}`;

            let imeKompanije = document.createElement("p");
            imeKompanije.textContent = `Company: ${raketa.company}`;

            let uspehLeta = document.createElement("p");
            uspehLeta.textContent = `Success Rate: ${raketa.success_rate_pct}`;

            let statusRakete = document.createElement("p");
            statusRakete.className = "status";
            if(raketa.active) {
                statusRakete.textContent ="Active";
            } else {
                statusRakete.textContent = "Inactive";
            };

            let zemljaRakete = document.createElement("p");
            zemljaRakete.textContent = `Country: ${raketa.country}`;

            let raketaStages = document.createElement("p");
            raketaStages.textContent = `Stages: ${raketa.stages}`

            let raketaVisina = document.createElement("p");
            raketaVisina.textContent = `Height: ${raketa.height.meters} m`;

            let diametarRakete = document.createElement("p");
            diametarRakete.textContent = `Diameter: ${raketa.diameter.meters} m`;

            let masaRakete = document.createElement("p");
            masaRakete.textContent = `Mass: ${raketa.mass.kg.toLocaleString({minimumFractionDigits: 2 })} kg`;

            let detaljiRakete = document.createElement("p");
            detaljiRakete.textContent = `Details: ${raketa.description}`;

            let buttonDiv = document.createElement("div");
            buttonDiv.className = "buttonPojedinacna";

            let btn = document.createElement("a");
            btn.className = "btnWiki";
            btn.textContent = "Wiki";
            btn.href = raketa.wikipedia;
            btn.target = "_blank";

            let btn2 = document.createElement("a");
            btn2.className = "btnBack";
            btn2.textContent = "Back";
            btn2.href = "rakete.html";

            let imageDiv = document.createElement("div");
            imageDiv.className = "imageDiv";

            let slikeRakete = document.createElement("img");
            slikeRakete.className = "slika";
            slikeRakete.src = raketa.flickr_images[0];

            raketa.flickr_images.forEach((pathUrl, index) => {
                let sliderSlika = document.createElement("img");
                sliderSlika.classList.add("sliderSlika");
                sliderSlika.src = pathUrl;
                if(index === 0) {
                    sliderSlika.classList.add("activ");
                };

            imageDiv.appendChild(sliderSlika);
            sliderSlika.addEventListener("click", function(){
                slikeRakete.src = pathUrl;
                let slike = document.getElementsByClassName("sliderSlika");
                for(let elem of slike) {
                    elem.classList.remove("activ");
                };
                sliderSlika.classList.add("activ");
                });
            });
            
            raketeInfo.appendChild(imeRakete);
            raketeInfo.appendChild(tipRakete);
            raketeInfo.appendChild(prviLet);
            raketeInfo.appendChild(cenaLeta);
            raketeInfo.appendChild(imeKompanije);
            raketeInfo.appendChild(uspehLeta);
            raketeInfo.appendChild(statusRakete);
            raketeInfo.appendChild(zemljaRakete);
            raketeInfo.appendChild(raketaStages);
            raketeInfo.appendChild(raketaVisina);
            raketeInfo.appendChild(diametarRakete);
            raketeInfo.appendChild(masaRakete);
            raketeInfo.appendChild(detaljiRakete);
            raketeInfo.appendChild(buttonDiv);
            buttonDiv.appendChild(btn);
            buttonDiv.appendChild(btn2);
            sliderImg.appendChild(slikeRakete);
            sliderImg.appendChild(imageDiv);
        } catch (error) {
            console.error("Greska pri dohvatanju:", error);
        };
    };

    const currentPage = window.location.pathname;
    if (currentPage.includes("lansiranja.html")) {
        prikaziLansiranja();
    } else if (currentPage.includes("rakete.html")) {
        prikaziRakete();
    } else if (currentPage.includes("onama.html")) {
        prikaziInformacije();
    } else if (currentPage.includes("raketa.html")) {
        pojedinacnaRaketa();
    };
});















