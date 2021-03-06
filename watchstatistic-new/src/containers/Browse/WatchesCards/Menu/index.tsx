import * as Styled from "./styles";
import { Box, Grid } from "@material-ui/core";
import Select from "../../../forms/SelectMUI";
import watchBrands from "../../../../assets/data/watchBrands.json";
import watchTypes from "../../../../assets/data/watchTypes.json";
import pricesBracket from "../../../../assets/data/pricesBracket.json";
import { BsFileArrowUpFill, BsFileArrowDownFill } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

interface Props {
  productBrands: any;
  setProductBrands: (productBrands: any) => void;
  productCategory: any;
  setProductCategory: (productCategory: any) => void;
  productPrices: any;
  setProductPrices: (productPrices: any) => void;
  score: string;
  setScore: (score: string) => void;
}

const Menu = ({
  setProductBrands,
  productBrands,
  productCategory,
  setProductCategory,
  productPrices,
  setProductPrices,
  score,
  setScore,
}: Props) => {
  const handleFilterBrands = (e: any) => {
    setProductBrands(e.target.value);
  };

  const handleFilterCategory = (e: any) => {
    setProductCategory(e.target.value);
  };

  const handleFilterPrices = (e: any) => {
    setProductPrices(e.target.value);
  };

  const configBrands = {
    defaultValue: productBrands,
    options: watchBrands.options,
    handleChange: handleFilterBrands,
    label: "Brands",
  };

  const configCategory = {
    defaultValue: productCategory,
    options: watchTypes.options,
    handleChange: handleFilterCategory,
    label: "Categories",
  };

  const configPricesBracket = {
    defaultValue: productPrices,
    options: pricesBracket.options,
    handleChange: handleFilterPrices,
    label: "Prices Bracket",
  };

  return (
    <Styled.Paper>
      <Grid container spacing={2}>
        <Grid item container alignItems="center" xs={12}>
          <Select {...configBrands} />
          {productBrands !== null && (
            <AiFillCloseSquare
              size="3em"
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => setProductBrands(null)}
            />
          )}
        </Grid>
        <Grid item container alignItems="center" xs={12}>
          <Select {...configCategory} />
          {productCategory !== null && (
            <AiFillCloseSquare
              size="3em"
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => setProductCategory(null)}
            />
          )}
        </Grid>
        <Grid item container alignItems="center" xs={12}>
          <Select {...configPricesBracket} />
          {productPrices !== null && (
            <AiFillCloseSquare
              size="3em"
              color="red"
              style={{ cursor: "pointer" }}
              onClick={() => setProductPrices(null)}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <Box
            style={{
              fontSize: "15px",
              color: "#ffffff66",
              cursor: "pointer",
              borderBottom: "none",
            }}
          >
            <BsFileArrowDownFill
              onClick={() => setScore("desc")}
              size="3em"
              color={score === "desc" ? "orange" : "#ffffff66"}
            />
            <BsFileArrowUpFill
              onClick={() => setScore("asc")}
              size="3em"
              color={score === "asc" ? "orange" : "#ffffff66"}
            />
          </Box>
        </Grid>
      </Grid>
    </Styled.Paper>
  );
};

export default Menu;
