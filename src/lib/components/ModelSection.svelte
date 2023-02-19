<script lang="ts">
	import type { BioInfo } from '../../types/ModelSection.type';

	export let bioInfo: BioInfo;
</script>

<div class={'w-full h-[100vh] font-serif ' + bioInfo.gradient}>
	<div class="grid grid-cols-2 grid-rows-6">
		<div class="flex flex-col h-[100vh] mx-5 md:mx-10 lg:mx-32 items-start justify-center">
			<div class="py-16 relative">
				<h1
					class={'text-5xl md:text-7xl z-10 tracking-wide font-semibold relative ' +
						bioInfo.nameColor}
				>
					{bioInfo.name}
				</h1>
				<span class={'text-[16rem] absolute -top-28 font-sans font-bold ' + bioInfo.bgColor}
					>{bioInfo.number}</span
				>
			</div>
			<div class="z-10 grid grid-cols-2 grid-rows-2 gap-6 md:gap-28 h-32">
				<div>
					<h2 class="text-sm md:text-lg">Height</h2>
					<p class="text-sm md:text-lg font-bold font-sans tracking-wider pb-3">{bioInfo.height}</p>

					<h2 class="text-sm md:text-lg">Eye Colour</h2>
					<p class="text-sm md:text-lg font-bold font-sans tracking-wider">{bioInfo.eyeColor}</p>
				</div>
				<div>
					<h2 class="text-sm md:text-lg">Weight</h2>
					<p class="text-sm md:text-lg font-bold font-sans tracking-wider pb-3">{bioInfo.weight}</p>

					<h2 class="text-sm md:text-lg">Hair Colour</h2>
					<p class="text-sm md:text-lg font-bold font-sans tracking-wider">{bioInfo.hairColor}</p>
				</div>
			</div>
			<div class="my-3 md:my-6 font-sans tracking-wide text-gray-600 text-xs md:text-base">
				<p>
					{bioInfo.bio}
				</p>
			</div>
			<div class="flex w-full flex-row-reverse">
				<button class="outline-1 outline px-6 py-1 text-xl outline-gray-600 text-gray-600"
					>Portfolio</button
				>
			</div>
		</div>
		<div class="flex flex-col h-[100vh] items-start justify-center relative">
			<img
				alt="ModelOne"
				src={bioInfo.picture}
				class="sm:h-3/4 md:h-[50%] lg:h-2/3 xl:h-5/6  md:w-auto absolute -left-3 md:-left-5 lg:-left-8"
			/>
		</div>
	</div>
</div>
