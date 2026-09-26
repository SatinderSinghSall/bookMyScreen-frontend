import { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocationData = async (latitude, longitude) => {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        );

        if (!res.ok) {
          throw new Error("Failed to fetch location");
        }

        const data = await res.json();

        const userLocation =
          data?.address?.state ||
          data?.address?.city ||
          data?.address?.town ||
          data?.address?.village;

        setLocation(userLocation || "Unknown location");
      } catch (error) {
        console.error(error);
        setError("Failed to fetch your current location data.");
      } finally {
        setLoading(false);
      }
    };

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        fetchLocationData(latitude, longitude);
      },
      (error) => {
        console.error(error);

        setError("Unable to retrieve your current location.");
        setLoading(false);
      },
    );
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        loading,
        error,
        setLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const userLocation = () => {
  return useContext(LocationContext);
};
