import Home from './components/Home.svelte';
import AboutMe from './components/AboutMe.svelte';
import Projects from './components/Projects.svelte';

const routes = [
    {
        name: "/",
        component: Home
    },
    {
        name: "about",
        component: AboutMe
    },
    {
        name: "projects",
        component: Projects
    }
]

export  {routes}