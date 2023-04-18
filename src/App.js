import React, { useState } from "react";
import "./App.css";
import Issue from "./Issue";

function App() {
	const [issues, setIssues] = useState([
		{
			id: 1,
			title: "Issue 1",
			description: "Description of issue 1",
			state: "open",
		},
		{
			id: 2,
			title: "Issue 2",
			description: "Description of issue 2",
			state: "pending",
		},
		{
			id: 3,
			title: "Issue 3",
			description: "Description of issue 3",
			state: "closed",
		},
	]);

	const updateIssue = (id, newState) => {
		setIssues((prevIssues) => {
			const updatedIssues = prevIssues.map((issue) => {
				if (issue.id === id) {
					return { ...issue, state: newState };
				}
				return issue;
			});
			return updatedIssues;
		});
	};

	return (
		<div className="App">
			<h1>Issue Tracker</h1>
			<div className="issue-list">
				{issues.map((issue) => (
					<Issue key={issue.id} issue={issue} updateIssue={updateIssue} />
				))}
			</div>
			{issues.every((issue) => issue.state === "closed") && (
				<p>Congratulations - You are amazing!</p>
			)}
		</div>
	);
}

export default App;
