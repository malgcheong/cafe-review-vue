

<template>
<div>
    <section v-for="(items,key) in cafeList" :key="key">
        <div class="cafe_title">
            {{items.title}}
        </div>
        <div class="cafe_image">
            <i class="fa-solid fa-arrow-left fa-3x" @click="prev"></i>
            <div v-for="(item,key) in items.List" :key="key">
                <img :src= "getImage(item.image)" alt="" style="width:200px; height:200px;">
            </div>
            <i class="fa-solid fa-arrow-right fa-3x" @click="next"></i>
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
            },
            prev(){
                console.log(1);
            },
            next(){
                console.log(1);
            },

            
        },

        created(){
            axios.get('http://localhost:3000/home/post').then((Response)=>{
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