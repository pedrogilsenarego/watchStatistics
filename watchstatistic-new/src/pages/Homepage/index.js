import React, { useState } from "react";
import Welcoming from "../../components/Welcoming";

import Directory from "./../../components/Directory";

const Homepage = (props) => {
	const [hideModal, setHideModal] = useState(false);

	const toggleModal = () => setHideModal(!hideModal);

	const configModal = {
		hideModal,
		toggleModal
	};

	return (
		<section>
			<Welcoming {...configModal} />
			<Directory />
		</section>
	);
};

export default Homepage;

//
