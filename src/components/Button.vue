<template>
    <button class="btn btn-primary btn-block text-uppercase my-3">proximo</button>
</template>

<script>
export default {
    name: 'Button'
}
</script>

<style>
    .btn {
        border: none;
        border-radius: 10px;
        background-color: #483698;
        outline: none;
    }

    .btn:focus {
        outline: none;
        background-color: #483698;
    }

    .btn:hover {
        outline: none;
        background-color: rgb(87, 65, 182);  
    }

    .btn-primary:focus {
      box-shadow: none;
    }
</style>