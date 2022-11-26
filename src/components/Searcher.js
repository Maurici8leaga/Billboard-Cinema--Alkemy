import React from "react";
import swAlert from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Searcher = () => {
	// protect search for registered users only
	const token = sessionStorage.getItem("token");

	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();

		const keyword = e.currentTarget.keyword.value.trim();

		// condition for the form
		if (keyword.length === 0) {
			swAlert({
				title: "You should type a keyword at least",
				icon: "warning",
			});
		} else if (keyword.length < 4) {
			swAlert({
				title: "You should type 4 letters at least",
				icon: "warning",
			});
		} else {
			e.currentTarget.keyword.value = "";
			navigate(`/results?keyword=${keyword}`);
		}
	};

	return (
		<>
			<form className="d-flex" onSubmit={submitHandler}>
				<input
					className="form-control me-2"
					type="text"
					name="keyword"
					placeholder="Search a movie..."
				/>
				{!token ? (
					<>
						<button className="btn btn-outline-primary" type="submit" disabled>
							Search
						</button>
					</>
				) : (
					<button className="btn btn-outline-primary" type="submit">
						Search
					</button>
				)}
			</form>
		</>
	);
};

export default Searcher;
