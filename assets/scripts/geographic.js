const geoCodeEl = document.getElementById('geoCodeContainer');

const baseLat = 37.9838;
const baseLng = 23.7275;

function generateGeoCode() {
    const latOffset = (Math.random() - 0.5) * 0.2;
    const lngOffset = (Math.random() - 0.5) * 0.2;

    const lat = (baseLat + latOffset).toFixed(5); // 5 decimals
    const lng = (baseLng + lngOffset).toFixed(5); // 5 decimals

    return `${lat}° N, ${lng}° E`;
}

function updateGeoCode() {
    geoCodeEl.textContent = generateGeoCode();
}

// Initial display
updateGeoCode();

// Update every 5 seconds
setInterval(updateGeoCode, 100);
