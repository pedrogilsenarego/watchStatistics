import React, { useState, useEffect, useRef } from "react";
import { Button, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import TextField from "@mui/material/TextField";

import axios from "axios";

const WATCHES_INFO =
	"https://us-central1-fir-auth0-9b4cb.cloudfunctions.net/app/watchcorrelations";

const useStyles = makeStyles((theme) => ({
	textBtn: {
		color: "#FFFFFF",
		fontSize: "13px",
		"&:hover": {
			color: "#FFA500"
		},
		"&:active": {
			color: "#FFFFFF"
		}
	},
	textField: {
		"& .MuiOutlinedInput-input": { color: "white" },
		"& . MuiInputLabel-root": {
			color: "#ffffffB3"
		},
		"& .MuiInputLabel-root": { color: "grey" },
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffffff",
			borderWidth: "2px"
		},
		"&:hover .MuiOutlinedInput-input": {
			color: "white"
		},
		"&:hover .MuiInputLabel-root": { color: "grey" },
		"&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffffffB3"
		},
		"&  .MuiOutlinedInput-input": {
			color: "white"
		},
		"& .MuiOutlinedInput-root.Mui-focused": {
			color: "#ffffffB3"
		},
		"& .MuiInputLabel-root.Mui-focused": { color: "#ffffffB3" },
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "#ffffffB3"
		}
	}
}));

const LeftIcons = ({ handleSupportOpen, handleWatchstatisticsOpen }) => {
	const classes = useStyles();
	const history = useHistory();
	const [display, setDisplay] = useState(false);
	const [options, setOptions] = useState([]);
	const [search, setSearch] = useState("");

	const wrapperRef = useRef(null);

	const getDataFromApi = async () => {
		try {
			const response = await axios.get(WATCHES_INFO);
			const data = response.data;

			setOptions(data);
		} catch (error) {
			console.error();
		}
	};

	useEffect(
		() => {
			getDataFromApi();
		},
		// eslint-disable-next-line
		[]
	);
	useEffect(() => {
		window.addEventListener("mousedown", handleClickOutside);
		return () => {
			window.removeEventListener("mousedown", handleClickOutside);
		};
	});

	const handleClickOutside = (event) => {
		const { current: wrap } = wrapperRef;
		if (wrap && !wrap.contains(event.target)) {
			setDisplay(false);
		}
	};
	const handleSearch = (search) => {
		history.push(`/product/${search}`);
		setDisplay(false);
		setSearch("");
	};

	return (
		<div>
			<Button
				className={classes.textBtn}
				component={NavLink}
				disableRipple
				to="/"
				exact
			>
				<VscHome fontSize="1.5em" />
				&nbsp;Home
			</Button>

			<Button
				aria-controls="watchstatistics"
				className={classes.textBtn}
				disableRipple
				onClick={(e) => handleWatchstatisticsOpen(e)}
			>
				{" "}
				<BsGraphUp />
				&nbsp;WatchStatistics
			</Button>

			<Button
				aria-controls="support"
				disableRipple
				className={classes.textBtn}
				onClick={(e) => handleSupportOpen(e)}
			>
				<AiOutlineInfoCircle fontSize="1.5em" />
				&nbsp; Ecosystem
			</Button>
			<TextField
				className={classes.textField}
				style={{ marginLeft: "20px", marginTop: "-2px" }}
				name="search"
				size="small"
				autoComplete="off"
				placeholder="Search"
				value={search}
				onChange={(event) => {
					setDisplay(true);
					setSearch(event.target.value);
				}}
			></TextField>
			{display && search.length > 2 && (
				<Box
					style={{
						backgroundColor: "#ffffff66",
						position: "absolute",
						borderRadius: "8px",
						padding: "30px",
						marginLeft: "49vw",
						minWidth: "200px",
						minHeight: "50px",
						marginTop: "50px"
					}}
				>
					{options

						.filter(
							({ name }) =>
								name.toLowerCase().indexOf(search.toLowerCase()) > -1
						)
						.map((item, pos) => {
							return (
								<Typography
									ref={wrapperRef}
									style={{ cursor: "pointer" }}
									onClick={() => {
										handleSearch(item.id);
									}}
									key={pos}
								>
									{item.name}
								</Typography>
							);
						})}
				</Box>
			)}
		</div>
	);
};

export default LeftIcons;
