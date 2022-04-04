import { Grid, CardMedia, Typography, Divider } from "@mui/material";
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
          <Grid item xs={8}>
            <Typography>
              {productBrand} {productName} {reference}
            </Typography>
            <Typography>{avgTotal}/10</Typography>
            <Typography>{productCategory}</Typography>
            <Typography>{productPriceBrackets}</Typography>
            {currentUser && userVotes && userVotes.includes(documentID) && (
              <Typography>AlreadyVoted</Typography>
            )}
            <Divider
              style={{
                width: "100%",
                background: "white",
                marginTop: "5px",
              }}
            />
          </Grid>
        </Grid>
      </Styled.Paper>
    </Grid>
  );
};

export default WatchCard;
