import React from "react";

function Issue({ issue, updateIssue }) {
	const { id, title, description, state } = issue;

	const handleStateChange = (newState) => {
		if (newState !== state) {
			updateIssue(id, newState);
		}
	};

	return (
		<div className="issue-container">
			<div className={`issue ${state}`}>
				<h2>{title}</h2>
				<p>{description}</p>
				<div className="buttons">
					{state === "open" && (
						<button
							className="mark-as-pending-button"
							onClick={() => handleStateChange("pending")}>
							Mark as Pending
						</button>
					)}
					{state === "pending" && (
						<button
							className="mark-as-closed-button"
							onClick={() => handleStateChange("closed")}>
							Mark as Closed
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default Issue;
