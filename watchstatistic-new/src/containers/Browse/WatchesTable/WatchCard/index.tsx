import { Grid, CardMedia } from "@mui/material";
import * as Styled from "./styles";

const WatchCard = ({ data }: any) => {
  return (
    <Grid item xs={12}>
      <Styled.Paper>
        <CardMedia
          component="img"
          height="194"
          image={data.productThumbnail[0]}
          alt={data.reference}
        />
      </Styled.Paper>
    </Grid>
  );
};

export default WatchCard;
