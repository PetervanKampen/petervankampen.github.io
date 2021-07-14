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