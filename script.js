
	formcalcularimc.addEventListener('submit', (e) => {
		e.preventDefault()
	
   var calculoimc = calcularimc(parseFloat(peso.value),parseFloat(altura.value))
		resultado.innerText = `${calculoimc}`

    if(calculoimc >= 40){
      classificacao.innerText = "você está com Obesidade Grau III"
      
    }else if(calculoimc >=35 && calculoimc <= 39.9){
      classificacao.innerText = "você está com Obesidade Grau II"
    }else if (calculoimc >=30 && calculoimc <= 34.9){
      classificacao.innerText = "você está com Obesidade Grau I"
      
      }else if (calculoimc >=25 && calculoimc <=29.9){
      classificacao.innerText = "você está acima do peso"
      }else if (calculoimc >= 18.5 && calculoimc <= 24.9){
      classificacao.innerText = "você está com o peso normal"
      }else if (calculoimc <= 18,5){
      classificacao.innerText = "você está abaixo do peso"
      }
      
      
    

    
	})

  