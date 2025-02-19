const inname = document.getElementById('input-name')
const indesc = document.getElementById('input-desc')
const btn = document.getElementById('btn')
const postarea = document.getElementById('post-area')

btn.addEventListener('click', ()=>{
    const name = inname.value;
    const desc = indesc.value;
    
    if (name && desc) {
        console.log("hi");
        
        let ndiv = document.createElement('div')
        ndiv.classList.add("post");
        ndiv.innerHTML =''
        console.log(ndiv);
    
        const h1 = document.createElement('h1')
        h1.innerText = name;
    
        const p = document.createElement('p')
        p.innerText = desc;
    
        
        ndiv.appendChild(h1)
        ndiv.appendChild(p) // postarea.appendChild(ndiv) it's appen the element in last position
        postarea.prepend(ndiv) // it add the element in the frist position
        document.getElementById('form').reset();
    }
})
