// Initialize the map and set its view to India
var map = L.map('map').setView([20.5937, 78.9629], 5);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);
// Ajanta and Ellora Caves
var ajantaEllora = L.marker([20.5534, 75.7033]).addTo(map);
ajantaEllora.bindPopup(`
    <b>Ajanta and Ellora Caves</b><br>
    <img src="ajanta and elloracaves.jpeg" alt="Ajanta and Ellora Caves" width="150"><br>
    Ancient Buddhist paintings and sculptures from the 2nd century BCE to 5th century CE.
`);

// Kangra Valley
var kangraValley = L.marker([32.2190, 76.3223]).addTo(map);
kangraValley.bindPopup(`
    <b>Kangra Valley</b><br>
    <img src="kangra valley1.jpeg" alt="Kangra Valley" width="150"><br>
    Known for Pahari miniature paintings from the 17th to 19th centuries.
`);

// Santiniketan
var santiniketan = L.marker([23.6775, 87.6856]).addTo(map);
santiniketan.bindPopup(`
    <b>Santiniketan</b><br>
    <img src="Santiniketan.jpg" alt="Santiniketan" width="150"><br>
    Hub of the Bengal School of Art, founded by Rabindranath Tagore.
`);

// Tanjore
var tanjore = L.marker([10.7867, 79.1376]).addTo(map);
tanjore.bindPopup(`
    <b>Tanjore</b><br>
    <img src="tanjore.jpeg" alt="Tanjore" width="150"><br>
    Famous for Tanjore painting, a classical South Indian art form.
`);

// Khajuraho
var khajuraho = L.marker([24.8318, 79.9199]).addTo(map);
khajuraho.bindPopup(`
    <b>Khajuraho</b><br>
    <img src="khajuraho.jpg" alt="Khajuraho" width="150"><br>
    Renowned for its stunning temple architecture and intricate sculptures.
`);
var elephantaCaves = L.marker([18.9633, 72.9318]).addTo(map);
elephantaCaves.bindPopup(`
    <b>Elephanta Caves</b><br>
    <img src="elephant caves.jpeg" alt="Elephanta Caves" width="150"><br>
    Rock-cut sculptures and reliefs dedicated to Shiva from the 5th to 8th centuries.
`);

var hampi = L.marker([15.3350, 76.4626]).addTo(map);
hampi.bindPopup(`
    <b>Hampi</b><br>
    <img src="hampi(1).jpg" alt="Hampi" width="150"><br>
    The capital of the Vijayanagara Empire, known for its temple architecture.
`);

var cholaTemples = L.marker([10.7828, 79.1316]).addTo(map);
cholaTemples.bindPopup(`
    <b>Brihadeeswarar Temple, Thanjavur</b><br>
    <img src="chola temples.webp" alt="Brihadeeswarar Temple" width="150"><br>
    A prime example of Chola dynasty architecture from the 11th century.
`);

var mughalGardens = L.marker([34.1015, 74.8070]).addTo(map);
mughalGardens.bindPopup(`
    <b>Mughal Gardens, Srinagar</b><br>
    <img src="mughal gardens.jpeg" alt="Mughal Gardens" width="150"><br>
    Reflecting Persian influence, these gardens were built during the Mughal era.
`);

var warliArt = L.marker([19.9975, 73.7898]).addTo(map);
warliArt.bindPopup(`
    <b>Warli Art</b><br>
    <img src="warli art.jpeg" alt="Warli Art" width="150"><br>
    An ancient tribal art form from Maharashtra, known for its monochromatic style.
`);
var classicalArt = L.layerGroup([ajantaEllora, kangraValley, tanjore, khajuraho]);
var modernArt = L.layerGroup([santiniketan]);

var overlays = {
    "Classical Art": classicalArt,
    "Modern Art": modernArt
};

L.control.layers(null, overlays).addTo(map);
ajantaEllora.bindTooltip("Ajanta and Ellora Caves").openTooltip();
kangraValley.bindTooltip("Kangra Valley").openTooltip();
santiniketan.bindTooltip("Santiniketan").openTooltip();
tanjore.bindTooltip("Tanjore").openTooltip();
khajuraho.bindTooltip("Khajuraho").openTooltip();
elephantaCaves.bindTooltip("Elephant Caves").openTooltip();
hampi.bindTooltip("Hampi").openTooltip();
cholaTemples.bindTooltip("CholaTemples").openTooltip();
mughalGardens.bindTooltip("Mughal gardens").openTooltip();
warliArt.bindTooltip("Warli Art").openTooltip();




