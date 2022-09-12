<script>
    const user = {
        name: '',
        lastname: '',
        email: ''
    }

    console.log(user.name);
</script>

<section class="form-container" id="form">
    <div class="container mx-auto">
        <form class="form flex flex-col mx-auto items-center">
            <label for="name" class="mb-5">
                <input type="text" placeholder="Nombre" bind:value={user.name}>
            </label>
            <label for="lastname" class="mb-5">
                <input type="text" placeholder="Apellido" bind:value={user.lastname}>
            </label>
        </form>
    </div>
</section>

<style>
    .form {
        width: 40%;
        margin-top: -250px;
    }

    label {
        border: 1px solid #CCCCCC;
        background-color: none;
    }
</style>