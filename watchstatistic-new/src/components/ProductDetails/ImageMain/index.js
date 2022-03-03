import React, {useState} from "react"
import {
	
	Card,
	CardMedia,
	
	IconButton,
	
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";




const ImageMain = ({isMatch, productThumbnail}) => {
    const [mainImage, setMainImage] = useState(null);

    const useStyles = makeStyles((theme) => ({
        filter: {},
    
        media: {
            
            textAlign: "right",
            paddingTop: "70vh",
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
        <>
								{productThumbnail && (
									<Card style={{ backgroundColor: "#18161E" }}>
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
															<CardMedia
				style={{ cursor: "pointer" }}
				component="img"
				height="50px"
				image={productThumbnail}
				alt=""
				
			/>
														</IconButton>
													);
												})}
								</Card>)}
							</>
    )
}

export default ImageMain