<script>
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
</script>

<div class="navbar top-0 z-50 fixed">
	<div class="navbar-start">
		<Logo />
		<span class="font-serif"
			>made by <a href="https://sean.kim" class="link bg-orange-200">sean.kim</a>, original design
			by
			<a
				class="link bg-orange-200"
				href="https://dribbble.com/shots/6919869-Model-Agency-Website-Concept">Anastasia K.</a
			></span
		>
	</div>
	<div class="navbar-end">
		<Menu />
	</div>
</div>
