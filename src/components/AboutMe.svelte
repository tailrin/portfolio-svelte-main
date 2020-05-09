<script>
    import {curRoute, routeParams} from '../store.js'
    export let currentRoute = {};
    export let params = {};
    curRoute.set(currentRoute)
    routeParams.set(params)
</script>

<div>
    <section>
        <h3>Solver of puzzles, slayer of conundrums.</h3>
        <p>I have an inherent love of deductive logic and distaste for an unsolved puzzle.  Programming is logic given form and function. In my humble opinion, nothing is more beautiful than well-constructed logic in action. I stumbled across a script when I worked for Apple and was able to break it down into its component parts to figure out what it did. From there I started modifying it to make it do different things. Thus began my love affair with programming. And yes my wife is jealous.
        </p>
        <p>When I am not solving puzzles I am spending time with my beautiful wife and three children. I love to play board games with my ten-year-old and help her with her homework. I also love to play on the floor with my one-year-old twins. As a family, we love to spend time in the great outdoors. We love hiking and camping. </p>
        <p>As a programmer, I love the dynamic of working in a team. Merging disparate coding styles is a challenge that no one who calls themselves a slayer of conundrums could pass up. The group dynamic of balancing each others strengths and weaknesses is a marvelous challenge in and of itself.</p>
    </section>

    <section>
        <h3>Skills</h3>
        <ul>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Nodejs</li>
            <li>Svelte</li>
            <li>Enzyme</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Jest</li>
        </ul>
    </section>
</div>

<style>

    div{
        display: flex;
        flex-direction: column;
        max-width: 850px;
        background: rgba(9, 13, 21, 0.7);
        margin: 20px 0px;
        
    }

    section{
        height: 100%;
        margin: 0px;
        padding: 20px;
        color: white;
    }

    p{
        line-height: 1.5;
    }

    ul {
        columns: 2;
            -webkit-columns: 2;
            -moz-columns: 2;
    }
</style>