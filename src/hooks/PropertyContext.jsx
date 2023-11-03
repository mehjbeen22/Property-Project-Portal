import { createContext, useReducer } from "react";
import { PropertyReducer } from "./PropertyReducer";

export const PropertyContext = createContext(null);

export const PropertyContextProvider = ({ children }) => {
  const initialState = {
    persistData: {
      id: "",
      address: "",
      geolocation: "",
      configuration: "",
      amenities: "",
      availability: "",
      photos: "",
      rent: "",
      maintenance: "",
      deposit: "",
      multipleImages: [],
    },

    storePersistData: [
      {
        id: "0011",
        address: "123 Main St",
        geolocation: "Latitude: 40.7128, Longitude: -74.0060",
        configuration: "3 bedrooms, 2 bathrooms",
        amenities: "Swimming pool, gym, parking",
        availability: "Available now",
        photos:
          "https://www.godrejinterio.com/imagestore/B2C/56101543SD00155/56101543SD00155_A1_803x602.jpg",
        rent: "2,500",
        maintenance: "200",
        deposit: "2,500",
        multipleImages: [
          "https://i.etsystatic.com/26008302/r/il/77a603/3416039959/il_1080xN.3416039959_p5o9.jpg",
          "https://img1.exportersindia.com/product_images/bc-full/2022/9/4323551/glass-top-wooden-dining-table-set-1662615899-6529125.jpeg",
          "https://media.designcafe.com/wp-content/uploads/2020/02/21005007/modern-dining-table-designs-for-your-home.jpg",
        ],
      },
    ],
  };
  const [assetState, dispatchAssetState] = useReducer(
    PropertyReducer,
    initialState
  );

  return (
    <PropertyContext.Provider value={{ assetState, dispatchAssetState }}>
      {children}
    </PropertyContext.Provider>
  );
};
