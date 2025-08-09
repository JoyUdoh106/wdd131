let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
document.getElementById("counter").textContent =
    `You have submitted ${reviewCount} review(s).`;

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;