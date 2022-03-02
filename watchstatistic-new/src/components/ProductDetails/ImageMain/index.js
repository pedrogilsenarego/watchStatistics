import React, {useState} from "react"
import {
	Grid,
	Card,
	CardMedia,
	
	IconButton,
	
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { BsXDiamond } from "react-icons/bs";



const ImageMain = ({isMatch, productThumbnail}) => {
    const [mainImage, setMainImage] = useState(null);

    const useStyles = makeStyles((theme) => ({
        filter: {},
    
        media: {
            
            textAlign: "right",
            paddingTop: "55vh",
            paddingRight: "5px",
            borderRadius: "4px"
        },
       
        textBtn: {
            color: "#ffffff",
            fontSize: "13px",
    
            "&:hover": {
                color: "#FFA500"
            },
            "&:active": {
                color: "#FFFFFF"
            }
        }
    }));
    
    const classes = useStyles();

   

    return (
        <Grid item xs={12} md={7}>
								{productThumbnail && (
									<Card style={{ backgroundColor: "#04040699" }}>
										<CardMedia  className={classes.media} image={mainImage ? mainImage : productThumbnail[0]}/>
											
										
								
									{
												productThumbnail.map((productThumbnail, pos) => {
													return (
														<IconButton
														key={pos}
															className={classes.textBtn}
															onClick={(e) => {
																setMainImage(productThumbnail);
															}}
														>
															<BsXDiamond fontSize="1.5em" />
														</IconButton>
													);
												})}
								</Card>)}
							</Grid>
    )
}

export default ImageMain