<script>
    import ExternalLink from './ExternalLink.svelte'

    const gitLink = {
        link: "https://github.com/tailrin",
        icon: "github",
    }

    const linkedIn = {
        link: "https://www.linkedin.com/in/joshua-calab-hahn",
        icon: "linkedin",
    }
    const email = {
        link: "mailto:joshua@hahnwebdevelopment.com",
        icon: "envelope",

    }
</script>

<section id="contact-info">
    <h1>Joshua Hahn</h1>
    <ul>
        <li><ExternalLink {...gitLink}/></li>
        <li><ExternalLink {...linkedIn}/></li>
        <li><ExternalLink {...email}/></li>
    </ul>
</section>

<style>

    ul{
        list-style: none;
        display: flex;
        padding: 0px;
    }

    li{
        margin-left: 10px;
    }

    #contact-info{
        align-self: center;
        margin-left: auto;
        margin-right: auto;
    }

    @media only screen and (min-width: 2500px){
        h1{
            font-size: 2em;
        }
    }

</style>