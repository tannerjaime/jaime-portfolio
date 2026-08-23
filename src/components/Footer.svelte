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
		width: min(calc(100% - (var(--page-padding) * 2)), var(--page-width));
		margin: 0 auto;
		padding: 1rem 0 3rem;
		box-sizing: border-box;
		span, a {
			font-size: var(--14px, 14px);
			color: var(--color-body);
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

</style>
