<script>
    import { browser } from "$app/environment";

    let url = '';

    function submitURL() {
        if (url == '') return;

        const cleanURL = encodeURIComponent(url)
        if (browser) {
            window.location.href = `/site/${cleanURL}`
        }
    }
</script>

<h1>VProx</h1>
<div class="url-form">
    <input type="url" bind:value={url} /><br/>
    <br/><button type="submit" on:click={() => {submitURL()}}>Visit</button>
</div>

<style>
    h1 {
        text-align: center;
        font-size: 5em;
    }

    .url-form {
        display: block;
        padding-left: 48em;
    }

    .url-form > input {
        width: 15em;
        height: 5em;

        margin: auto;

        text-align: center;

        border-radius: 0.5em;

        background-color: #1e1e1e;
        color: white;
        font-size: 1.5em;

        border-color: white;
        border-width: 0.4em;
        border-style: solid;
    }

    .url-form > button {
        margin-left: 5.5em;

        height: 5em;
        width: 10em;

        font-size: large;
    }
</style>