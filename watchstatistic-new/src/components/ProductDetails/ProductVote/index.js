import React, { useState } from "react";
import { Slider, Typography } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { updateProductVoteStart } from "../../../redux/Products/products.actions";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "orange",
      },
      track: {
        color: "white",
      },
      rail: {
        color: "white",
      },
    },
  },
});
const useStyles = makeStyles((theme) => ({
  textBtn: {
    color: "#FFFFFF",
    border: "solid 2px",
    borderColor: "#ffffff66",
    fontSize: "13px",
    borderRadius: "20px",
    "&:hover": {
      color: "#FFA500",
    },
    "&:active": {
      color: "#FFFFFF",
    },
  },
}));

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  product: state.productsData.product,
});

const initialCategoriesState = {
  quality: "",
  price: "",
  brand: "",
  refinement: "",
  history: "",
  engineering: "",
  xFactor: "",
};

// eslint-disable-next-line
const ProductVote = ({
  handleTargetVote,
  setTargetVote,
  handleVisualTargetVote,
  targetVote,
  handleCloseVote,
  handleUpdate,
  setShowVote,
}) => {
  const classes = useStyles();

  const { product, currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const [ownership, setOwnership] = useState("");
  const [categories, setCategories] = useState({ ...initialCategoriesState });
  const [errors, setErrors] = useState(false);
  const { productID } = useParams();

  const { id, userVotes, numberVotes, experience, points } = currentUser;

  const {
    numberVotesOwn,
    numberVotesNotOwn,
    votationsOwn,
    votationsNonOwn,
    avgVotationsOwn,
    avgVotationsNotOwn,
  } = product;

  var i = 0;
  const newVotationsOwnArray = [];
  while (i < 7) {
    newVotationsOwnArray.push(
      (
        (categories[Object.keys(categories)[i]] +
          votationsOwn[i] * numberVotesOwn) /
        (numberVotesOwn + 1)
      ).toFixed(2)
    );
    i++;
  }
  var f = 0;
  const newVotationsNotOwnArray = [];
  while (f < 7) {
    newVotationsNotOwnArray.push(
      (
        (categories[Object.keys(categories)[f]] +
          votationsNonOwn[f] * numberVotesNotOwn) /
        (numberVotesNotOwn + 1)
      ).toFixed(2)
    );
    f++;
  }

  const newVoteArray = [...userVotes, productID];

  const handleApplyVote = (e) => {
    e.preventDefault();
    if (Object.values(categories).includes("")) {
      setErrors(true);
      return;
    }
    if (ownership === "Own") {
      const newAvgTotal =
        numberVotesNotOwn > 0
          ? (
              (+newAvgVotationsOwn * (numberVotesOwn + 1) +
                +avgVotationsNotOwn * numberVotesNotOwn) /
              (numberVotesNotOwn + numberVotesOwn + 1)
            ).toFixed(2)
          : (+newAvgVotationsOwn / 1).toFixed(2);

      const configVote = {
        numberVotesOwn: numberVotesOwn + 1,
        numberVotesNotOwn: numberVotesNotOwn,
        productID: productID,
        votationsNonOwn: votationsNonOwn,
        votationsOwn: newVotationsOwnArray,
        avgVotationsOwn: newAvgVotationsOwn,
        avgVotationsNotOwn: avgVotationsNotOwn,
        avgTotal: newAvgTotal,
        userID: id,
        numberVotes: numberVotes + 1,
        experience: experience + 1,
        points: points + 1,
        userVotes: newVoteArray,
      };
      dispatch(updateProductVoteStart(configVote));
    }
    if (ownership === "Not Own") {
      const newAvgTotal =
        numberVotesOwn > 0
          ? (
              (+newAvgVotationsNotOwn * (numberVotesNotOwn + 1) +
                +avgVotationsOwn * numberVotesOwn) /
              (numberVotesOwn + numberVotesNotOwn + 1)
            ).toFixed(2)
          : (+newAvgVotationsNotOwn / 1).toFixed(2);

      const configVote = {
        numberVotesOwn: numberVotesOwn,
        numberVotesNotOwn: numberVotesNotOwn + 1,
        productID: productID,
        votationsNonOwn: newVotationsNotOwnArray,
        votationsOwn: votationsOwn,
        avgVotationsOwn: avgVotationsOwn,
        avgVotationsNotOwn: newAvgVotationsNotOwn,
        avgTotal: newAvgTotal,
        userID: id,
        numberVotes: numberVotes + 1,
        experience: experience + 1,
        points: points + 1,
        userVotes: newVoteArray,
      };
      dispatch(updateProductVoteStart(configVote));
    }
    setErrors(false);
    setTargetVote(false);
    handleCloseVote();
    setShowVote(false);
  };

  const newAvgVotationsOwn = (
    newVotationsOwnArray.reduce(function (prev, curr) {
      return (Number(prev) || 0) + (Number(curr) || 0);
    }) / 7
  ).toFixed(2);

  const newAvgVotationsNotOwn = (
    newVotationsNotOwnArray.reduce(function (prev, curr) {
      return (Number(prev) || 0) + (Number(curr) || 0);
    }) / 7
  ).toFixed(2);

  return (
    <FormControl component="fieldset">
      <Grid container>
        <Grid item xs={12}>
          <RadioGroup
            aria-label="gender"
            value={ownership}
            onChange={(event) => {
              setOwnership(event.target.value);
            }}
          >
            <FormControlLabel
              value="Own"
              control={<Radio style={{ color: "#ffffff66" }} />}
              label="I own/experimented the watch"
            />
            <FormControlLabel
              value="Not Own"
              control={<Radio style={{ color: "#ffffff66" }} />}
              label="I do not own/experimented the watch"
            />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} style={{ marginBottom: "10px" }}>
          <ThemeProvider theme={muiTheme}>
            <Typography id="discrete-slider" gutterBottom>
              Aesthetics
            </Typography>
            <Slider
              className={classes.slider}
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              name="quality"
              onChange={(event, newValue) => {
                setCategories({ ...categories, quality: newValue });
                handleTargetVote(newValue, "quality");
              }}
            />
            <Typography id="discrete-slider" gutterBottom>
              Price over Quality
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              name="price"
              onChange={(event, newValue) => {
                setCategories({ ...categories, price: newValue });
                handleTargetVote(newValue, "price");
              }}
            />
            <Typography id="discrete-slider" gutterBottom>
              Brand
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              onChange={(event, newValue) => {
                setCategories({ ...categories, brand: newValue });
                handleTargetVote(newValue, "brand");
              }}
            />
            <Typography id="discrete-slider" gutterBottom>
              Refinement
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              onChange={(event, newValue) => {
                setCategories({ ...categories, refinement: newValue });
                handleTargetVote(newValue, "refinement");
              }}
            />
            <Typography id="discrete-slider" gutterBottom>
              History
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              onChange={(event, newValue) => {
                setCategories({ ...categories, history: newValue });
                handleTargetVote(newValue, "history");
              }}
            />
            <Typography id="discrete-slider" gutterBottom>
              Engineering
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              onChange={(event, newValue) => {
                setCategories({ ...categories, engineering: newValue });
                handleTargetVote(newValue, "engineering");
              }}
            />
            <Typography id="discrete-slider" gutterBottom>
              X-Factor
            </Typography>
            <Slider
              defaultValue={0}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={0}
              max={10}
              onChange={(event, newValue) => {
                setCategories({ ...categories, xFactor: newValue });
                handleTargetVote(newValue, "xFactor");
              }}
            />
          </ThemeProvider>
          {errors && Object.values(categories).includes("") && (
            <Typography style={{ color: "red", fontSize: "15px" }}>
              You must choose all fields
            </Typography>
          )}
        </Grid>

        <Button
          className={classes.textBtn}
          style={{ borderColor: "orange" }}
          onClick={handleApplyVote}
        >
          Apply Vote
        </Button>
        <Button
          className={classes.textBtn}
          style={{ marginLeft: "10px" }}
          onClick={() => {
            handleVisualTargetVote(true);
            handleUpdate();
          }}
        >
          Preview Vote
        </Button>
      </Grid>
    </FormControl>
  );
};
export default ProductVote;
