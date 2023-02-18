numberOfNotes = document.querySelectorAll('.box').length; 

for(var i=0 ; i<numberOfNotes; i++){
    document.querySelectorAll(".box")[i].addEventListener("click",function(){ 
     var notesChar = this.className[0]; 
     playNotes(notesChar); 
    });
}

document.addEventListener("keypress",function(e){
    playNotes(e.charCode);
    console.log(e.charCode); 
})


function playNotes(notes){
    switch (notes) {
        case 'c': 
            var cNote = new Audio("sounds/c.wav");
            cNote.play();
            break; 
        case 115: 
            var cNote = new Audio("sounds/c.wav");
            cNote.play();
            break;
        case 'cshrp': 
            var ccNote = new Audio("sounds/cshrp.wav");
            ccNote.play();    
            break; 
        case 97: 
            var cNote = new Audio("sounds/cshrp.wav");
            cNote.play();
            break;
        case 'd':
            var dNote = new Audio("sounds/d.wav");
            dNote.play();
            break;
        case 100:
            var dNote = new Audio("sounds/d.wav");
            dNote.play();
            break;
        case 'dshrp':
            var ddNote = new Audio("sounds/eb.wav");
            ddNote.play();
            break;
        case 102:
            var ddNote = new Audio("sounds/eb.wav");
            ddNote.play();
            break;
        case 'e':
            var eNote = new Audio("sounds/e.wav");
            eNote.play();
            break; 
        case 103:
                var eNote = new Audio("sounds/e.wav");
                eNote.play();
                break;
        case 'f':
            var fNote = new Audio("sounds/f.wav");
            fNote.play();
            break; 
        case 104:
                var fNote = new Audio("sounds/f.wav");
                fNote.play();
                break; 
        case 'fshrp':
            var ffNote = new Audio("sounds/fshrp.wav");
            ffNote.play();
            break; 
        case 106:
            var ffNote = new Audio("sounds/fshrp.wav");
            ffNote.play();
            break; 
        case 'g':
            var gNote = new Audio("sounds/g.wav");
            gNote.play();
            break; 
        case 107:
            var gNote = new Audio("sounds/g.wav");
            gNote.play();
            break;
        case 'gshrp':
            var ggNote = new Audio("sounds/gshrp.wav");
            ggNote.play();
            break; 
        case 108: 
            var ggNote = new Audio("sounds/gshrp.wav");     
            ggNote.play(); 
            break; 
        case 'a':
            var aNote = new Audio("sounds/a.wav");
            aNote.play();
            break; 
        case 351:
                var aNote = new Audio("sounds/a.wav");
                aNote.play();
                break; 
        case 'bb':
            var bbNote = new Audio("sounds/bb.wav");  
            bbNote.play();
            break; 
        case 105:
                var bbNote = new Audio("sounds/bb.wav");  
                bbNote.play();
                break; 
        case 'b':
            var bNote = new Audio("sounds/b.wav");
            bNote.play();
            break;  
        case 44:
            var bNote = new Audio("sounds/b.wav");
            bNote.play();
            break;            
        default: console.log(notes);
    }
}