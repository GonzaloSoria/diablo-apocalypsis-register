<script>
    export let title;    
    let user = {
        name: '',
        lastname: '',
        email: ''
    }

    let errors = {
        error: false,
        message: 'No hay errores'
    }

    const handle_submit = () => {
        if(user.name === '') {
            errors.message = 'Este campo esta vacío';
            errors.error = true;
        }
    }

    let visible = 'overflow-visible text-error font-bold mb-5';
    let hiden = 'overflow-hiden mb-5';

</script>

<section class="form-container py-20" id="form">
    <div class="container px-5 mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="col-span-2">
                <video autoplay loop muted playsinline>
                    <source src="https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltf8635f01e2553c58/62a004a79c0ad045adc4888b/fenris-introduction-bg-loop-ultra.mp4" type="video/mp4">
                </video>
            </div>
            <div>
                <h2 class="font-old-fenris text-subtitle-xs sm:text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg text-first-color text-center uppercase font-extrabold mb-10">{title}</h2>
                <form on:submit|preventDefault={handle_submit} class="form flex flex-col">
                    <label>
                        <input 
                            class="text-first-color text-copy-lg" 
                            type="text" 
                            placeholder="Nombre" 
                            minlength="2" 
                            required 
                            bind:value={user.name}>
                    </label>
                    <p class={errors.error !== true ? hiden : visible}>{errors.message}</p>
                    <label for="lastname">
                        <input 
                            class="text-first-color text-copy-lg" 
                            type="text" 
                            placeholder="Apellido" 
                            minlength="2" 
                            required 
                            bind:value={user.lastname}>
                    </label>
                    <p class={errors.error !== true ? hiden : visible}>{errors.message}</p>
                    <label for="email">
                        <input 
                            class="text-first-color text-copy-lg" 
                            type="email" 
                            placeholder="Email" 
                            required 
                            bind:value={user.email}>
                    </label>
                    <p class={errors.error !== true ? hiden : visible}>{errors.message}</p>
                    <div class="text-center">
                        <button type="submit" class="btn-send text-copy-lg text-first-color">enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>

<style>
    input[type='text'], input[type='email'] {
        width: 100%;
        background-color: #000000;
        border: 1px solid #D2C8AE;
        padding: 20px;
    }

    input[type='text']:focus, input[type='email']:focus {
        --tw-ring-color: none;
    }

    .btn-send {
        background-color: #56191D;
        width: 200px;
        padding: 20px;
        text-transform: uppercase;
        transition-duration: .4s;
    }

    .btn-send:hover {
        background-color: #7d0009;
    }
</style>