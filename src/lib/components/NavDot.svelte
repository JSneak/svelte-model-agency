<script lang="ts">
	export let onPage: boolean = false;
	let innerWidth = 0;

	$: widthAndHeight = onPage ? (innerWidth >= 768 ? 16 : 8) : innerWidth >= 768 ? 8 : 4;
</script>

<svelte:window bind:innerWidth />
<button on:click>
	<svg
		width={widthAndHeight}
		height={widthAndHeight}
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="8" cy="8" r="8" fill="#3A3A3A" />
	</svg>
</button>
