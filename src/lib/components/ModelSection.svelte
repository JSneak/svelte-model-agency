<script lang="ts">
	type BioInfo = {
		name: string;
		picture: string;
		nameColor: string;
		gradient: string;
		bgColor: string;
		number: number;
		height: number;
		weight: number;
		eyeColor: string;
		hairColor: string;
		bio: string;
	};

	export let bioInfo: BioInfo;
</script>

<div class={'w-full h-[100vh] font-serif ' + bioInfo.gradient}>
	<div class="grid grid-cols-2 grid-rows-6">
		<div class="flex flex-col h-[100vh] mx-32 items-start justify-center">
			<div class="py-16 relative">
				<h1 class={'text-7xl z-10 tracking-wide font-semibold relative ' + bioInfo.nameColor}>
					{bioInfo.name}
				</h1>
				<span class={'text-[16rem] absolute -top-28 font-sans font-bold ' + bioInfo.bgColor}
					>{bioInfo.number}</span
				>
			</div>
			<div class="z-10 grid grid-cols-2 grid-rows-2 gap-28 h-32">
				<div>
					<h2 class="text-lg">Height</h2>
					<p class="text-lg font-bold font-sans tracking-wider pb-3">{bioInfo.height}</p>

					<h2 class="text-lg">Eye Colour</h2>
					<p class="text-lg font-bold font-sans tracking-wider">{bioInfo.eyeColor}</p>
				</div>
				<div>
					<h2 class="text-lg">Weight</h2>
					<p class="text-lg font-bold font-sans tracking-wider pb-3">{bioInfo.weight}</p>

					<h2 class="text-lg">Hair Colour</h2>
					<p class="text-lg font-bold font-sans tracking-wider">{bioInfo.hairColor}</p>
				</div>
			</div>
			<div class="my-3 font-sans tracking-wide text-gray-600">
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
			<img alt="ModelOne" src={bioInfo.picture} class="h-3/4 absolute -left-14" />
		</div>
	</div>
</div>
