function contar(){
    var ini = window.document.getElementById("inicio")
    var end = window.document.getElementById("fim")
    var pas = window.document.getElementById("passo")
    var res = window.document.getElementById("res")
    
    if(ini.value.length == 0 || end.value.length == 0 || pas.value.length == 0){
        window.alert("[ERRO!] Faltam dados!")
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(ini.value)
        var e = Number(end.value)
        var p = Number(pas.value)
        if (p <= 0) {
            window.alert("Passo inválido. Considerando passo como 1.")
            p = 1
        }
        if(i < e) {
            for( var c = i; c <= e; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            } 
        } else {
             for( var c = i; c >= e; c -= p){
               res.innerHTML += ` ${c} \u{1F449}` 
            }
        } 
        res.innerHTML += `\u{1F3c1}`
    }
}
