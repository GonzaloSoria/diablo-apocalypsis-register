<script>
    export let title;    

    const user = {
        name: '',
        lastname: '',
        email: ''
    }

    console.log(user.name);
</script>

<section class="form-container py-20" id="form">
    <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="col-span-2">
                <video autoplay loop muted playsinline>
                    <source src="https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltf8635f01e2553c58/62a004a79c0ad045adc4888b/fenris-introduction-bg-loop-ultra.mp4" type="video/mp4">
                </video>
            </div>
            <div>
                <h2 class="mb-10 text-center">{title}</h2>
                <form class="form flex flex-col">
                    <label for="name" class="mb-10">
                        <input type="text" placeholder="Nombre" bind:value={user.name}>
                    </label>
                    <label for="lastname" class="mb-10">
                        <input type="text" placeholder="Apellido" bind:value={user.lastname}>
                    </label>
                    <label for="email" class="mb-10">
                        <input type="email" placeholder="Email" bind:value={user.email}>
                    </label>
                    <div class="text-center">
                        <button type="submit" class="btn-send">enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<style>
    .form-container h2 {
        color: var(--text-first-color);
    }

    input[type='text'], input[type='email'] {
        width: 100%;
        background-color: #000000;
        border: 1px solid var(--text-first-color);
        padding: 20px;
        font-size: var(--copy-size);
        color: var(--text-first-color);
    }

    input[type='text']:focus, input[type='email']:focus {
        --tw-ring-color: none;
    }

    .btn-send {
        background-color: #56191D;
        color: var(--text-first-color);
        width: 200px;
        padding: 20px;
        text-transform: uppercase;
        transition-duration: .4s;
    }

    .btn-send:hover {
        background-color: #7d0009;
    }
</style>