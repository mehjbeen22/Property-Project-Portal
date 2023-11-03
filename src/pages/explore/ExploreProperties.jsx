import { useContext } from "react";
import { PropertyCard } from "../../component/exploreCard/PropertyCard";
import { PropertyContext } from "../../hooks/PropertyContext";

export const ExploreProperties = () => {
  const {
    assetState: { storePersistData },
  } = useContext(PropertyContext);


  return (
    <div className="card-main-case">
      {storePersistData.map((item, index) => {
        return <PropertyCard key={index} item={item} />;
      })}
    </div>
  );
};
