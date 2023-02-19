<script lang="ts">
	import NavDot from './NavDot.svelte';
	let initialNavState: boolean[] = [true, false, false, false];
	$: NavState = handleScroll(yCoord) || initialNavState;

	let yCoord: number;

	const handleScroll = (y: number) => {
		if (y > 0 && y < 1000) {
			return [true, false, false, false];
		} else if (y > 1000 && y < 2000) {
			return [false, true, false, false];
		} else if (y > 2000 && y < 3000) {
			return [false, false, true, false];
		} else if (y > 3000) {
			return [false, false, false, true];
		}
	};

	const jumpToSection = (section: number) => {
		switch (section) {
			case 0:
				window.scrollTo({ top: 0, behavior: 'smooth' });
				break;
			case 1:
				window.scrollTo({ top: 1001, behavior: 'smooth' });
				break;
			case 2:
				window.scrollTo({ top: 2001, behavior: 'smooth' });
				break;
			case 3:
				window.scrollTo({ top: 3001, behavior: 'smooth' });
				break;
		}
	};
</script>

<svelte:window bind:scrollY={yCoord} />
<div
	class="flex flex-col h-[100vh] justify-center items-center sticky top-0 gap-4 ml-2 sm:ml-0 md:ml-1"
>
	<NavDot bind:onPage={NavState[0]} on:click={() => jumpToSection(0)} />
	<NavDot bind:onPage={NavState[1]} on:click={() => jumpToSection(1)} />
	<NavDot bind:onPage={NavState[2]} on:click={() => jumpToSection(2)} />
	<NavDot bind:onPage={NavState[3]} on:click={() => jumpToSection(3)} />
</div>
