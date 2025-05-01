<script lang="ts">
    export let type: "button" | "submit" | "reset" = "button"; 
</script>


<button type={type} class="btn"> <slot /> </button>

<style>
    .btn {
        border: none;
        border-radius: 8px;
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
        margin-top: 1rem;
        background-color: #ff9a76;
        color: white;
        cursor: pointer;
    }
</style>
