const elements = [
    {"name": "Hydrogen", "symbol": "H", "atomic_number": 1},
    {"name": "Helium", "symbol": "He", "atomic_number": 2},
    {"name": "Lithium", "symbol": "Li", "atomic_number": 3},
    {"name": "Beryllium", "symbol": "Be", "atomic_number": 4},
    {"name": "Boron", "symbol": "B", "atomic_number": 5},
    {"name": "Carbon", "symbol": "C", "atomic_number": 6},
    {"name": "Nitrogen", "symbol": "N", "atomic_number": 7},
    {"name": "Oxygen", "symbol": "O", "atomic_number": 8},
    {"name": "Fluorine", "symbol": "F", "atomic_number": 9},
    {"name": "Neon", "symbol": "Ne", "atomic_number": 10},
    {"name": "Sodium", "symbol": "Na", "atomic_number": 11},
    {"name": "Magnesium", "symbol": "Mg", "atomic_number": 12},
    {"name": "Aluminum", "symbol": "Al", "atomic_number": 13},
    {"name": "Silicon", "symbol": "Si", "atomic_number": 14},
    {"name": "Phosphorus", "symbol": "P", "atomic_number": 15},
    {"name": "Sulfur", "symbol": "S", "atomic_number": 16},
    {"name": "Chlorine", "symbol": "Cl", "atomic_number": 17},
    {"name": "Argon", "symbol": "Ar", "atomic_number": 18},
    {"name": "Potassium", "symbol": "K", "atomic_number": 19},
    {"name": "Calcium", "symbol": "Ca", "atomic_number": 20},
    {"name": "Scandium", "symbol": "Sc", "atomic_number": 21},
    {"name": "Titanium", "symbol": "Ti", "atomic_number": 22},
    {"name": "Vanadium", "symbol": "V", "atomic_number": 23},
    {"name": "Chromium", "symbol": "Cr", "atomic_number": 24},
    {"name": "Manganese", "symbol": "Mn", "atomic_number": 25},
    {"name": "Iron", "symbol": "Fe", "atomic_number": 26},
    {"name": "Cobalt", "symbol": "Co", "atomic_number": 27},
    {"name": "Nickel", "symbol": "Ni", "atomic_number": 28},
    {"name": "Copper", "symbol": "Cu", "atomic_number": 29},
    {"name": "Zinc", "symbol": "Zn", "atomic_number": 30},
    {"name": "Gallium", "symbol": "Ga", "atomic_number": 31},
    {"name": "Germanium", "symbol": "Ge", "atomic_number": 32},
    {"name": "Arsenic", "symbol": "As", "atomic_number": 33},
    {"name": "Selenium", "symbol": "Se", "atomic_number": 34},
    {"name": "Bromine", "symbol": "Br", "atomic_number": 35},
    {"name": "Krypton", "symbol": "Kr", "atomic_number": 36},
    {"name": "Rubidium", "symbol": "Rb", "atomic_number": 37},
    {"name": "Strontium", "symbol": "Sr", "atomic_number": 38},
    {"name": "Yttrium", "symbol": "Y", "atomic_number": 39},
    {"name": "Zirconium", "symbol": "Zr", "atomic_number": 40},
    {"name": "Niobium", "symbol": "Nb", "atomic_number": 41},
    {"name": "Molybdenum", "symbol": "Mo", "atomic_number": 42},
    {"name": "Technetium", "symbol": "Tc", "atomic_number": 43},
    {"name": "Ruthenium", "symbol": "Ru", "atomic_number": 44},
    {"name": "Rhodium", "symbol": "Rh", "atomic_number": 45},
    {"name": "Palladium", "symbol": "Pd", "atomic_number": 46},
    {"name": "Silver", "symbol": "Ag", "atomic_number": 47},
    {"name": "Cadmium", "symbol": "Cd", "atomic_number": 48},
    {"name": "Indium", "symbol": "In", "atomic_number": 49},
    {"name": "Tin", "symbol": "Sn", "atomic_number": 50},
    {"name": "Antimony", "symbol": "Sb", "atomic_number": 51},
    {"name": "Tellurium", "symbol": "Te", "atomic_number": 52},
    {"name": "Iodine", "symbol": "I", "atomic_number": 53},
    {"name": "Xenon", "symbol": "Xe", "atomic_number": 54},
    {"name": "Cesium", "symbol": "Cs", "atomic_number": 55},
    {"name": "Barium", "symbol": "Ba", "atomic_number": 56},
    {"name": "Lanthanum", "symbol": "La", "atomic_number": 57},
    {"name": "Cerium", "symbol": "Ce", "atomic_number": 58},
    {"name": "Praseodymium", "symbol": "Pr", "atomic_number": 59},
    {"name": "Neodymium", "symbol": "Nd", "atomic_number": 60},
    {"name": "Promethium", "symbol": "Pm", "atomic_number": 61},
    {"name": "Samarium", "symbol": "Sm", "atomic_number": 62},
    {"name": "Europium", "symbol": "Eu", "atomic_number": 63},
    {"name": "Gadolinium", "symbol": "Gd", "atomic_number": 64},
    {"name": "Terbium", "symbol": "Tb", "atomic_number": 65},
    {"name": "Dysprosium", "symbol": "Dy", "atomic_number": 66},
    {"name": "Holmium", "symbol": "Ho", "atomic_number": 67},
    {"name": "Erbium", "symbol": "Er", "atomic_number": 68},
    {"name": "Thulium", "symbol": "Tm", "atomic_number": 69},
    {"name": "Ytterbium", "symbol": "Yb", "atomic_number": 70},
    {"name": "Lutetium", "symbol": "Lu", "atomic_number": 71},
    {"name": "Hafnium", "symbol": "Hf", "atomic_number": 72},
    {"name": "Tantalum", "symbol": "Ta", "atomic_number": 73},
    {"name": "Tungsten", "symbol": "W", "atomic_number": 74},
    {"name": "Rhenium", "symbol": "Re", "atomic_number": 75},
    {"name": "Osmium", "symbol": "Os", "atomic_number": 76},
    {"name": "Iridium", "symbol": "Ir", "atomic_number": 77},
    {"name": "Platinum", "symbol": "Pt", "atomic_number": 78},
    {"name": "Gold", "symbol": "Au", "atomic_number": 79},
    {"name": "Mercury", "symbol": "Hg", "atomic_number": 80},
    {"name": "Thallium", "symbol": "Tl", "atomic_number": 81},
    {"name": "Lead", "symbol": "Pb", "atomic_number": 82},
    {"name": "Bismuth", "symbol": "Bi", "atomic_number": 83},
    {"name": "Polonium", "symbol": "Po", "atomic_number": 84},
    {"name": "Astatine", "symbol": "At", "atomic_number": 85},
    {"name": "Radon", "symbol": "Rn", "atomic_number": 86},
    {"name": "Francium", "symbol": "Fr", "atomic_number": 87},
    {"name": "Radium", "symbol": "Ra", "atomic_number": 88},
    {"name": "Actinium", "symbol": "Ac", "atomic_number": 89},
    {"name": "Thorium", "symbol": "Th", "atomic_number": 90},
    {"name": "Protactinium", "symbol": "Pa", "atomic_number": 91},
    {"name": "Uranium", "symbol": "U", "atomic_number": 92},
    {"name": "Neptunium", "symbol": "Np", "atomic_number": 93},
    {"name": "Plutonium", "symbol": "Pu", "atomic_number": 94},
    {"name": "Americium", "symbol": "Am", "atomic_number": 95},
    {"name": "Curium", "symbol": "Cm", "atomic_number": 96},
    {"name": "Berkelium", "symbol": "Bk", "atomic_number": 97},
    {"name": "Californium", "symbol": "Cf", "atomic_number": 98},
    {"name": "Einsteinium", "symbol": "Es", "atomic_number": 99},
    {"name": "Fermium", "symbol": "Fm", "atomic_number": 100},
    {"name": "Mendelevium", "symbol": "Md", "atomic_number": 101},
    {"name": "Nobelium", "symbol": "No", "atomic_number": 102},
    {"name": "Lawrencium", "symbol": "Lr", "atomic_number": 103},
    {"name": "Rutherfordium", "symbol": "Rf", "atomic_number": 104},
    {"name": "Dubnium", "symbol": "Db", "atomic_number": 105},
    {"name": "Seaborgium", "symbol": "Sg", "atomic_number": 106},
    {"name": "Bohrium", "symbol": "Bh", "atomic_number": 107},
    {"name": "Hassium", "symbol": "Hs", "atomic_number": 108},
    {"name": "Meitnerium", "symbol": "Mt", "atomic_number": 109},
    {"name": "Darmstadtium", "symbol": "Ds", "atomic_number": 110},
    {"name": "Roentgenium", "symbol": "Rg", "atomic_number": 111},
    {"name": "Copernicium", "symbol": "Cn", "atomic_number": 112},
    {"name": "Nihonium", "symbol": "Nh", "atomic_number": 113},
    {"name": "Flerovium", "symbol": "Fl", "atomic_number": 114},
    {"name": "Moscovium", "symbol": "Mc", "atomic_number": 115},
    {"name": "Livermorium", "symbol": "Lv", "atomic_number": 116},
    {"name": "Tennessine", "symbol": "Ts", "atomic_number": 117},
    {"name": "Oganesson", "symbol": "Og", "atomic_number": 118},
]

// Mapping of elements by symbol and other utility functions
const elementSymbols = elements.map(x => x.symbol);
const elementsBySymbol = {};
elements.forEach(x => elementsBySymbol[x.symbol] = x.atomic_number - 1);

const romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
elements.forEach(e => e.symbol_contains_roman_numerals = romanNumerals.includes(e.symbol[0]));

function getElementBySymbol(s) {
    return elements[elementsBySymbol[s]];
}

function atomicSum(listOfSymbols) {
    return listOfSymbols.reduce((sum, s) => sum + getElementBySymbol(s).atomic_number, 0);
}

function stringifyElementList(symbols) {
    return symbols.map(s => `${s}(atomic number: ${getElementBySymbol(s).atomic_number})`).join(', ');
}

function elementsToTarget(requiredSymbols, target) {
    let symbols = [...requiredSymbols];
    let currentCount = atomicSum(symbols);

    while (currentCount < target) {
        let diff = target - currentCount;
        let newElementIdx = diff - 1;
        while (elements[newElementIdx].symbol_contains_roman_numerals) {
            newElementIdx -= 1;
        }
        currentCount += elements[newElementIdx].atomic_number;
        symbols.push(elements[newElementIdx].symbol);
    }

    if (atomicSum(symbols) !== target) {
        throw new Error("Sum does not match target");
    }
    return symbols;
}

function findElements(text) {
    elementSymbols.sort((a, b) => b.length - a.length);

    let result = [];
    let used = Array(text.length).fill(false);

    for (let i = 0; i < text.length; i++) {
        if (used[i]) continue;

        for (let symbol of elementSymbols) {
            if (text.startsWith(symbol, i)) {
                if (used.slice(i, i + symbol.length).every(v => !v)) {
                    result.push(symbol);
                    for (let j = i; j < i + symbol.length; j++) {
                        used[j] = true;
                    }
                    break;
                }
            }
        }
    }
    return result;
}

// Function to handle form submission
document.getElementById('password-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');
    
    let requiredSymbols = findElements(password);

    if (atomicSum(requiredSymbols) === 200) {
        resultDiv.innerHTML = `
            <p>No need to do anything</p>
            <p>The atomic numbers in your password already add up to 200!</p>
        `;
        return;
    }

    if (atomicSum(requiredSymbols) > 200) {
        resultDiv.innerHTML = `
            <p>Delete everything.</p>
            <p>The atomic numbers already in your password are: ${stringifyElementList(requiredSymbols)}. These add up to ${atomicSum(requiredSymbols)}, which is over 200! We can't do anything until you bring that down :(</p>
        `;
        return;
    }

    let symbolList = elementsToTarget([...requiredSymbols], 200);

    let newSymbols = [...symbolList];
    requiredSymbols.forEach(x => {
        let index = newSymbols.indexOf(x);
        if (index > -1) {
            newSymbols.splice(index, 1);
        }
    });

    resultDiv.innerHTML = `
        <p>Add to your password the text: ${newSymbols.join('')}</p>
        <p>Currently, your password includes the elements: ${stringifyElementList(requiredSymbols)}. These sum to ${atomicSum(requiredSymbols)}.</p>
        <p>In order to equal a sum of 200, you need to add ${200 - atomicSum(requiredSymbols)}.</p>
        <p>In order to do this, you are adding the elements: ${stringifyElementList(newSymbols)}, which sum to ${atomicSum(newSymbols)}.</p>
    `;
});
