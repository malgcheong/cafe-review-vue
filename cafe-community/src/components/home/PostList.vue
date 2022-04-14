<template>
<div>
    <div v-for="(items, key, index) in cafeList" :key="index">
        <div class="cafe-title">
            {{items.title}} >
        </div>
        <div class="cafe-list" :class="key">
            <div class="slide-show">
                <div class="slides" :style="slidesLeft[index]">

                    <div v-for="(item,key) in items.List" :key="key" class="cafe">
                        <img :src= "getImage(item.image)" :title="key">
                        <p class="board">카페이름, 진한회색, {{item.cafeName}}</p>
                        <p class="board">게시글이름, 가장 크게, {{item.boardName}}</p>
                        <p class="board">주소 회색 글자</p>
                        <p class="board">좋아요, 댓글 수</p>
                    </div>

                </div>
                <i class="prev-btn fa-solid fa-arrow-left fa-3x" @click="prevClick(index)" :class="{'no-use': getMaxLeft(index)}"></i>
                <i class="next-btn fa-solid fa-arrow-right fa-3x" @click="nextClick(index)" :class="{'no-use': getMinLeft(index, items.List.length)}"></i>
            </div>
        </div>
    </div>

</div>
</template>
<script>
    import axios from 'axios';
    import {rwd} from '@/functions/rwd.js'; // eslint-disable-line no-unused-vars
    export default {
        data(){
            return{
                cafeList:{},
                cafeListSize: 0,
                cafeSize:[],
                images: '../../assets/images/',
                slideLen: rwd.getSlideLen(),
                slidesLeft: [],
            }
        },
        methods:{
            getMaxLeft(index){
                return parseInt(this.slidesLeft[index].left) >= 0 ? true : false;
            },
            getMinLeft(index, size){
                size = this.slideLen == 40 ? size-2 : this.slideLen == 27 ? size-3 : size-4
                return parseInt(this.slidesLeft[index].left) <= -(size * this.slideLen) ? true : false;
            },
            getImage(image){
                var imgContext = require.context('../../assets/images/', true, /\.*$/);
                return imgContext('./'+image);
            },
            prevClick(index){
                let left = parseInt(this.slidesLeft[index].left) + this.slideLen;
                this.slidesLeft[index].left = left + 'vw';
                console.log(this.slidesLeft[index].left);
            },
            nextClick(index){
                let left = parseInt(this.slidesLeft[index].left) - this.slideLen;
                this.slidesLeft[index].left = left + 'vw';
                console.log(this.slidesLeft[index].left);
            },
            resizeHandler() {
                let size = this.cafeListSize;
                let prevSlideLen = this.slideLen;
                this.slideLen = rwd.getSlideLen();
                while(size--){
                    let index = parseInt(this.slidesLeft[size].left)/prevSlideLen;
                    let left = index * this.slideLen;  
                    this.slidesLeft[size].left = left + 'vw';
                }
            }
        },

        created(){
            axios.get('http://localhost:3000/pica/post').then((Response)=>{
                this.cafeList=Response.data.cafeList;
                for (let key in this.cafeList){  // eslint-disable-line no-unused-vars
                    this.slidesLeft.push({'left': 0});
                    this.cafeListSize++;
                    this.cafeSize.push(this.cafeList[key].List.length);
                }
            }).catch((Error)=>{
                console.log(Error);
            })
            
            //resize 이벤트 등록
            window.addEventListener("resize", this.resizeHandler);
        },
        destroyed() {
            //resize 이벤트 등록
            window.removeEventListener("resize", this.resizeHandler);
        },
    }
</script>

<style scoped>
    .cafe-title{
        margin:2rem 10% 1rem;
        font-size: 1.5rem;
        font-weight: bold;
    }
    .cafe-list{
        width:80vw;
        margin: auto;
    }
    .slide-show{
        display: flex;
        overflow: hidden;
        width: 100%;
        position: relative;
    }
    .slides{
        display: flex;
        transition: 0.5s ease-out;
        position: relative;
        left: 0;
    }
    .cafe{
        cursor: pointer;
    }
    .cafe img{
        transform: translate(50, 50); 
        width: 19vw; 
        height: 250px;
        object-fit: cover;
        margin-right: 1vw;
    }
    .board{
        font-size: 0.8rem;
        margin: 0;
    }
    .prev-btn{
        opacity: 0.7;
        position: absolute;
        color: black;
        border: 5px outset wheat;
        background-color: white;
        left: 1rem;
        cursor: pointer;
        top: 40%;
    }
    .next-btn{
        opacity: 0.7;
        position: absolute;
        color: black;
        border: 5px outset wheat;
        background-color: white;
        right: 1rem;
        cursor: pointer;
        top: 40%;
    }
    .no-use{
        background-color: gray !important;
        pointer-events : none;
    }
    @media all and (max-width: 1024px){
	/* 브라우저 창 width가 1024px보다 작아지는 순간부터 적용 */
	/* 태블릿 */
        .cafe img{
            width: 26vw; 
            margin-right: 1vw;
        }
    }
    @media all and (max-width: 768px){
	/* 브라우저 창 width가 768px보다 작아지는 순간부터 적용 */
    /* 모바일  */
        .cafe img{
            width: 39vw; 
            margin-right: 1vw;
        }
    }

</style>