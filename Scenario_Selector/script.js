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
                const outline = singleScenario.querySelector('.outline p')
                const layout = singleScenario.querySelector('.layout p')
                const starting_position = singleScenario.querySelector('.starting_position p')
                const priority = singleScenario.querySelector('.priority p')
                const objectives = singleScenario.querySelector('.objectives p')
                const victory_points = singleScenario.querySelector('.victory_points ul')
                const special_rules = singleScenario.querySelector('.special_rules')
                const image = singleScenario.querySelector('.layout img')

                let random = getAvailableNum(data.scenarios.length, rolledScenarios)
                rolledScenarios.push(random)
                
                const scenario = data.scenarios[random]

                title.innerText = scenario.name
                outline.innerText = scenario.outline
                layout.innerText = scenario.layout
                starting_position.innerText = scenario.starting_position
                priority.innerText = scenario.priority
                objectives.innerText = scenario.objectives
                image.src = './images/' + scenario.image 

                victory_points.innerHTML = '';
                scenario.victory_points.forEach(single => {
                    let li = document.createElement("li");
                    li.appendChild(document.createTextNode(single));
                    victory_points.appendChild(li);
                })

                special_rules.innerHTML = '<h3>Special Rules</h3>';
                if(scenario.special_rules[0] !== 'This scenario has no special rules'){
                    special_rules.classList.remove('hidden')
                    const gold = getComputedStyle(document.documentElement).getPropertyValue('--gold');
                    scenario.special_rules.forEach(single => {
                        let p = document.createElement('p')
                        let span = document.createElement('span')
                        span.appendChild(document.createTextNode(`${single.name}: `))
                        span.style.fontWeight = 600;
                        p.appendChild(span)
                        p.appendChild(document.createTextNode(single.description))
                        special_rules.appendChild(p)
                        if(single.table){
                            let table = document.createElement('table')
                            const row = table.insertRow();
                            row.style.borderBottom = '2px solid ' + gold
                            row.style.backgroundColor = gold + '33'
                            const cell1 = row.insertCell()
                            cell1.appendChild(document.createTextNode('D6'))
                            const cell2 = row.insertCell()
                            cell2.appendChild(document.createTextNode(('Result')))

                            for (let index = 0; index < single.table[0].length; index++) {
                                const row = table.insertRow();
                                const cell1 = row.insertCell()
                                cell1.appendChild(document.createTextNode(single.table[0][index]))
                                const cell2 = row.insertCell()
                                cell2.appendChild(document.createTextNode(single.table[1][index]))
                                if(index % 2 !== 0) {
                                    row.style.backgroundColor = gold + '33'
                                }
                            }

                            special_rules.appendChild(table)
                        }
                    })        
                } else if(!special_rules.classList.contains('hidden')) {
                    special_rules.classList.add('hidden')
                }
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

const expandScenario = (element) => {
    if(element.classList.contains('expanded')){
        element.classList.remove('expanded')
    } else {
        element.classList.add('expanded')
    }
}
 
const loadAll = () => {
    console.log('test')
}