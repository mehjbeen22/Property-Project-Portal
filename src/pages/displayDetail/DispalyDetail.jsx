import { useContext } from "react";
import "./DisplayDetail.css";
import { PropertyContext } from "../../hooks/PropertyContext";
import { useParams } from "react-router-dom";

export const DisplayDetail = () => {
  const { propertyID } = useParams();

  const {
    assetState: { storePersistData },
  } = useContext(PropertyContext);

  const obtainSingleData = storePersistData.find(
    (item) => item.id == propertyID
  );

  return (
    <div className="detail-case">
      <div className="col-md-8">
        <div className="custom-card">
          <h5 className="card-title">Property Details</h5>
          <div className="custom-card-text">
            <p className="property-infos">
              <strong>Address:</strong>
              {obtainSingleData?.address}
            </p>
            <p className="property-infos">
              <strong>Geolocation:</strong>
              {obtainSingleData?.geolocation}
            </p>
            <p className="property-infos">
              <strong>Configuration:</strong>
              {obtainSingleData?.configuration}
            </p>
            <p className="property-infos">
              <strong>Amenities:</strong>
              {obtainSingleData?.amenities}
            </p>
            <p className="property-infos">
              <strong>Availability:</strong>
              {obtainSingleData?.availability}
            </p>
            <p className="property-infos">
              <strong>Rent:</strong>
              {obtainSingleData?.rent}
            </p>
            <p className="property-infos">
              <strong>Maintenance:</strong>
              {obtainSingleData?.maintenance}
            </p>
            <p className="property-infos">
              <strong>Deposit:</strong>
              {obtainSingleData?.deposit}
            </p>
          </div>
          <p className="last-updated">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>

      <div className="image-case">
        {obtainSingleData?.multipleImages?.map((item, index) => {
          return (
            <img key={index} src={item} alt="" className="multi-img-size" />
          );
        })}
      </div>
    </div>
  );
};
