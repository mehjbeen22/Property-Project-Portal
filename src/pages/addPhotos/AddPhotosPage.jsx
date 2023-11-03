import { useContext } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PropertyContext } from "../../hooks/PropertyContext";
import './AddPhotos.css'

import { useNavigate } from "react-router-dom";

export const AddPhotos = () => {
  const navigate = useNavigate();
  const {
    assetState: { persistData, storePersistData },
    dispatchAssetState,
  } = useContext(PropertyContext);

  const handleImageInput = (event) => {
    const selectFile = event.target.files;
    const filetoArray = Array.from(selectFile);
    const fileUrl = filetoArray.map((item) => {
      return URL.createObjectURL(item);
    });

    dispatchAssetState({ type: "SET_MULTIPLE_IMAGE", payload: fileUrl });

    setTimeout(() => {
      navigate("/explore");
    }, 1000);
  };


  return (
    <>
      <div className="upload-container">
        <div className="upload-content">
          <label htmlFor="upload" className="upload-label">
            Upload &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FaCloudUploadAlt className="upload-icon" size={50} />
          </label>
          <input
            multiple
            accept="image/*"
            type="file"
            id="upload"
            className="upload-input"
            onChange={handleImageInput}
          />
        </div>
      </div>

{

      console.log(persistData)
}

      <div className="image-gellery-case">
        {persistData.multipleImages.length > 0 && (
          <div className="image-gallery">
            {persistData.multipleImages.map((image, index) => (
              <img key={index} src={image} alt={`Preview ${index}`} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
