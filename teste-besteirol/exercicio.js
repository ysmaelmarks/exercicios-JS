    function recebeNumeroProximo (numeroReferencia, arrayNumeros){
        let numeroMaisProximo = arrayNumeros[0]
        let diferencaDoMaisProximo = numeroReferencia - numeroMaisProximo
        diferencaDoMaisProximo = Math.abs(diferencaDoMaisProximo)
        for (let i = 1; i < arrayNumeros.length; i++){
        let numero = arrayNumeros[i]
        let diferenca = Math.abs(numeroReferencia - numero)
        if (diferenca < diferencaDoMaisProximo){
            numeroMaisProximo = numero
            diferencaDoMaisProximo = diferenca
        }
        }
        return numeroMaisProximo
    }
    console.log(recebeNumeroProximo(50, [51,52,53,5]))
    