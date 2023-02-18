<script lang="ts">
	import Placeholder from '$lib/assets/placeholder.png';
	import Model1 from '$lib/assets/model1.png';
	import Model2 from '$lib/assets/model2.jpeg';
	import Model3 from '$lib/assets/model3.png';
	import Model4 from '$lib/assets/model4.png';

	let initialPictureState = {
		src1: Placeholder,
		src2: Model2
	};
	$: pictureState = currentSection(yCoord) || initialPictureState;

	let yCoord: number;

	const currentSection = (y: number) => {
		if (y > 0 && y < 1000) {
			return {
				src1: Placeholder,
				src2: Model2
			};
		} else if (y > 1000 && y < 2000) {
			return {
				src1: Model1,
				src2: Model3
			};
		} else if (y > 2000 && y < 3000) {
			return {
				src1: Model2,
				src2: Model4
			};
		} else if (y > 3000) {
			return {
				src1: Model3,
				src2: Placeholder
			};
		}
	};

	const jumpToSection = (section: string) => {
		switch (section) {
			case '/src/lib/assets/model1.png':
				window.scrollTo({ top: 0, behavior: 'smooth' });
				break;
			case '/src/lib/assets/model2.jpeg':
				window.scrollTo({ top: 1001, behavior: 'smooth' });
				break;
			case '/src/lib/assets/model3.png':
				window.scrollTo({ top: 2001, behavior: 'smooth' });
				break;
			case '/src/lib/assets/model4.png':
				window.scrollTo({ top: 3001, behavior: 'smooth' });
				break;
		}
	};
</script>

<svelte:window bind:scrollY={yCoord} />
<div class="fixed bottom-0 left-10 z-20">
	<div class="grid grid-cols-2 gap-8 h-48">
		<div>
			<p class="font-serif mb-5">Prev.</p>
			<button on:click={() => jumpToSection(pictureState.src1)} class="block">
				<img alt="PrevPerson" src={pictureState.src1} class="h-48" />
			</button>
		</div>
		<div>
			<button on:click={() => jumpToSection(pictureState.src2)} class="block">
				<img alt="NextPerson" src={pictureState.src2} class="h-48" />
			</button>
		</div>
	</div>
</div>
