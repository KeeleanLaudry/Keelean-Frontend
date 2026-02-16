export async function reverseGeocode(lat, lng) {
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
      {
        headers: {
          "User-Agent": "LaundryApp/1.0 (your_email@example.com)",
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch address");

    const data = await res.json();

    return {
      fullAddress: data.display_name,
      city:
        data.address.city ||
        data.address.town ||
        data.address.village ||
        "",
      postcode: data.address.postcode || "",
    };
  } catch (err) {
    console.error("Reverse geocoding error:", err);
    return null;
  }
}
