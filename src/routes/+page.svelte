<script lang="ts">
	import { sections } from '$lib/data/sectionData';
	import VerticalNav from '$lib/components/VerticalNav.svelte';
	import ModelSection from '$lib/components/ModelSection.svelte';
	import ScrollButtons from '$lib/components/ScrollButtons.svelte';
</script>

<div class="relative">
	<div class="flex flex-row">
		<div class="w-[5%]">
			<VerticalNav />
		</div>
		<div class="relative overflow-hidden">
			<ModelSection bioInfo={sections[0]} />
			<ModelSection bioInfo={sections[1]} />
			<ModelSection bioInfo={sections[2]} />
			<ModelSection bioInfo={sections[3]} />
		</div>
	</div>
	<ScrollButtons />
</div>
