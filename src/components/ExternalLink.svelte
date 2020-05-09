<script>
    export let link;
    export let icon;
    let target = "";
    if(!link.includes('mailto')){
        target = "_blank"
    }
</script>


<a href={link} target={target} class={icon}>
    <img src={`/images/${icon}.svg`} alt="" width="30px" height="30px" color="white">
</a>

<style>
    @media only screen and (min-width: 2500px){
        img{
            width: 60px;
            height: 60px;
        }
    }
</style>
