

<template>
<div>
    <section v-for="(items,key) in cafeList" :key="key" class="recent">
        <div>
            {{items.title}}
        </div>
        <div v-for="(item,key) in items" :key="key">
            <div><img :src= "images + item.image" alt=""></div>
        </div>
    </section>
    <div><img :src= a alt=""></div>

</div>
</template>
<script>
    import axios from 'axios';
    import images from '@/assets/images/';

    export default {
        data(){
            return{
                cafeList:{},
                images:images
            }
        },
        created(){
            axios.get('http://localhost:3000').then((Response)=>{
                this.cafeList=Response.data.cafeList;
            }).catch((Error)=>{
                console.log(Error);
            })

            this.cafeList
        }
    }
</script>

<style scoped>

</style>