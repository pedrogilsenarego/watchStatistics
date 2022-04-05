import { Grid, CardMedia, Typography, Divider } from "@mui/material";
import * as Styled from "./styles";
import CircularProgress from "./CircularProgress";


const WatchCard = ({ data, currentUser, setProductBrands }: any) => {
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
    numberVotesNotOwn,
    numberVotesOwn
  } = data;

  return (
    <Grid
      item
      container
      justifyContent="center"
      spacing={1}
      alignItems="center"
      xs={12}
    >
      <Grid
        item
        container
        xs={0.7}
        justifyContent="center"
        alignItems="center"
        style={{
          height: "200px",
        }}
      >
        <Typography
          style={{
            fontSize: "35px",
            fontWeight: 500,
            color: "#ffffff66",
            transform: "rotate(-90deg)",
            whiteSpace: "nowrap",
            cursor: "pointer",
          }}
          onClick={() => setProductBrands(productBrand)}
        >
          {productBrand.slice(0, 9)}
        </Typography>
      </Grid>
      <Grid item xs={11.3}>
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
                    {productName} {reference}
                  </Typography>
                  <Typography>
                    {numberVotesNotOwn+numberVotesOwn}
                  </Typography>
                  <Typography>{productCategory}</Typography>
                  <Typography>{productPriceBrackets}</Typography>
                  {currentUser &&
                    userVotes &&
                    userVotes.includes(documentID) && (
                      <Typography>AlreadyVoted</Typography>
                    )}
                </Grid>
                <Grid item container xs={6} justifyContent="flex-end">
                  <CircularProgress avgTotal={avgTotal} />
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
    </Grid>
  );
};

export default WatchCard;
