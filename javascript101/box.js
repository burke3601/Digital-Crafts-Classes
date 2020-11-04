function printBox(width,height){
    console.log(" - ".repeat(width));
    for (let i = 1; i < height - 1; i++) {
        console.log("|  " + "  ".repeat(width-2) + " ")
        
    }
}