<script>
    export let title; 
    export let message_succes;
    let users = [];
    let form_sent_succesfully = false;

    let user = {
        name: '',
        lastname: '',
        email: '',
    }

    let errors = {
        errorName: false,
        errorLastname: false,
        name: 'No se ha enviado ningun dato',
        lastname: 'No se ha enviado ningun dato'
    }

    const reset = () => {
        user.name = '';
        user.lastname = '';
        user.email = '';
        errors.name = 'No se ha enviado ningun dato';
        errors.lastname = 'No se ha enviado ningun dato';
    };

    const handle_submit = () => {
        if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(user.name)) {
            errors.name = 'El nombre solo puede tener letras y espacios';
            errors.errorName = true;
        } else {
            errors.errorName = false;
        };

        if (!/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/.test(user.lastname)) {
            errors.lastname = 'El apellido solo puede tener letras y espacios';
            errors.errorLastname = true;
        } else {
            errors.errorLastname = false;
        };

        if(errors.errorName === false && errors.errorLastname === false) {
            users = [...users, {name: user.name, lastname: user.lastname, email: user.email}];
            form_sent_succesfully = true;
            console.log(users);
            setTimeout(() => {
                form_sent_succesfully = false;
                reset();
            }, 4000);
        };  
    };
</script>

<section class="form-container pt-5 md:pt-20" id="form">
    <div class="container px-5 mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3">
            <div class="col-span-2">
                <video autoplay loop muted playsinline>
                    <source src="https://blz-contentstack-assets.akamaized.net/v3/assets/blt9c12f249ac15c7ec/bltf8635f01e2553c58/62a004a79c0ad045adc4888b/fenris-introduction-bg-loop-ultra.mp4" type="video/mp4">
                </video>
            </div>
            <div>
                <h2 class="font-old-fenris text-subtitle-sm md:text-subtitle-md lg:text-subtitle-lg text-first-color text-center uppercase font-extrabold mb-10">{title}</h2>
                <form on:submit|preventDefault={handle_submit} class="form flex flex-col" id="form_reset">
                    <label>
                        <input 
                            class="text-first-color text-copy-sm md:text-copy-md mb-2" 
                            type="text" 
                            placeholder="Nombre" 
                            minlength="3" 
                            required
                            bind:value={user.name}>
                    </label>
                    <p class="{errors.errorName !== true ? 'overflow-hidden' : 'overflow-visible text-error font-bold'} mb-5">{errors.name}</p>
                    <label for="lastname">
                        <input 
                            class="text-first-color text-copy-sm md:text-copy-md mb-2" 
                            type="text" 
                            placeholder="Apellido" 
                            minlength="3" 
                            required
                            bind:value={user.lastname}>
                    </label>
                    <p class="{errors.errorLastname !== true ? 'overflow-hidden' : 'overflow-visible text-error font-bold'} mb-5">{errors.lastname}</p>
                    <label for="email">
                        <input 
                            class="text-first-color text-copy-sm md:text-copy-md mb-10" 
                            type="email" 
                            placeholder="Email" 
                            required 
                            bind:value={user.email}>
                    </label>
                    <div class="text-center">
                        <button type="submit" class="btn-send text-first-color text-copy-sm md:text-copy-md">enviar</button>
                    </div>
                </form>
                <h3 class="{form_sent_succesfully !== true ? 'opacity-0' : 'opacity-100'} font-old-fenris text-first-color text-copy-sm md:text-copy-md text-center uppercase font-extrabold py-5" id="succes_form_message">{message_succes}</h3>
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

    h3 {
        transition-duration: 2s;
    }

</style>