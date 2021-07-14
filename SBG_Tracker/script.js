window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);

function statBlock(id){
    var target = document.getElementById("stats"+id);
    if(target.style.display == "none"){
        target.style.display = "inline-block";
    } else {
        target.style.display = "none";
    }
}

function lowerMight(id){
    var target = document.getElementById("might"+id); 
    var newContent = parseInt(target.innerHTML) - 1;
    target.innerHTML = newContent;
}

function upMight(id){
    var target = document.getElementById("might"+id); 
    var newContent = parseInt(target.innerHTML) + 1;
    target.innerHTML = newContent;
}

function lowerWill(id){
    var target = document.getElementById("will"+id); 
    var newContent = parseInt(target.innerHTML) - 1;
    target.innerHTML = newContent;
}

function upWill(id){
    var target = document.getElementById("will"+id); 
    var newContent = parseInt(target.innerHTML) + 1;
    target.innerHTML = newContent;
}

function lowerFate(id){
    var target = document.getElementById("fate"+id); 
    var newContent = parseInt(target.innerHTML) - 1;
    target.innerHTML = newContent;
}

function upFate(id){
    var target = document.getElementById("fate"+id); 
    var newContent = parseInt(target.innerHTML) + 1;
    target.innerHTML = newContent;
}

function lowerWound(id){
    var target = document.getElementById("wound"+id); 
    var newContent = parseInt(target.innerHTML) - 1;
    target.innerHTML = newContent;
}

function upWound(id){
    var target = document.getElementById("wound"+id); 
    var newContent = parseInt(target.innerHTML) + 1;
    target.innerHTML = newContent;
}

var heroAmount = 0;

function addHero(){
    heroAmount++;
    document.getElementById("container").innerHTML += 
    `<div class="hero">          
            <input type="text" class="form-control" placeholder="Hero Name">
            <button type="button" class="btn btn-outline-secondary btn-sm" onclick="statBlock('`+heroAmount+`')">Stats</button>
            <div class="stats" id="stats`+heroAmount+`" style="display: none;">
                <table style="width:90%">
                    <tr>
                        <td>Mv</td>
                        <td>F</td>
                        <td>S</td>
                        <td>D</td>
                        <td>A</td>
                        <td>W</td>
                        <td>C</td>
                    </tr>
                    <tr>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>
                        <td contenteditable='true'></td>               
                      </tr>
                </table>
            </div>
            <div class="resources">
                <div>
                    <p><b>Might</b></p> 
                    <br>
                    <input type="text" class="form-control" placeholder="Amount">
                    <br>
                    <button onclick="lowerMight('`+heroAmount+`')">&#8249;</button>
                    <p id="might`+heroAmount+`">0</p>
                    <button onclick="upMight('`+heroAmount+`')">&#8250;</button>
                </div>
                <div>
                    <p><b>Will</b></p> 
                    <br>
                    <input type="text" class="form-control" placeholder="Amount">
                    <br>
                    <button onclick="lowerWill('`+heroAmount+`')">&#8249;</button>
                    <p id="will`+heroAmount+`">0</p>
                    <button onclick="upWill('`+heroAmount+`')">&#8250;</button>
                </div>
                <div>
                    <p><b>Fate</b></p> 
                    <br>
                    <input type="text" class="form-control" placeholder="Amount">
                    <br>
                    <button onclick="lowerFate('`+heroAmount+`')">&#8249;</button>
                    <p id="fate`+heroAmount+`">0</p>
                    <button onclick="upFate('`+heroAmount+`')">&#8250;</button>
                </div>
                <div>
                    <p><b>Wounds</b></p> 
                    <br>
                    <input type="text" class="form-control" placeholder="Amount">
                    <br>
                    <button onclick="lowerWound('`+heroAmount+`')">&#8249;</button>
                    <p id="wound`+heroAmount+`">0</p>
                    <button onclick="upWound('`+heroAmount+`')">&#8250;</button>
                </div>
                
            </div>

        </div>`;
}