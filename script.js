const borderRadius = document.querySelector('.border-radius')
const box = document.querySelector('.box')
const offsetX = document.querySelector('.offsetX')
const offsetY = document.querySelector('.offsetY')
const blur = document.querySelector('.blur')
const spread = document.querySelector('.spread')
const shadowColor = document.querySelector('.shadow-color')
const borderColor = document.querySelector('.border-color')
const out = document.querySelector('.out')
const outset = document.querySelector('.outset')
const inset = document.querySelector('.inset')
const horizontalShadow = document.querySelector('.horizontal-shadow')

//onchange
// oninput

borderRadius.oninput = cssGenerator
offsetX.oninput = cssGenerator
offsetY.oninput = cssGenerator
blur.oninput = cssGenerator
shadowColor.oninput = cssGenerator
spread.oninput = cssGenerator
borderColor.oninput = cssGenerator
out.oninput = cssGenerator
outset.oninput = cssGenerator
inset.oninput = cssGenerator
horizontalShadow.oninput = cssGenerator


function cssGenerator() {
  let shadiwInset = outset.checked ? '' : 'inset'
  box.style.borderRadius = borderRadius.value + "%";
  box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${shadowColor.value} ${shadiwInset}`;
  box.style.backgroundColor = `${borderColor.value}`;
  out.innerHTML = "box-shadow:" + `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px   rgba ${shadowColor.value} ${shadiwInset};<br>`
  out.innerHTML = out.innerHTML + "-webkit - box - shadow:" + `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px   rgba ${shadowColor.value} ${shadiwInset};<br>`
  out.innerHTML = out.innerHTML + "-moz-box-shadow:" + `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px   rgba ${shadowColor.value} ${shadiwInset};`
  horizontalShadow.textContent = `${offsetX.value}px`
}

cssGenerator()

