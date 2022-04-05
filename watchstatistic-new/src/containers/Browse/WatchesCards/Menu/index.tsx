
import * as Styled from "./styles"
import { Box } from "@material-ui/core";
import Select from "../../../forms/SelectMUI";
import watchBrands from "../../../../assets/data/watchBrands.json";
import watchTypes from "../../../../assets/data/watchTypes.json"
import pricesBracket from "../../../../assets/data/pricesBracket.json"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

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
      <Select  {...configBrands}/>
      <Select  {...configCategory}/>
      <Select  {...configPricesBracket}/>
      <Box
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
                  {score === "desc" && <AiOutlineArrowDown />}
                  {score === "asc" && <AiOutlineArrowUp />} Score
                </Box>
      </Styled.Paper>)
}

export default Menu