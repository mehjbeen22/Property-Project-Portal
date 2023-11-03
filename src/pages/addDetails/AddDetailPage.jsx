import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./AddDetailPage.module.css";
import { PropertyContext } from "../../hooks/PropertyContext";

export const AddDetailPage = () => {
  const navigate = useNavigate();
  const {
    assetState: { persistData, storePersistData },
    dispatchAssetState,
  } = useContext(PropertyContext);


  const ChangeHandler = (event) => {
    const { name, value } = event.target;
    dispatchAssetState({ type: "SET_DATA", payload: { name, value } });
  };

  const ChangeImageHandler = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);
      dispatchAssetState({ type: "SET_DATA_IMAGE", payload: fileUrl });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    navigate("/photos");
  };

  return (
    <>
      <div className={styles.mainCantainer}>
        <form
          className={styles.formHolder}
          onSubmit={formSubmitHandler}
          autoComplete="off"
        >
          <h1 className="detail-heading">ADD DETAILS</h1>

          <label> Address </label>
          <input
            type="text"
            name="address"
            value={persistData?.address}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Geo Location</label>

          <input
            type="text"
            name="geolocation"
            value={persistData?.geolocation}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Configuration </label>

          <input
            type="text"
            name="configuration"
            value={persistData?.configuration}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label>Amenities </label>
          <input
            type="text"
            name="amenities"
            value={persistData?.amenities}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Availability</label>

          <input
            type="text"
            name="availability"
            value={persistData?.availability}
            className={styles.inputbox}
            onChange={ChangeHandler}
          />

          <label> Upload Photo </label>
          <input
            accept="image/*"
            type="file"
            name="photos"
            // value={persistData?.photos}
            className={styles.inputbox}
            onChange={ChangeImageHandler}
          />

          <div className={styles.PriceCase}>
            {/* Rent Block */}
            <div className={styles.priceBlock}>
              <label>Rent</label>
              <input
                type="number"
                name="rent"
                value={persistData?.rent}
                className={styles.inputbox}
                onChange={ChangeHandler}
              />
            </div>

            {/* Maintenance */}
            <div className={styles.priceBlock}>
              <label>Maintenance</label>
              <input
                type="number"
                name="maintenance"
                value={persistData?.maintenance}
                className={styles.inputbox}
                onChange={ChangeHandler}
              />
            </div>

            {/* Desposit */}
            <div className={styles.priceBlock}>
              <label>Desposit</label>
              <input
                type="number"
                name="deposit"
                value={persistData?.deposit}
                className={styles.inputbox}
                onChange={ChangeHandler}
              />
            </div>
          </div>

          <button type="submit" className={styles.Submit}>
            Submit
          </button>
          <div style={{ margin: "10px" }}></div>
        </form>
      </div>
    </>
  );
};
