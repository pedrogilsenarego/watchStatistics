
import * as Styled from "./styles"
import Select from "../../../forms/SelectMUI";
import watchBrands from "../../../../assets/data/watchBrands.json";
import watchTypes from "../../../../assets/data/watchTypes.json"
import pricesBracket from "../../../../assets/data/pricesBracket.json"

interface Props {
  productBrands: any,
  setProductBrands: (productBrands:any) => void,
  productCategory: any,
  setProductCategory: (productCategory:any) => void,
  productPrices: any,
  setProductPrices: (productPrices:any) => void,
}

const Menu = ({setProductBrands, productBrands, productCategory, setProductCategory, productPrices, setProductPrices}: Props) => {
   
  

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

    return (<Styled.Paper><Select  {...configBrands}/><Select  {...configCategory}/><Select  {...configPricesBracket}/></Styled.Paper>)
}

export default Menu