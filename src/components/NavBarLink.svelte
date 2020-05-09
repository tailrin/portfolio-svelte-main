<script>
    import { onDestroy } from 'svelte';
    import {curRoute, routeParams} from '../store.js'
    export let route = "/";
    export let name = "Home";
    let isSelected = false
    let curRouteVal;
    const unsubscribe = curRoute.subscribe(value => {
        curRouteVal = value.name
    });
    $:{
        if(curRouteVal === route){
            isSelected = true
        } else {
            isSelected = false
        }
    }
    onDestroy(unsubscribe);
</script>

{#if isSelected}
    <a href={route} class="selected" id={name} >{name}</a>
{:else}
    <a href={route} id={name}>{name}</a>
{/if}

<style>
    a{
        box-sizing: border-box;
        padding-top:15px;
        display: block;
        width: 33.33%;
        margin: 0px;
        background-color: #4A4744;
        color: White;
        height: 48px;
        text-align: center;
    }
    .selected{
        background-color: #322F2E;
    }
    
</style>