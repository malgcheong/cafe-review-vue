

<template>
<div>
    <section v-for="(items,key) in cafeList" :key="key">
        <div class="cafe_title">
            {{items.title}}
        </div>
        <div class="cafe_image">
            <div v-for="(item,key) in items.List" :key="key">
                <img :src= "getImage(item.image)" alt="" style="width:200px; height:200px;">
            </div>
        </div>
    </section>

</div>
</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                cafeList:{},
                images: '../../assets/images/'
            }
        },
        methods:{
            getImage(image){
                var imgContext = require.context('../../assets/images/', true, /\.*$/);
                return imgContext('./'+image);
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
    .cafe_image{
        display: flex;
        justify-content: space-around;
    }
    .cafe_title{
        margin:100px 0px 10px 250px;
    }
</style>