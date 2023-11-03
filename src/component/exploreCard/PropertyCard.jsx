import "./PropertyCard.css";
import { useNavigate } from "react-router-dom";

export const PropertyCard = ({ item }) => {
  const navigate = useNavigate();

  const {
    address,
    geolocation,
    configuration,
    amenities,
    availability,
    photos,
    rent,
    maintenance,
    deposit,
    multipleImages,
    id,
  } = item;

  return (
    <>
      <div
        className="card mb-3 card-border"
        style={{ maxWidth: "90%" }}
        onClick={() => navigate(`/explore/page-detail/${id}`)}
      >
        <div className="row g-0">
          <div className="col-md-4">
            <img src={photos} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Property Details</h5>
              <div className="card-text">
                <p>
                  <strong>Address:</strong>
                  {address}
                </p>
                <p>
                  <strong>Geolocation:</strong>
                  {geolocation}
                </p>
                <p>
                  <strong>Configuration:</strong>
                  {configuration}
                </p>
                <p>
                  <strong>Amenities:</strong>
                  {amenities}
                </p>
                <p>
                  <strong>Availability:</strong>
                  {availability}
                </p>

                <p>
                  <strong>Rent:</strong>
                  {rent}
                </p>
                <p>
                  <strong>Maintenance:</strong>
                  {maintenance}
                </p>
                <p>
                  <strong>Deposit:</strong>
                  {deposit}
                </p>
              </div>
              <p className="card-text">
                <small className="text-body-secondary">
                  Last updated 3 mins ago
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
