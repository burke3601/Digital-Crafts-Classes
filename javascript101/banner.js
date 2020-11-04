function printBanner(text){
    let l = text.length;
    let s = "";
    let i = 0;
    for(let i = 0; i < l+2; i ++) s += '-';
        
        console.log(s)
        console.log("-" + text + "-")
        console.log(s)

    

}
printBanner("Good Morning Everyone")

function printAgain(text){
    console.log("-".repeat(text.length+2)+ "-\n"+ text + "-\n".repeat(text.length+2))
}
printAgain("Why would you do that?")

// need to fix this