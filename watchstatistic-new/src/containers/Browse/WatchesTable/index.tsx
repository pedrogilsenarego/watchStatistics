import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsStart } from "../../../redux/Products/products.actions";
import { Grid, Paper } from "@mui/material";
import WatchCard from "./WatchCard";
import * as Styled from "./styles";

const mapState = (state: any) => ({
  currentUser: state.user.currentUser,
  products: state.productsData.products,
});

const WatchesTable = () => {
  const dispatch = useDispatch();
  const { products, currentUser } = useSelector(mapState);
  const { data, isLastPage, queryDoc } = products;
  const { userVotes } = currentUser ? currentUser : "null";
  const [productCategory, setProductCategory] = useState(null);
  const [productPrices, setProductPrices] = useState(null);
  const [productBrands, setProductBrands] = useState(null);
  const [score, setScore] = useState("desc");
  const pageSize = 10;

  useEffect(
    () => {
      dispatch(
        fetchProductsStart({
          pageSize,
          sort: score,
          productCategory,
          productPrices,
          productBrands,
        })
      );
    },
    // eslint-disable-next-line
    [score, productCategory, productPrices, productBrands]
  );

  return (
    <Styled.Grid container spacing={2}>
      <Grid item container spacing={2} xs={8}>
        {data?.map((watchData: any, index: number) => {
          return <WatchCard key={index} data={watchData} />;
        })}
      </Grid>
      <Grid item xs={4}>
        <Paper>Teste</Paper>
      </Grid>
    </Styled.Grid>
  );
};

export default WatchesTable;
