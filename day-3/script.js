function fetchData(silteme) {
    return new Promise ((resolve,reject)=> {
        fetch(silteme).then(aqparat => {
            if (aqparat.ok) {
                resolve(aqparat.json())
            }else{
                reject(new Error("Aqparat alu mumkin bolmady"))
            }
        })
    })
}

fetchData("https://jsonplaceholder.typicode.com/users").then(natizhe=>{
    // natizhe.forEach(element => {
    //     console.log(element.name);
        
    // });
    displayData(natizhe)
    // console.log(natizhe);
    
}).catch(qate=>{
    console.log(qate.toString());
})

function displayData(natizhe) {
              
     let container = document.querySelector('.container')

    natizhe.forEach(element => {
        let divElement = document.createElement('div')
        let title = document.createElement('h2')
        let p = document.createElement('p')

        divElement.classList.add('cart')
    
        divElement.appendChild(title)
        divElement.appendChild(p)

        title.textContent = element.name
        p.textContent = element.email

        container.appendChild(divElement)
    });
    // let divElement = document.createElement('div')
    // let title = document.createElement('h2')
    // let p = document.createElement('p')

    // divElement.appendChild(title)
    // divElement.appendChild(p)
    // natizhe.forEach(element => {
    //     console.log(element.name);
        
    // });
}

