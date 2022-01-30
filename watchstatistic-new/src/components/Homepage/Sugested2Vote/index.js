import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Item from "./Item";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestProductsStart } from "../../../redux/Products/products.actions";

const mapState = (state) => ({
	currentUser: state.user.currentUser,
	products: state.productsData.latestProducts
});

const pageSize = 12;

const Sugested2Vote = () => {
	const dispatch = useDispatch();
	const { products, currentUser } = useSelector(mapState);
	const [buttonLeft, setButtonLeft] = useState(false);
	const [buttonRight, setButtonRight] = useState(true);
	const [x, setX] = useState(0);

	const { data } = products;

	const filterData = () => {
		const newData = [];
		for (let i = 0; i < data.length; i++) {
			if (!currentUser.userVotes.includes(data[i].documentID)) {
				newData.push(data[i]);
			}
		}
		const newData1 = newData.slice(0, 4);
		const newData2 = newData.slice(5, 8);
		const newData3 = newData.slice(9, 12);

		const finalArray = [newData1, newData2, newData3];
		return finalArray;
	};

	useEffect(
		() => {
			dispatch(fetchLatestProductsStart({ pageSize }));
		},
		// eslint-disable-next-line
		[]
	);

	const goLeft = () => {
		setX(x + 104.2);
	};
	const goRight = () => {
		setX(x - 104.2);
	};

	const handleGoRight = () => {
		goRight();
		if (x === 0) {
			setButtonLeft(true);
		}
		if (x === -104.2) {
			setButtonRight(false);
		}
	};

	const handleGoLeft = () => {
		goLeft();
		if (x === -104.2) {
			setButtonLeft(false);
		}
		if (x === -208.4) {
			setButtonRight(true);
		}
	};

	if (!Array.isArray(data)) return null;

	if (data.length < 1) {
		return (
			<div>
				<p>No search Results</p>
			</div>
		);
	}

	return (
		<div style={{ marginTop: "80px" }}>
			<Typography variant={"h6"}>Sugested for you to vote</Typography>
			<Container>
				{buttonLeft && (
					<Avatar
						style={{
							backgroundColor: "#ffffff66",
							position: "absolute",
							zIndex: "2",
							cursor: "pointer",
							marginTop: "50px"
						}}
						onClick={() => {
							handleGoLeft();
						}}
					>
						<IoIosArrowBack fontSize="1em" />
					</Avatar>
				)}
				{buttonRight && (
					<Avatar
						style={{
							backgroundColor: "#ffffff66",
							position: "absolute",
							zIndex: "2",

							cursor: "pointer",
							marginTop: "50px",
							marginLeft: "85vw"
						}}
						onClick={() => {
							handleGoRight();
						}}
					>
						<IoIosArrowForward fontSize="1em" />
					</Avatar>
				)}
			</Container>

			<div style={{ display: "flex", marginTop: "10px" }}>
				{filterData().map((item, pos) => (
					<Container style={{ paddingTop: "10px", minWidth: "100%" }} key={pos}>
						<Grid
							container
							spacing={2}
							style={{
								display: "flex",
								transition: "0.5s",
								transform: `translateX(${x}%)`
							}}
						>
							{item.map((item, pos) => {
								const configItem = { currentUser };

								return (
									<Grid item xs={6} sm={4} lg={3}>
										<Item item={item} key={pos} {...configItem} />
									</Grid>
								);
							})}
						</Grid>
					</Container>
				))}
			</div>
		</div>
	);
};

export default Sugested2Vote;
