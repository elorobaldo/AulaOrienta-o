class Retangulo{
  constructor(altura, largura){
    this.altura = altura,
    this.largura = largura
  }
    calcularArea(){
    return this.altura * this.largura;
  }

  areaResposta(){
    return this.calcularArea();
  }
}


let retangulo = new Retangulo("10", "10");
let retan = new Retangulo("60", "30");
console.log(retangulo.altura)
console.log(retangulo.largura)
console.log(retan.altura)
console.log(retan.largura)
console.log(retangulo.areaResposta())
console.log(retan.areaResposta())