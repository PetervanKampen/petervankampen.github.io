const generate = () => {
    const side = randomNum(2)
    const sideContainer = document.querySelector('.side_selection')
    const sideResult = document.querySelector('.side_selection h1')

    sideContainer.classList.remove('hidden')

    if(side == 0){
        sideResult.innerText = 'Evil'
        sideResult.classList.remove('good')
        sideResult.classList.add('evil')
    } else {
        sideResult.innerText = 'Good'
        sideResult.classList.add('good')
        sideResult.classList.remove('evil')
    }

    const scenarioResultAll = document.querySelectorAll('.scenario')
    let rolledScenarios = []

    fetch('./scenarios.json')
        .then(response => response.json())
        .then(data => {
            scenarioResultAll.forEach(singleScenario => {

                singleScenario.classList.remove('hidden')
                
                const title = singleScenario.querySelector('.title')

                let random = getAvailableNum(data.scenarios.length, rolledScenarios)
                rolledScenarios.push(random)
                
                const scenario = data.scenarios[random]

                title.innerText = scenario.name
            })
        })
        .catch(err => console.log(err));

}

const randomNum = (cap) => {
    return Math.floor(Math.random() * cap)
}

const getAvailableNum = (cap, rolled) => {
    let random = randomNum(cap)
    if(rolled.includes(random)){
        random = getAvailableNum(cap, rolled)
    }
    return random
}