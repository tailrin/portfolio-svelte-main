<script>
    import ContactInfo from './ContactInfo.svelte';
</script>

<header>
    <img src="images/Joshua.jpg" alt="picture of Joshua" id="hero-image">
    <ContactInfo/>
</header>

<style>

    #hero-image{
        display: inline-block;
        width: 37.5%;
        height: auto;
        max-width: 210px;
    }

    header{
        width: 100%;
        display: flex;
        flex-direction: row;
        color: White;
        background-color: #111725;
    }
    

</style>