const GithubStarButton = ({ repo }: { repo: string }) => {
	return (
		<div>
			<iframe
				src={`https://ghbtns.com/github-btn.html?user=${repo.split("/")[2]}&repo=${repo.split("/")[1]}&type=star&count=true`}
				width="120"
				height="20"
			></iframe>
		</div>
	);
};

export default GithubStarButton;
