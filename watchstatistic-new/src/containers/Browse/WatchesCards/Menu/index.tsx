
import * as Styled from "./styles"
import { Box, Grid } from "@material-ui/core";
import Select from "../../../forms/SelectMUI";
import watchBrands from "../../../../assets/data/watchBrands.json";
import watchTypes from "../../../../assets/data/watchTypes.json"
import pricesBracket from "../../../../assets/data/pricesBracket.json"
import { BsFileArrowUpFill,BsFileArrowDownFill } from "react-icons/bs";


interface Props {
  productBrands: any,
  setProductBrands: (productBrands:any) => void,
  productCategory: any,
  setProductCategory: (productCategory:any) => void,
  productPrices: any,
  setProductPrices: (productPrices:any) => void,
  score: string,
  setScore: (score:string) => void
}

const Menu = ({setProductBrands, productBrands, productCategory, setProductCategory, productPrices, setProductPrices, score, setScore}: Props) => {
   
  

  const handleFilterBrands = (e: any) => {
    setProductBrands(e.target.value);
  };

  const handleFilterCategory = (e: any) => {
    setProductCategory(e.target.value);
  };

  const handleFilterPrices = (e: any) => {
    setProductPrices(e.target.value);
  };

  const handleScore = () => {
    score === "desc" ? setScore("asc") : setScore("desc");
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

    return (<Styled.Paper>
      <Grid container spacing={2}>
        <Grid item xs={12}>
      <Select  {...configBrands}/></Grid>
      <Grid item xs={12}><Select  {...configCategory}/></Grid>
      <Grid item xs={12}><Select  {...configPricesBracket}/></Grid>
      <Grid item xs={12}><Box
                  onClick={() => {
                    handleScore();
                  }}
                  
                  style={{
                    fontSize: "15px",
                    color: "#ffffff66",
                    cursor: "pointer",
                    borderBottom: "none",
                  }}
                >
                  <BsFileArrowDownFill size="3em" color={score==="desc"? "orange" : "#ffffff66"}/>
                   <BsFileArrowUpFill size="3em" color={score==="asc"? "orange" : "#ffffff66"}/>
                </Box></Grid></Grid>
      </Styled.Paper>)
}

export default Menu