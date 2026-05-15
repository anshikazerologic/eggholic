// MHero.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MHero.css";

export default function MHero({ placeLabel = "My Location" }) {
    const [address, setAddress] = useState("Detecting location...");
    const [vegOnly, setVegOnly] = useState("unset");
    const navigate = useNavigate();

    useEffect(() => {
        const savedCity = localStorage.getItem("userCity");
        const manual = localStorage.getItem("userCityManual") === "true";

        if (savedCity) {
            setAddress(savedCity);
            // If it wasn't a manual entry, try to refresh the live location
            if (!manual) {
                detectLocation();
            }
        } else {
            // First time user: Get live location
            detectLocation();
        }

        const savedVeg = localStorage.getItem("vegFilter");
        if (savedVeg) {
            setVegOnly(
                savedVeg === "true" ? true : savedVeg === "false" ? false : "unset"
            );
        }
    }, []);

    const detectLocation = () => {
        const manual = localStorage.getItem("userCityManual") === "true";
        if (manual) return;

        if (!navigator.geolocation) {
            setDefaultLocation();
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                try {
                    const { latitude, longitude } = pos.coords;
                    // Using Nominatim for Reverse Geocoding
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
                    );
                    const data = await res.json();

                    if (data?.display_name) {
                        const manualCheck = localStorage.getItem("userCityManual") === "true";
                        if (!manualCheck) {
                            // You can format data.display_name to be shorter if needed
                            const shortAddress = data.address.city || data.address.town || data.display_name;
                            setAddress(shortAddress);
                            localStorage.setItem("userCity", shortAddress);
                        }
                    } else {
                        setDefaultLocation();
                    }
                } catch (err) {
                    console.error("Reverse geocode error:", err);
                    setDefaultLocation();
                }
            },
            (err) => {
                console.warn("Location denied or unavailable:", err);
                setDefaultLocation();
            }
        );
    };

    const setDefaultLocation = () => {
        // Updated default to EggHolic
        const fallback = "EggHolic";
        const manual = localStorage.getItem("userCityManual") === "true";
        if (!manual) {
            setAddress(fallback);
            localStorage.setItem("userCity", fallback);
        }
    };

    // ... (rest of your toggleVeg and interval logic remains the same)

    return (
        <section className="mhero mheroToggel">
            <div className="mhero__top">
                <div className="mhero__loc">

                    <Link to="/locations">
                        <div className="mhero__eta">
                            <img src="./location-pointer-white-icon.svg" alt={"Location"} />
                        </div>
                    </Link>

                    <div className="mhero__place">
                        <div className="mhero__placeHead">
                            <span className="mhero__placeName">{placeLabel}</span>
                        </div>
                        <div className="mhero__addr" title={address}>
                            {address}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mhero__searchRow">
                <div className="mhero__search" onClick={() => navigate("/menu")}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                        <p className="placeholdernew">Search for 'Sandwich'</p>
                </div>
            </div>

            {/* <div className="mhero__badges">
                <div className="mhero__badge">
                    <i className="fa-solid fa-kitchen-set"></i>
                    <span className="text-njj">Dishes by top rated chefs</span>
                </div>
                <div className="mhero__divider" />
                <div className="mhero__badge">
                    <i className="fa-solid fa-motorcycle"></i>
                    <span className="text-njj">Free delivery above $99</span>
                </div>
            </div> */}
        </section>
    );
}