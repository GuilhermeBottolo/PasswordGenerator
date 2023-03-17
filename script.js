function dados(){
    let lista = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$',  '&', '*'
      ];

    let quantidade = 8;
    let escolhidos = [];
    
    
    
    for (let i = 0; i < quantidade; i++) {
        let index = Math.floor(Math.random() * lista.length); 
        let item = lista.splice(index, 1)[0]; 
        escolhidos.push(item); 
      }
         
    
    
    let titulo2 = document.getElementById('text');
    titulo2.innerHTML = ('Aqui está: ', escolhidos.join('')) 
}
   