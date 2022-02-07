import React, { useState, useEffect, useRef } from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { VscHome } from "react-icons/vsc";
import TextField from "@mui/material/TextField";

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

	const Data = [
		{ name: "rolexDatejust", id: "7LyNi2wYMfl3FtGvo03F" },
		{ name: "omegaseams", id: "3232kkk" }
	];

	useEffect(
		() => {
			setOptions(Data);
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
				name="search"
				size="small"
				placeholder="Search"
				value={search}
				onChange={(event) => {
					setDisplay(true);
					setSearch(event.target.value);
				}}
			></TextField>
			{display &&
				options
					.filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
					.map((item, pos) => {
						return (
							<Typography
								ref={wrapperRef}
								onClick={() => {
									handleSearch(item.id);
								}}
								key={pos}
							>
								{item.name}
							</Typography>
						);
					})}
		</div>
	);
};

export default LeftIcons;
