// Sample accounts data with price and description
const accounts = [
  { 
    id: 1, 
    name: "حساب ببجي", 
    photos: ["photo1.jpg", "photo2.jpg", "photo3.jpg"], 
    description: "حساب بي كلشي",
    price: "Asiacell 45.000",
    telegramLink: "https://t.me/d_22d"
  },
  { 
    id: 2, 
    name: "حساب انستا", 
    photos: ["photo4.jpg", "photo5.jpg"], 
    description: "متابعين 35,000",
    price: "Asiacell 39.000",
    telegramLink: "https://t.me/d_22d"
  },
  { 
    id: 3, 
    name: "حساب تيك توك", 
    photos: ["photo6.jpg", "photo7.jpg", "photo8.jpg"], 
    description: "متابعين 35,000",
    price: "Asiacell 50,000",
    telegramLink: "https://t.me/d_22d"
  },
  // More accounts...
];

const accountGrid = document.getElementById("account-grid");

// Generate account cards with description and price
accounts.forEach(account => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="placeholder.jpg" alt="${account.name}">
    <h3>${account.name}</h3>
    <p class="details">${account.description}</p>
    <p class="price">${account.price}</p>
    <a href="${account.telegramLink}" class="telegram-link" target="_blank">Contact on Telegram</a>
    <button onclick="displayAccount(${account.id})">Display Account</button>
  `;
  accountGrid.appendChild(card);
});

// Display photos and description in modal
function displayAccount(accountId) {
  const account = accounts.find(acc => acc.id === accountId);
  const modal = document.getElementById("photo-modal");
  const photosContainer = document.getElementById("account-photos");

  photosContainer.innerHTML = "";
  account.photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = photo;
    photosContainer.appendChild(img);
  });

  modal.style.display = "flex";
}

// Close modal
document.querySelector(".close-btn").onclick = () => {
  document.getElementById("photo-modal").style.display = "none";
};

// Close modal if clicked outside the content
window.onclick = event => {
  if (event.target === document.getElementById("photo-modal")) {
    document.getElementById("photo-modal").style.display = "none";
  }
};

// Show Add Account form for the site owner
// (This could be handled with a more secure login/auth system)
const isOwner = true; // Simulate being an owner, this should be dynamically handled
if (isOwner) {
  document.getElementById("add-account").style.display = "block";
}

// Handle form submission for adding new account
document.getElementById("account-form").addEventListener("submit", (event) => {
  event.preventDefault();
  // You can handle form submission logic here
  alert("Account added!");
});
