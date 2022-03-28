import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Typography,
  Paper,
  useMediaQuery,
  Button,
  useTheme,
  CardMedia,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsStart,
} from "../../../redux/Products/products.actions";
import { BiCheckboxChecked, BiCheckbox } from "react-icons/bi";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  products: state.productsData.products,
  counters: state.productsData.counters,
});

// eslint-disable-next-line
const MainBody = ({ handleLoadedTopWatches, loadedTopWatches }) => {
  const dispatch = useDispatch();
  const [score, setScore] = useState('desc')
  const history = useHistory();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const pageSize = 10;



  const { products, currentUser } = useSelector(mapState);

  const { data, isLastPage, queryDoc } = products;

  const useStyles = makeStyles((theme) => ({
    tableRow: {
      "&:hover": {
        backgroundColor: "#858585 !important",
      },
    },
    tableHead: {
      backgroundColor: "#145875 !important",
    },
  }));

  const classes = useStyles();

  const { userVotes } = currentUser ? currentUser : "null";

  useEffect(
    () => {
      
        dispatch(fetchProductsStart({ pageSize, sort: score }));
        handleLoadedTopWatches();
      
    },
    // eslint-disable-next-line
    [score]
  );

  const handleGoNext = () => {
    if (!isLastPage) {
      dispatch(
        fetchProductsStart({
          startAfterDoc: queryDoc,
          pageSize,
          sort: score,
          persistProducts: data
        })
      );
    }
  }


  if (data.length < 1) {
    return (
      <div>
        <p>No search Results</p>
      </div>
    );
  }

  return (
    <div>
      <Grid container spacing={1} style={{ padding: "20px" }}>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" size="small">
              <TableHead className={classes.tableHead}>
                <TableRow>
                  <TableCell align="center" style={{ fontSize: "15px" }}>
                    #
                  </TableCell>
                  <TableCell align="center" style={{ fontSize: "15px" }}>
                    Watch
                  </TableCell>
                  <TableCell align="center" style={{ fontSize: "15px" }}> 
                    Ref.
                  </TableCell>
                  <TableCell align="center" style={{ fontSize: "15px" }}>
                    {score ==="desc" &&(<AiOutlineArrowDown style={{cursor:"pointer"}} onClick={()=>{setScore("asc")}}/>)}{score==="asc" && (<AiOutlineArrowUp style={{cursor:"pointer"}} onClick={()=>{setScore("desc")}}/>)} Score
                  </TableCell>
                  <TableCell align="center" style={{ fontSize: "15px" }}>
                    Category
                  </TableCell>
                  <TableCell align="center" style={{ fontSize: "15px" }}>
                    Votes
                  </TableCell>
                  {currentUser && (
                    <TableCell align="center" style={{ fontSize: "15px" }}>
                      <BiCheckboxChecked fontSize="1.5em" />
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {data?.map((product, i) => {
                  const {
                    productName,
                    productBrand,
                    avgTotal,
                    productCategory,
                    numberVotesOwn,
                    numberVotesNotOwn,
                    documentID,
                    reference,
                  } = product;
                  if (!productName) return null;
                  const color = "#ffffffB3";

                  const colorRow = `linear-gradient(90deg, rgba(3, 10, 13, ${
                    avgTotal / 10
                  }) ${avgTotal * 10}%, rgb(25, 107, 145) 100%)`;
                  return (
                    <TableRow
                      className={classes.tableRow}
                      key={productName}
                      style={{
                        cursor: "pointer",
                        background: colorRow,
                      }}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                      onClick={() => history.push(`/product/${documentID}`)}
                    >
                      <TableCell align="center" style={{ color: color }}>
                        {i + 1}
                      </TableCell>
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        style={{ color: color }}
                      >
                        {productBrand} - {productName}
                      </TableCell>
                      <TableCell
                        align="center"
                        component="th"
                        scope="row"
                        style={{ color: color }}
                      >
                        {reference}
                      </TableCell>
                      <TableCell align="center" style={{ color: color }}>
                        {avgTotal}
                      </TableCell>
                      <TableCell align="center" style={{ color: color }}>
                        {productCategory}
                      </TableCell>
                      <TableCell align="center" style={{ color: color }}>
                        {numberVotesNotOwn + numberVotesOwn}
                      </TableCell>
                      {currentUser &&
                        currentUser.userVotes &&
                        userVotes.includes(documentID) && (
                          <TableCell
                            align="center"
                            style={{ color: color, fontSize: "15px" }}
                          >
                            <BiCheckboxChecked fontSize="1.5em" />
                          </TableCell>
                        )}
                      {currentUser && !userVotes.includes(documentID) && (
                        <TableCell
                          align="center"
                          style={{ color: color, fontSize: "15px" }}
                        >
                          <BiCheckbox fontSize="1.5em" />
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          
          
          {!isLastPage && (<Button onClick={()=>handleGoNext()}>Get more</Button>)}
            
        
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ height: "100%", backgroundColor: "black" }}>
            <CardMedia
              style={{ height: isMatch ? "80vh" : "100%", borderRadius: "4px" }}
              image={data[0].productThumbnail[0]}
            >
              <Grid container alignItems="center" justifyContent="center">
                <Typography style={{ color: "#ffffff66", paddingTop: "10px" }}>
                  Check here the top voted watch
                </Typography>
              </Grid>
            </CardMedia>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainBody;
