
import { useSelector } from "react-redux";
import { selectLocationData } from "../Services/PostalSlice";

function LocationInfo() {
  
  
  const locationData = useSelector(selectLocationData);

  return (
    <div className="flex flex-col bg-white p-3 mt-5 rounded border-gray-700 w-64">
      {locationData ? (
        <div className="flex-col">
          <h2 className="text-blue-500 ">Location Information</h2>
          <div className="mt-3 text-green-500 ">
          <div>
              <p>Area: {locationData.country}</p>
              <p>State: {locationData.places[0].state}</p>
              <p>Latitude: {locationData.places[1].latitude}</p>
              <p>Longitude: {locationData.places[1].longitude}</p>
              
             
              <p>Place Name: {locationData.places[2]["place name"]}</p>

              {/* <p>Pincode: {locationData.pincode}</p>
              <p>Latitude: {locationData.lat}</p>
              <p>Longitude: {locationData.lng}</p> */}
            </div>
          </div>
        </div>
      ) : <p>No location data available</p>}
    </div>
  );
}

export default LocationInfo;