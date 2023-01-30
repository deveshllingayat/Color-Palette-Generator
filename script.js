//selecting the container and the generate button
const container = document.querySelector(".container");
const generateBtn = document.querySelector(".generate-btn");

const maxPaletteBoxes = 14;//max no. of colors inn the palette
// generating a random hex color code
const generatePalette = () => {
    container.innerHTML = '';//to clear the previous palette after generating another one
  for (let i = 0; i < maxPaletteBoxes; i++) {
    //generating random hex values 
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;//making random hex value to 6 digit by filling remaining ones with 0

    const color = document.createElement("li");//creating a list element 
    color.classList.add("color");//adding class 'color' to the list element to apply css
    //creating color box inside the li element
    color.innerHTML = `<div class="rect-box"style='background-color:${randomHex}'></div>
        <span class="hex-value">${randomHex}</span>`;
    //to copy the color when clicked
    color.addEventListener("click",()=>copyColor(color,randomHex));
    //to add that box to webpage
    container.appendChild(color);
  }
};
generatePalette();//color palette on page reload

//to copy the hex code to clipboard
const copyColor = (element,hexval)=>{
    const colorElement = element.querySelector(".hex-value");//selecting hex-value class of the li element
    //copying the hex code to clipboard
    navigator.clipboard.writeText(hexval).then(()=>{
        colorElement.innerText ="Copied";
        setTimeout(() => colorElement.innerText = hexval, 1000);
    }).catch(()=>alert("Failed to copy color code~"));//handling error if failed to copy color code
}

generateBtn.addEventListener("click", generatePalette);//calling the function on clicking generate button
