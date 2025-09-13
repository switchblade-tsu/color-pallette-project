//main class for generating color palettes
class ColorPaletteGenerator {
        constructor() {
                this.paletteContainer = document.getElementById('paletteConatiner')
                this.generateBtn = document.getElementById('generateBtn')
        }
}

//array to hold generated colors
this.color = [];

//set to hold locked colors
this.lockedColors = new Set();

//initialize the generator
this.init();


init() {
        this.generatePalette();
        this.setupEventListners();
}

//set up event listeners for buttons
setupEventListners() {

        this.generateBtn.addEventListner('click', () => this.generatePalette());
}


//generate a new color palette
generateRandomColor(){
        const hue = Math.floor(Math.random() * 360);
        const saturation = Math.floor(Math.random() * 50) + 50;
        const lightness = Math.floor(Math.random() * 40) + 30;
        return {
                hsl: `hsl(, %, %)`,
                hex: this.hslToHex(hue, saturation, lightness)
        };
}


//convert HSL to HEX
hslToHex(h, s, l) {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
}