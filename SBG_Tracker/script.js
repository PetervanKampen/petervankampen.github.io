window.addEventListener('keydown',function(e){if(e.keyIdentifier=='U+000A'||e.keyIdentifier=='Enter'||e.keyCode==13){if(e.target.nodeName=='INPUT'&&e.target.type=='text'){e.preventDefault();return false;}}},true);

function statBlock(id){
    var target = document.getElementById("stats"+id);
    if(target.style.display == "none"){
        target.style.display = "inline-block";
    } else {
        target.style.display = "none";
    }
}