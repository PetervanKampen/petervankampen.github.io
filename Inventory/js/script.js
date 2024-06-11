let factionsJSON = "data/factions.json";
let minisJSON = "data/minis.json";

const fetchJSON = (json) => {
    return fetch(json)
        .then(response => response.json())
        .then(data => {return data});
}

const factionContainer = document.querySelector("[js-faction-container]");

let factions = fetchJSON(factionsJSON);
let minis = fetchJSON(minisJSON);

factions.then(factionData => {
    let factionArray = factionData.factions;

    if (factionArray.length > 0) {
        factionContainer.innerHTML = '';

        minis.then(miniData => {
            let miniArray = miniData.minis;
    
            factionArray.forEach((faction) => {
                let factionDiv = document.createElement('div');
                factionDiv.classList.add('faction', 'collapse');
                factionDiv.innerText = faction.name;
                factionDiv.addEventListener('click', (e) => {
                    if (factionDiv.classList.contains('collapse')) {
                        factionDiv.classList.remove('collapse');
                        return;
                    }

                    factionDiv.classList.add('collapse');
                })

                let minisPerFactionDiv = document.createElement('div');

                miniArray.filter((mini) => mini.faction === faction.name)
                    .sort((a, b) => b.isHero - a.isHero)
                    .forEach((mini) => {
                        let miniDiv = document.createElement('div');
                        miniDiv.classList.add('mini', 'grid');
                        
                        let amountSpan = document.createElement('span');
                        amountSpan.classList.add('amountSpan');
                        amountSpan.innerText = `${mini.amount}x`;
                        
                        let nameSpan = document.createElement('span');
                        amountSpan.classList.add('nameSpan');
                        nameSpan.innerText = mini.name;
                        
                        let variationSpan = document.createElement('span');
                        amountSpan.classList.add('variationSpan');
                        variationSpan.innerText = mini.variation;

                        miniDiv.append(amountSpan, nameSpan, variationSpan);
                        minisPerFactionDiv.append(miniDiv);
                    });

                factionDiv.append(minisPerFactionDiv);
                factionContainer.append(factionDiv);
            });
        })
    }
});