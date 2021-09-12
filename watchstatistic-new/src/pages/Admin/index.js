import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	addProductStart,
	fetchProductsStart,
	deleteProductStart
} from "../../redux/Products/products.actions";
import Modal from "./../../components/Modal";
import FormInput from "./../../components/forms/FormInput";
import FormSelect from "./../../components/forms/FormSelect";
import Button from "./../../components/forms/Button";
import LoadMore from "./../../components/LoadMore";
import { CKEditor } from "ckeditor4-react";
import "./styles.scss";
import watchTypes from "./../../assets/data/watchTypes.json";
import watchBrands from "./../../assets/data/watchBrands.json";

const mapState = ({ productsData }) => ({
	products: productsData.products
});

const Admin = (props) => {
	const { products } = useSelector(mapState);
	const dispatch = useDispatch();
	const [hideModal, setHideModal] = useState(true);
	const [productCategory, setProductCategory] = useState("divers");
	const [productBrand, setProductBrand] = useState("Rolex");
	const [productName, setProductName] = useState("");
	const [productThumbnail, setProductThumbnail] = useState("");
	const [productDesc, setProductDesc] = useState("");

	const { data, queryDoc, isLastPage } = products;

	useEffect(
		() => {
			dispatch(fetchProductsStart());
		},
		// eslint-disable-next-line
		[]
	);

	const toggleModal = () => setHideModal(!hideModal);

	const configModal = {
		hideModal,
		toggleModal
	};

	const resetForm = () => {
		setHideModal(true);
		setProductCategory("divers");
		setProductBrand("Rolex");
		setProductName("");
		setProductThumbnail("");
		setProductDesc("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			addProductStart({
				productCategory,
				productBrand,
				productName,
				productThumbnail,
				productDesc,
				avgTotal: 0,
				numberVotesNotOwn: 0,
				numberVotesOwn: 0,
				avgVotationsOwn: 0,
				avgVotationsNotOwn: 0,
				votationsNonOwn: [0, 0, 0, 0, 0, 0, 0],
				votationsOwn: [0, 0, 0, 0, 0, 0, 0]
			})
		);
		resetForm();
	};

	const handleLoadMore = () => {
		dispatch(
			fetchProductsStart({
				startAfterDoc: queryDoc,
				persistProducts: data
			})
		);
	};

	const configLoadMore = {
		onLoadMoreEvt: handleLoadMore
	};

	return (
		<div className="admin">
			<div className="callToActions">
				<ul>
					<li>
						<Button onClick={() => toggleModal()}>Add new product</Button>
					</li>
				</ul>
			</div>

			<Modal {...configModal}>
				<div className="addNewProductForm">
					<form onSubmit={handleSubmit}>
						<h2>Add new product</h2>

						<FormSelect
							label="Category"
							options={watchTypes.optionsAddNew}
							handleChange={(e) => setProductCategory(e.target.value)}
						/>
						<FormSelect
							label="Brand"
							options={watchBrands.optionsAddNew}
							handleChange={(e) => setProductBrand(e.target.value)}
						/>

						<FormInput
							label="Name"
							type="text"
							value={productName}
							handleChange={(e) => setProductName(e.target.value)}
						/>

						<FormInput
							label="Main image URL"
							type="url"
							value={productThumbnail}
							handleChange={(e) => setProductThumbnail(e.target.value)}
						/>
						<CKEditor
							onChange={(evt) => setProductDesc(evt.editor.getData())}
						/>
						<br />

						<Button type="submit">Add product</Button>
					</form>
				</div>
			</Modal>

			<div className="manageProducts">
				<table border="0" cellPadding="0" cellSpacing="0">
					<tbody>
						<tr>
							<th>
								<h1>Manage Products</h1>
							</th>
						</tr>
						<tr>
							<td>
								<table
									className="results"
									border="0"
									cellPadding="10"
									cellSpacing="0"
								>
									<tbody>
										{Array.isArray(data) &&
											data.length > 0 &&
											data.map((product, index) => {
												const { productName, productThumbnail, documentID } =
													product;

												return (
													<tr>
														<td>
															<img src={productThumbnail} alt="" />
														</td>
														<td>{productName}</td>
														<td>
															<Button
																onClick={() =>
																	dispatch(deleteProductStart(documentID))
																}
															>
																Delete
															</Button>
														</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td></td>
						</tr>
						<tr>
							<td>
								<table border="0" cellPadding="10" cellSpacing="0">
									<tbody>
										<tr>
											<td>{!isLastPage && <LoadMore {...configLoadMore} />}</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Admin;
