<script>
	import Header from './components/Header.svelte';
	import NavBar from './components/NavBar.svelte';
	import { Router } from 'svelte-router-spa'
	import { routes } from './routes'
</script>


<Header/>
<NavBar/>
<main>
	<Router {routes} />
</main>


<style>
	main{
		background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(../images/longs.jpg);
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		flex: 1;
		justify-content: center;
		align-items: center;
		max-width: 2120px;
		max-height: 1414px
	}
</style>