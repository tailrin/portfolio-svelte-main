<script>
    import NavBarLink from './NavBarLink.svelte'
    import {curRoute, routeParams} from '../store.js'
</script>

<nav>
    <NavBarLink name="Home" route="/" />
    <NavBarLink name="About Me" route="/about" />
    <NavBarLink name="Projects" route="/projects" />
</nav>


    

<style>
    nav{
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 0px;
    }
</style>