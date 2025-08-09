const products = [
    {id: "fc-1888", name: "flux capacitor", averagerating: "4.5"},
    {id: "fc-2050", name: "power laces", averagerating: "4.7"},
    {id: "fc-1987", name: "time circuits", averagerating: "3.5"},
    {id: "fc-2000", name: "low voltage reactor", averagerating: "3.9"},
    {id: "fc-1969", name: "warp equalizer", averagerating: "5.0"},
];


document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productSelect");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    select.appendChild(option);
  });

 let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;


  document.getElementById("reviewForm").addEventListener("submit", function() {
    reviewCount++; // increase by 1
    localStorage.setItem("reviewCount", reviewCount); // save new value
  });
  
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("last-modified").textContent = document.lastModified;
});

