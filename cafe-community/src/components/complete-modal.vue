<template>
    <div>
        <div class="modal-background">
        </div>
        <div v-if="onModal">
            <div>
                this is modal
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        onModal:{
            type:Boolean,
            default(){return false;}
        }
    }
}
</script>
<style >
    .modal{
        width:200px;
        display: none;
    }
</style>