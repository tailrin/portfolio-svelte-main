<script>
    import {curRoute, routeParams} from '../store.js'
    import Logo from './Logo.svelte'
    export let currentRoute = {};
    export let params = {};
    curRoute.set(currentRoute)
    routeParams.set(params)
</script>

<Logo/>

<style>

</style>