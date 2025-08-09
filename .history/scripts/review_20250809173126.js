 let reviewCount = localStorage.getItem("reviewCount");
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem("reviewCount", reviewCount);
    document.getElementById("counter").textContent = `You have submitted ${re}`

// let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
// document.getElementById("counter").textContent = `You have submitted ${reviewCount} review(s).`;


