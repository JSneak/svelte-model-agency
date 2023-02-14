<script lang="ts">
	import ModelFour from '$lib/components/ModelSections/ModelFour.svelte';
	import ModelOne from '$lib/components/ModelSections/ModelOne.svelte';
	import ModelThree from '$lib/components/ModelSections/ModelThree.svelte';
	import ModelTwo from '$lib/components/ModelSections/ModelTwo.svelte';
	import VerticalNav from '$lib/components/VerticalNav.svelte';

	import Model1 from '$lib/assets/model1.png';
	import Model2 from '$lib/assets/model2.jpeg';
</script>

<div class="relative">
	<div class="flex flex-row">
		<div class="w-[5%]">
			<VerticalNav />
		</div>
		<div class="relative overflow-hidden">
			<ModelOne />
			<ModelTwo />
			<ModelThree />
			<ModelFour />
		</div>
	</div>
	<div class="fixed bottom-0 left-10 z-20">
		<div class="grid grid-cols-2 gap-8 h-48">
			<div>
				<p class="font-serif">Scroll</p>
				<img alt="PrevPerson" src={Model1} class="h-48" />
			</div>
			<div>
				<img alt="NextPerson" src={Model2} class="h-48" />
			</div>
		</div>
	</div>
</div>
