import React from "react";
import FacebookShare from "../../forms/socialShare/Facebook";
import WhatsappShareButton from "../../forms/socialShare/Whatsapp";
import { BsFillGrid1X2Fill } from "react-icons/bs";

import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";
import AddToBoost from "./AddToBoost";

import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";

import { addProduct } from "../../../redux/Cart/cart.actions";

const AvatarsControllers = ({
  product,
  isMatch,
  cartItems,
  productID,
  productBrand,
  productName,
  reference,
  avgTotal,
  compareWatches,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = (product, cartItems, productID) => {
    if (!product) return;
    if (cartItems.length < 4) {
      product.productID = productID;
      dispatch(addProduct(product));
      history.push("/watchstatistics/comparewatches");
    } else {
      history.push("/watchstatistics/comparewatches");
    }
  };

  const configShareButtons = {
    quote:
      "Vote here on your personal opinion for the " +
      productBrand +
      " " +
      productName +
      " " +
      reference +
      " with a score of " +
      avgTotal,
    url: "https://fir-auth0-9b4cb.web.app/product/" + productID,
  };

  return (
    <div style={{}}>
      {" "}
      <Stack
        direction="row"
        spacing={1}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: isMatch ? "center" : "flex-end",
          paddingTop: isMatch ? "10px" : "0px",
          paddingRight: "10px",
          marginBottom: isMatch ? "10px" : "0px",
        }}
      >
        <>
          <AddToBoost product={product} />
          <Avatar
            sx={{
              bgcolor: "#00000000",
              border: "solid 3px",
              borderColor: "#ffffff66",
              width: "6vh",
              height: "6vh",
              cursor: "pointer",
            }}
            onClick={() => {
              handleAddToCart(product, cartItems, productID);
            }}
            size="small"
          >
            {compareWatches && (
              <Typography
                style={{
                  color: "#ffffff66",
                }}
              >
                X
              </Typography>
            )}
            {!compareWatches && (
              <BsFillGrid1X2Fill size="3vh" color="#ffffff66" />
            )}
          </Avatar>

          <FacebookShare {...configShareButtons} />
          <WhatsappShareButton {...configShareButtons} />
        </>
      </Stack>
    </div>
  );
};

export default AvatarsControllers;
