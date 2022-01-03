const calcArea = side => Math.pow(side,2);
const calcPerimeter = side => side * 4;
const calTringleArea = (base, height) =>  (base*height)/2
const calTringlePerimeter = (side1, side2, side3) => side1+side2+side3;
const PI = Math.PI;
const calCirclePerimeter = (radio) => 2*radio*PI;
const calCircleArea = (radio) => (radio*radio)*PI;

const getSquareArea = () => {
    const side = document.getElementById("square side").value
    const resultContainer = document.getElementById("result__container")

    resultContainer.innerHTML= `<span class="result__text">Area: ${calcArea(side)} cm<sup>2</sup></span>`
    resultContainer.style.display = "block"//display the result 
} 
const getSquarePerimeter = () => {
    const side = document.getElementById("square side").value
    const resultContainer = document.getElementById("result__container")

    resultContainer.innerHTML= `<span class="result__text">Perimeter: ${calcPerimeter(side)} cm</span>`
    resultContainer.style.display = "block"//display the result 
} 
const getTriangleArea = () => {
    const base = document.getElementById("triangleBase").value
    const height = document.getElementById("triangleHeight").value
    const resultContainer = document.getElementById("result__container--triangle")

    resultContainer.innerHTML= `<span class="result__text">Area: ${calTringleArea(base,height)} cm<sup>2</sup></span>`
    resultContainer.style.display = "block"//display the result 
} 
const getTrianglePerimeter = () => 
{
    const side1 = document.getElementById("triangleside1").value
    const side2 = document.getElementById("triangleside2").value
    const side3 = document.getElementById("triangleside3").value
    const resultContainer = document.getElementById("result__container--triangle")

    resultContainer.innerHTML= `<span class="result__text">Perimeter: ${calTringlePerimeter(side1,side2,side3)} cm</span>`
    resultContainer.style.display = "block"//display the result 
}
const getCircleArea = () => 
{
    const radio = document.getElementById("circleradius").value
    const resultContainer = document.getElementById("result__container--circle")
    
    resultContainer.innerHTML= `<span class="result__text">Area: ${calCircleArea(radio)} cm</span>`
    resultContainer.style.display = "block"//display the result 
}
const getCirclePerimeter = () =>
{
    const radio = document.getElementById("circleradius").value
    const resultContainer = document.getElementById("result__container--circle")
    
    resultContainer.innerHTML= `<span class="result__text">Area: ${calCirclePerimeter(radio)} cm</span>`
    resultContainer.style.display = "block"//display the result 
}









function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        let trianguloPequenoLadoA; // PENDIENTE
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}