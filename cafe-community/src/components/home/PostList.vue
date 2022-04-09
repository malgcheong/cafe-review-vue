<template>
<div>
    <div v-for="(items,key) in cafeList" :key="key">
        <div class="cafe-title">
            {{items.title}}
        </div>
        <div class="cafe-list">
            <div class="slides">
                <div v-for="(item,key) in items.List" :key="key" class="image-wrapper" :style="styleObj">
                    <img :src= "getImage(item.image)" :title="key">
                </div>
                <i class="prev fa-solid fa-arrow-left fa-3x" @click="prev" :class="{nouse: getLeft}"></i>
                <i class="next fa-solid fa-arrow-right fa-3x" @click="next" :class="{nouse: getRight(items.List)}"></i>
            </div>
        </div>
    </div>

</div>
</template>
<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                cafeList:{},
                images: '../../assets/images/',
                prevCl: true,
                nextCl: true,
                slideLen: 20,
                styleObj: {
                    position: "relative",
                    left: 0,
                },
                index: 0,
            }
        },
        computed:{
            getLeft(){
                return parseInt(this.styleObj.left) >= 0 ? true : false;
            },
        },
        methods:{
            getRight(a){
                let length = a.length;
                if(window.innerWidth < 768){
                    this.slideLen = 40;
                    length -= 2;
                }else if(window.innerWidth < 1024){
                    this.slideLen = 27;
                    length -= 3;
                } else{
                    this.slideLen = 20;
                    length -= 4;
                }
                return parseInt(this.styleObj.left) <= -(length * this.slideLen) ? true : false;
            },
            getImage(image){
                var imgContext = require.context('../../assets/images/', true, /\.*$/);
                return imgContext('./'+image);
            },
            prev(){
                if(window.innerWidth < 768){
                    this.slideLen = 40;
                }else if(window.innerWidth < 1024){
                    this.slideLen = 27;
                } else{
                    this.slideLen = 20;
                }
                let left = parseInt(this.styleObj.left) + this.slideLen;
                this.styleObj.left = left + 'vw';
                console.log(this.styleObj.left);
            },
            next(){
                if(window.innerWidth < 768){
                    this.slideLen = 40;
                }else if(window.innerWidth < 1024){
                    this.slideLen = 27;
                } else{
                    this.slideLen = 20;
                }
                let left = parseInt(this.styleObj.left) - this.slideLen;
                this.styleObj.left = left + 'vw';
                console.log(this.styleObj.left);
            },
        },

        created(){
            axios.get('http://localhost:3000/pica/post').then((Response)=>{
                this.cafeList=Response.data.cafeList;
            }).catch((Error)=>{
                console.log(Error);
            })

            this.cafeList
        }
    }
</script>

<style scoped>
    .cafe-title{
        margin:2rem 15%;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .cafe-list{
        width:80vw;
        margin: auto;
        position: relative;
    }
    .slides{
        display: flex;
        position: relative;
        overflow: hidden;
        width: 100%;
    }
    .image-wrapper{
        transition: 0.5s ease-out;
    }
    .nouse{
        background-color: gray !important;
        pointer-events : none;
    }
    .image-wrapper img{
        position: relative; 
        top: 0; 
        left: 0; 
        transform: translate(50, 50); 
        width: 19vw; 
        height: 250px;
        object-fit: cover;
        margin-right: 1vw;
    }
    .prev{
        opacity: 0.7;
        position: absolute;
        color: black;
        border: 5px outset wheat;
        background-color: white;
        left: 1rem;
        cursor: pointer;
        top: 40%;
    }
    .next{
        opacity: 0.7;
        position: absolute;
        color: black;
        border: 5px outset wheat;
        background-color: white;
        right: 1rem;
        cursor: pointer;
        top: 40%;

    }
    @media all and (max-width: 1024px){
	/* 브라우저 창 width가 1024px보다 작아지는 순간부터 적용 */
	/* 태블릿 */
        .image-wrapper img{
            width: 26vw; 
            margin-right: 1vw;
        }
    }
    @media all and (max-width: 768px){
	/* 브라우저 창 width가 768px보다 작아지는 순간부터 적용 */
    /* 모바일  */
        .image-wrapper img{
            width: 39vw; 
            margin-right: 1vw;
        }
    }

</style>