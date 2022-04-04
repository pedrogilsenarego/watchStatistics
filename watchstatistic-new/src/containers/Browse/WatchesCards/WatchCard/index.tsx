import {
  Grid,
  CardMedia,
  Typography,
  Divider,
  Box,
  CircularProgress,
} from "@mui/material";
import * as Styled from "./styles";

const WatchCard = ({ data, currentUser }: any) => {
  const { userVotes } = currentUser ? currentUser : "null";
  const {
    productThumbnail,
    productName,
    productBrand,
    reference,
    documentID,
    avgTotal,
    productCategory,
    productPriceBrackets,
  } = data;

  function CircularProgressWithLabel() {
    return (
      <Box
        component="div"
        sx={{ position: "relative", display: "inline-flex" }}
      >
        <CircularProgress
          variant="determinate"
          value={avgTotal * 10}
          size={80}
          style={{ color: "orange" }}
        />
        <Box
          component="div"
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="white"
            style={{ fontSize: "20px" }}
          >
            {avgTotal}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Grid item xs={12}>
      <Styled.Paper>
        <Grid container spacing={2}>
          <Grid xs={4} item>
            <CardMedia
              style={{ borderRadius: "4px" }}
              component="img"
              height="150"
              image={productThumbnail[0]}
              alt={reference}
            />
          </Grid>
          <Grid item container xs={8}>
            <Grid item container alignItems="center" xs={12}>
              <Grid item xs={6}>
                <Typography>
                  {productBrand} {productName} {reference}
                </Typography>

                <Typography>{productCategory}</Typography>
                <Typography>{productPriceBrackets}</Typography>
                {currentUser && userVotes && userVotes.includes(documentID) && (
                  <Typography>AlreadyVoted</Typography>
                )}
              </Grid>
              <Grid item container xs={6} justifyContent="center">
                <CircularProgressWithLabel />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Divider
                style={{
                  width: "100%",
                  background: "white",
                  marginTop: "5px",
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Styled.Paper>
    </Grid>
  );
};

export default WatchCard;
