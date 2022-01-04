function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  
    return precioConDescuento;
  }
  
  function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("price");
    const priceValue = inputPrice.value;
    
    const inputDiscount = document.getElementById("discount");
    const discountValue = inputDiscount.value;
  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
  }
  const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];