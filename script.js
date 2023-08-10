function contar(){
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if(inicio.value.length == '' || fim.value.length == '' || passo.value.length == ''){
        res.innerHTML = 'Impossível executar a contagem!!!'
    }else{
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            alert('Passo foi inválido! Considerando o PASSO 1')
            p = 1
        }

        if(i < f){
            for(let c = i;c <= f; c += p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += ` \u{1f3c1}`
    }
}