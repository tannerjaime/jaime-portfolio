<script>
	const follow = [
		{ name: "Email", url: "mailto:say@hellojai.me" },
		{ name: "Bluesky", url: "https://bsky.app/profile/jaimetanner.bsky.social" },
		{ name: "LinkedIn", url: "https://www.linkedin.com/in/jaimeatanner/" }
	];

	const copyright = `Jaime Tanner © ${new Date().getFullYear()}`;
</script>

<footer>
	<div class="line">
		<span>{copyright}</span>
		<span class="follow">
			{#each follow as item}
				<a href={item.url} target="_blank" rel="noopener noreferrer">{item.name}</a>
			{/each}
		</span>
	</div>
</footer>

<style>
	footer {
		margin: 0 18rem;
		padding: 1rem 0 3rem;
		span, a {
			font-size: var(--14px, 14px);
			color: #7a746d;
		}
	}

	.line {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		row-gap: 0.35rem;
		width: 100%;
		box-sizing: border-box;
	}

	.follow {
		display: inline-flex;
		align-items: center;
		gap: 1rem;
		justify-content: flex-end;
		margin-left: auto;
	}

	a {
		color: inherit;
		text-decoration: underline;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: 1400px) {
		footer {
			margin: 0 17rem;
		}
	}

	@media (max-width: 1100px) {
		footer {
			margin: 0 4rem;
			padding: 0 0 0.75rem;
		}

		.follow {
			gap: 0.75rem;
		}
	}

	@media (max-width: 760px) {
		footer {
			margin: 0 1.5rem;
			padding: 0 0 0.5rem;
		}
	}
</style>
