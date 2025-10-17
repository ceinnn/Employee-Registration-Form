// Get reference from dropdowns
const region = document.getElementById("region");
const city = document.getElementById("city");
const barangay = document.getElementById("barangay");
const province = document.getElementById("province");

// List regions in an object literal and list all cities in an array literal
const cities = {
  ncr: ["Caloocan", "Manila", "Quezon City", "Taguig"],

  region4a: ["Batangas City", "Cavite City", "Calamba", "Rodriguez"],

  region3: ["Baler", "Malolos", "Cabanatuan City", "Angeles City"],

  car: ["Bangued", "Baguio City", "La Trinidad", "Barlig"],
};

// List cities in an object literal and list all barangays in an array literal
const barangays = {
  caloocan: [
    "Barangay 1",
    "Barangay 10",
    "Barangay 100",
    "Barangay 101",
    "Barangay 102",
    "Barangay 103",
  ],

  manila: [
    "Barangay 1",
    "Barangay 10",
    "Barangay 100",
    "Barangay 101",
    "Barangay 102",
    "Barangay 103",
  ],

  quezoncity: [
    "Alicia",
    "Amihan",
    "Apolonio Samson",
    "Aurora",
    "Baesa",
    "Bagbag",
  ],

  taguig: [
    "Bagumbayan",
    "Bambang",
    "Calzada",
    "Central Bicutan",
    "Central Signal Village",
    "Fort Bonifacio",
  ],

  batangascity: [
    "Alangilan",
    "Balagtas",
    "Balete",
    "Banaba Center",
    "Banaba Kanluran",
    "Banaba Silangan",
  ],

  cavitecity: [
    "Barangay 1",
    "Barangay 2",
    "Barangay 3",
    "Barangay 4",
    "Barangay 5",
    "Barangay 6",
  ],

  calamba: [
    "Barangay 1",
    "Barangay 2",
    "Barangay 3",
    "Barangay 4",
    "Barangay 5",
    "Barangay 6",
  ],

  rodriguez: ["Balite", "Burgos", "Geronimo", "Macabud", "Manggahan", "Mascap"],

  baler: [
    "Barangay I",
    "Barangay II",
    "Barangay III",
    "Barangay IV",
    "Barangay V",
    "Buhangin",
  ],

  malolos: ["Anilao", "Atlag", "Babatnin", "Bagna", "Bagong Bayan", "Balayong"],

  cabanatuancity: [
    "Aduas Centro",
    "Aduas Norte",
    "Aduas Sur",
    "Bagong Buhay",
    "Bagong Sikat",
    "Bakero",
  ],

  angelescity: [
    "Agapito del Rosario",
    "Amsic",
    "Anunas",
    "Balibago",
    "Capaya",
    "Claro M. Recto",
  ],

  bangued: ["Agtangao", "Angad", "Bangbangar", "Bañacao", "Cabuloan", "Calaba"],

  baguiocity: [
    "A. Bonifacio-Caguioa-Rimando (ABCR)",
    "Alfonso Tabora",
    "Ambiong",
    "Apugan-Loakan",
    "Asin Road",
    "Atok Trail",
  ],

  latrinidad: ["Alapang", "Alno", "Ambiong", "Bahong", "Balili", "Beckel"],

  barlig: ["Chupac", "Fiangtin", "Gawana", "Kaleo", "Latang", "Lias Kanluran"],
};

const provinces = {
  caloocan: "Metro Manila",
  manila: "Metro Manila",
  quezoncity: "Metro Manila",
  taguig: "Metro Manila",
  batangascity: "Batangas",
  cavitecity: "Cavite",
  calamba: "Laguna",
  rodriguez: "Rizal",
  baler: "Aurora",
  malolos: "Bulacan",
  cabanatuancity: "Nueva Ecija",
  angelescity: "Pampanga",
  bangued: "Abra",
  baguiocity: "Baguio",
  latrinidad: "Benguet",
  barlig: "Mountain Province",
};

// Check for changes in region dropdown
region.addEventListener("change", () => {
  // Get the selected value of region dropdown
  const selected = region.value;

  province.value = "";

  //If nothing is selected, city dropdown remains disabled
  if (!selected) {
    city.innerHTML = '<option value="">Select a region first.</option>';
    barangay.innerHTML = '<option value="">Select a city first.</option>';

    city.disabled = true;
    barangay.disabled = true;
    return;
  }

  // enable city dropdown
  city.disabled = false;

  // Create option tags using the object and array literal as reference
  cities[selected].forEach((item) => {
    const opt = document.createElement("option");
    itemVal = item.split(" ").join("");
    opt.value = itemVal.toLowerCase();
    opt.textContent = item;
    city.appendChild(opt);
  });
});

// Check for changes in city dropdown
city.addEventListener("change", () => {
  // Get the selected value of city dropdown
  const selected = city.value;

  //If nothing is selected, barangay dropdown remains disabled
  if (!selected) {
    barangay.innerHTML = '<option value="">Select a city first.</option>';
    barangay.disabled = true;
    province.value = "";
    return;
  }

  // enable barangay dropdown
  barangay.disabled = false;

  // Create option tags using the object and array literal as reference
  barangays[selected].forEach((item) => {
    const opt = document.createElement("option");
    itemVal = item.split(" ").join("");
    opt.value = itemVal.toLowerCase();
    opt.textContent = item;
    barangay.appendChild(opt);
  });

  province.value = provinces[selected] || "";
});

// Get reference from div and input
const fileInput = document.getElementById("file-input");
const file = document.getElementById("resume");
const list = document.getElementById("file-list-container");

// Array to store uploaded files
let containFiles = [];

// Function to display uploaded files
function displayFiles() {
  // Clears list
  list.innerHTML = "";

  // Loop through array to display each file
  containFiles.forEach((file, index) => {
    const item = document.createElement("div");
    item.classList.add("file-list");

    const filename = document.createElement("span");
    filename.classList.add("filename");
    filename.textContent = `${index + 1}. ${file.name}`;

    const remove = document.createElement("span");
    remove.textContent = "✖";
    remove.classList.add("remove");

    // Remove uploaded file
    remove.addEventListener("click", () => {
      containFiles.splice(index, 1);
      displayFiles();
    });

    item.appendChild(filename);
    item.appendChild(remove);

    list.appendChild(item);
  });
}

// Triggers input when div is clicked
fileInput.addEventListener("click", () => file.click());

// Prevents opening the file to another tab instead of uploading
fileInput.addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Listens when a file is dropped in the div
fileInput.addEventListener("drop", (e) => {
  e.preventDefault();
  const files = Array.from(e.dataTransfer.files);
  containFiles = containFiles.concat(files);
  displayFiles();
});

// Allows user to add files by clicking the div
file.addEventListener("change", () => {
  const files = Array.from(file.files);
  containFiles = containFiles.concat(files);
  displayFiles();
});
