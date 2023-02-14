<script>
	import modelThree from '$lib/assets/model3.png';
</script>

<div class="w-full h-[100vh] gradientModelThree font-serif">
	<div class="grid grid-cols-2 grid-rows-6">
		<div class="flex flex-col h-[100vh] mx-32 items-start justify-center">
			<div class="py-16 relative">
				<h1 class="text-7xl z-10 tracking-wide font-semibold text-gray-700 relative">
					Katsiaryna Endruszkiewicz
				</h1>
				<span class="text-[16rem] absolute -top-28 text-[#fe5d5f] font-sans font-bold">3</span>
			</div>
			<div class="z-10 grid grid-cols-2 grid-rows-2 gap-28 h-32">
				<div>
					<h2 class="text-lg">Height</h2>
					<p class="text-lg font-bold font-sans tracking-wider pb-3">185</p>

					<h2 class="text-lg">Eye Colour</h2>
					<p class="text-lg font-bold font-sans tracking-wider">Green</p>
				</div>
				<div>
					<h2 class="text-lg">Weight</h2>
					<p class="text-lg font-bold font-sans tracking-wider pb-3">57</p>

					<h2 class="text-lg">Hair Colour</h2>
					<p class="text-lg font-bold font-sans tracking-wider">Blonde</p>
				</div>
			</div>
			<div class="my-3 font-sans tracking-wide text-gray-600">
				<p>
					Katsiaryna Endruszkiewicz, freelance photographer, publishing her amazing works for free
					on unsplash.com
				</p>
			</div>
			<div class="flex w-full flex-row-reverse">
				<button class="outline-1 outline px-6 py-1 text-xl outline-gray-600 text-gray-600"
					>Portfolio</button
				>
			</div>
		</div>
		<div class="flex flex-col h-[100vh] items-start justify-center relative">
			<img alt="ModelOne" src={modelThree} class="h-3/4 absolute -left-14" />
		</div>
	</div>
</div>
