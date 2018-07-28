const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function(){
    
    it('si la palabra termina en ar se le quitan los dos caracteres', function(){
        const translation = platzom("programar")
        expect(translation).to.equal("program")
    })
    
    it('si la pallabra inicia con Z se le añade pe al final', function(){
        const translation = platzom("Zorro")
        expect(translation).to.equal("Zorrope")
        
        const translation2 = platzom("Zarpar")
        expect(translation2).to.equal("Zarppe")
    })
    
    it('si la palabra traducida tiene mas de 10 letras se debe partir a la mitad y unir con guion', function(){
        const translation = platzom("abecedario")
        expect(translation).to.equal("abece-dario")
    })
    
    it('si la palabra original es un palindromo , ninguna de las reglas anteriores cuenta y se \n\
 regresa la misma palabra intercalando mayusculas y minusculas', function(){
        const translation = platzom("sometemos")
        expect(translation).to.equal("SoMeTeMoS")
    })
})


