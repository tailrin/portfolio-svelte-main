<script>
    import {curRoute, routeParams} from '../store.js'
    import {projects} from '../projects.js';
    import LeftArrow from './LeftArrow.svelte'
    import RightArrow from './RightArrow.svelte'
    export let currentRoute = {};
    export let params = {};
    curRoute.set(currentRoute)
    routeParams.set(params)
    let selected = 0
    let selectedProject = {}
    $:{
        selectedProject = projects[selected]
    }

    function handlePrevious(){
        if(selected === 0){
            selected = projects.length -1;
            return;
        }
        selected--;
    }

    function handleNext(){
        if(selected === projects.length -1){
            selected = 0;
            return;
        }
        selected++;
    }
</script>

<section>
    <ul>
        {#each projects as project, i}
            <label for={`project-${i +1}`}>Select project {i + 1}</label>
            <input type="radio" bind:group={selected} value={i} id={`project-${i +1}`}>
        {/each}
    </ul>
    <h2>{selectedProject.name}</h2>
    <div class="wrapper">
        <button on:click|preventDefault={handlePrevious}><LeftArrow/></button>
        <img src={`/images/${selectedProject.screenShot}`} class="screenshot" alt={selectedProject.name}>
        <button on:click|preventDefault={handleNext}><RightArrow/></button>
    </div>
    
    <div>
        <a href={selectedProject.live} target="_blank">Live App</a>
        <a href={selectedProject.repo} target="_blank">Repo</a>
    </div>
    <p>{selectedProject.description}</p>
    <h3>Technologies Used</h3>
    <ul>
        
        {#each selectedProject.tech as tech, i}
        
            {#if i > 0}
                <li class="icon right"><img src={`/images/${tech}.svg`} alt={`${tech} icon`}/></li>
            {:else}
                <li class="icon"><img src={`/images/${tech}.svg`} alt={`${tech} icon`}/></li>
            {/if}
        {/each}
    </ul>
</section>

<style>

    div{
        width: 20%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    section{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: white;
        background: rgba(9, 13, 21, 0.7);
        max-width: 850px;
        padding: 20px;
        margin: 20px;
    }

    a{
        color: white;
        text-decoration: underline;
    }

    .screenshot{
        height: 40%;
        width: 40%;
        margin-bottom: 20px;
    }

    p{
        max-width: 600px;
    }

    ul{
        list-style: none;
        display: flex;
        flex-direction: row;
        padding: 0px;
        justify-content: center;
    }

    .icon{
        height: 30px;
        width: 30px;
    }

    .right{
        margin-left: 20px;
    }

    .wrapper{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    button{
        margin-bottom: 20px;
        background: rgba(0, 0, 0, 0);
        border: none;
        cursor: pointer;
    }

    label{
        visibility: hidden;
        height: 0px;
        width: 0px;
        display: block;
    }

    input[type="radio"]{
        margin: 10px;
        height: 10px;
        color: #4A4744;
    }


</style>