//requisição ajax

const comoUsar = document.querySelectorAll('[chamada]')

comoUsar.forEach(link => {
    const body = document.querySelector('#display')
    link.onclick = e => {
        e.preventDefault()
        fetch(link.getAttribute('chamada'))
            .then(resp => resp.text())
            .then(html => body.innerHTML = html)
    }
})


//https://paletadecores.com/paleta/fe958f/f3d7c2/8bb6a3/17a7a8/122f51/

const navActive = document.querySelectorAll('#navActive li')
navActive.forEach( e => {
        e.addEventListener('click', function() {
            navActive.forEach(link => {
                link.classList.remove('active')
            })
            this.classList.add('active')
        })
    }
)

//criar carta

function criarInformacoes(){
    const endereco = document.querySelector('#endereco').value
    const nomePersonagem = document.querySelector('#nomePersonagem').value
    const descricaoPersonagem = document.querySelector('#descricaoPersonagem').value

    const infoCards = {
        imagem: endereco,
        nome: nomePersonagem,
        descricao: descricaoPersonagem
    }

    const section = document.querySelector('#displayCard')
    /*const card = `<div class="card">
            <div >
                <img class="imagem" src=${infoCards.imagem} >
            </div>

            <div class="texto">
                <h1>${infoCards.nome}</h1>

                <p class="descricao">${infoCards.descricao}</p>

            </div>
        </div>`*/


    // Deus do céu, um dia eu vou conseguir aprimorar esse codigo!

    const div0 = document.createElement('div')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const img = document.createElement('img')
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    const setNome = document.createTextNode(`${infoCards.nome}`)
    const setDescricao = document.createTextNode(`${infoCards.descricao}`) 

    img.setAttribute('src', `${infoCards.imagem}`),
    img.classList.add('imagem'),
    div1.appendChild(img),
    div2.classList.add('texto'),
    h1.appendChild(setNome),
    div2.appendChild(h1),
    p.classList.add('descricao'),
    p.appendChild(setDescricao),
    div2.appendChild(p),
    div0.appendChild(div1),
    div0.appendChild(div2),
    div0.classList.add('card')


    section.appendChild(div0)
}



const enviar = document.querySelector('#enviar')
enviar.onclick = butao => {
    butao.preventDefault()
    const endereco = document.querySelector('#endereco')
    const nomePersonagem = document.querySelector('#nomePersonagem')
    const descricaoPersonagem = document.querySelector('#descricaoPersonagem')
    const padrao = ''
    criarInformacoes()
    endereco.value = padrao
    nomePersonagem.value = padrao
    descricaoPersonagem.value = padrao
    
}