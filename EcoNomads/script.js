


function searchDestination() {
  let destination = document.getElementById("destination").value.trim();
  if (destination === "") {
    alert("⚠️ Please enter a destination!");
    return;
  }

  let apiUrl = "https://nominatim.openstreetmap.org/search?format=json&q=" + encodeURIComponent(destination);

  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    }
    .then(function (data) {
      if (data.length === 0) {
        document.getElementById("result").innerHTML = "❌ Destination not found.";
        return;
      }

      let lat = data[0].lat;
      let lon = data[0].lon;
      document.getElementById("result").innerHTML = "✅ Found: " + destination + " (Lat: " + lat + ", Lon: " + lon + ")";
    }
    .catch (function (error) {
      console.error("❌ Error:", error);
      document.getElementById("result").innerHTML = "⚠️ Error fetching data.";
    });
}

