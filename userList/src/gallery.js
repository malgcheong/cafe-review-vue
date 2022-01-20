export {gallery}
const gallery = {
    props:['userData'],
    template:`
    <div>
        <div style="display:flex; flex-wrap:wrap;">
            <div v-for="(user,idx) in userData" style="border:solid; flex: 1 1 40%">
                {{user}}
                <button @click="upHeart(idx)">
                <img src="./heart.png" class="heart">
                {{heart[idx]}}
                </button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            heart:[],
            sumHeart:0
        }
    },
    methods:{
        initHeartarr(){
            for (let i = 0; i < this.userData.length; i++) {
                this.heart.push(0);
                //this.heart.push({count:0})
            }
        },
        upHeart(key){
            //배열 index로 항목을 직접 설정하는 경우 vue는 배열의 변화를 감지할 수 없다
            //Vue.set()메서드를 사용하거나 속성이 존재해야한다
            var count = this.heart[key]+1;
            Vue.set(this.heart, key, count);
            //this.heart.splice(key,1,count);
            //this.heart[key].count++;
            

            //reduce 함수사용해보기
            this.sumHeart = this.heart.reduce((prev,curr) => {return prev + curr});
            //var total = 0;
            // this.heart.forEach(element => {
            //     total += element;
            // });
            // this.sumHeart=total;
            this.$emit('galleryHeart',this.sumHeart)
        }
    },
    created(){
        //heart갯수 배열 초기화
        this.initHeartarr();
    },
    
}

