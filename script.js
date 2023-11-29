// Simulated hostel data (replace this with your actual data)
const hostelData = [
    { name: "Arush Men's Pg", city: "Kukatpally", vacancy: true },
    { name: "Royal Luxury Men's Hostel", city: "Ameerpet", vacancy: false },
    { name: "Lasya Men's Hostel", city: "Moosapet", vacancy: true },
  ];
  
  const searchForm = document.getElementById("searchForm");
  const hostelList = document.getElementById("hostelList");
  
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const city = document.getElementById("cityInput").value.trim().toLowerCase();
  
    // Filter hostels based on the entered city
    const filteredHostels = hostelData.filter((hostel) =>
      hostel.city.toLowerCase().includes(city)
    );
  
    displayHostels(filteredHostels);
  });
  
  function displayHostels(hostels) {
    hostelList.innerHTML = ""; // Clear previous hostel listings
  
    if (hostels.length === 0) {
      hostelList.innerHTML = "<p>No hostels available in this city.</p>";
      return;
    }
  
    hostels.forEach((hostel) => {
      const hostelItem = document.createElement("div");
      hostelItem.classList.add("hostel-item");
      hostelItem.innerHTML = `
        <h3>${hostel.name}</h3>
        <p>Vacancy: ${hostel.vacancy ? "Available" : "Not available"}</p>
      `;
      hostelList.appendChild(hostelItem);
    });
  }
  