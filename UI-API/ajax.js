const ajax = (url, callback, method='GET')=>{
    if(!url) return console.error("Request Required")
    if(!callback) return console.error("Callback Required")
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", evt=>{
        let req = evt.target;
        if(req.readyState !== 4) return;
        if(req.status === 200) return callback(req.response)
        callback("")
    })
    request.open(method,url)
    request.send()
}

ajax("test2.txt", (r)=>{
    let li = document.createElement("li")
    document.body.append(li)
    li.append(r)
})

ajax("test3.txt", (r)=>{
    let li = document.createElement("li")
    document.body.append(li)
    li.append(r)
})

ajax("test4.txt", (r)=>{
    let li = document.createElement("li")
    document.body.append(li)
    li.append(r)
})



// const callback = (r)=> {
//     let ul = document.querySelector("ul")
//     let li = document.querySelector("il")
//     li.append(r)
//     ul.append(li)
// }

// ajax("test2.txt", callback)
// ajax("test3.txt", callback)
// ajax("test4.txt", callback)
