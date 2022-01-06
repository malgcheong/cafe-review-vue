export {gallery}
const gallery = {
    props:['userData'],
    template:`
    <div>
        <div v-for="row in userTable" style="display:flex; flex-direction:row">
            <div v-for="(data,idx) in row" style="border:solid">
                {{data}}
                <button @click="upHeart(idx)">
                    <img src="./heart.png" class="heart">
                    {{heart[idx].count}}
                </button>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            userTable:[],
            heart:[],
            sumHeart:0
        }
    },
    methods:{
        propsToTable(){
            var res=[];
            for (let i = 0; i < this.userData.length; i++) {
                var row=[]
                row.push(this.userData[i],this.userData[++i])
                res.push(row)
                this.heart.push({count:0})
            }
            console.log(res)
            return res
        },
        upHeart(key){
            this.heart[key].count++;
            this.heart.forEach(element => {
                
            });
            this.$emit('galleryHeart',this.sumHeart)
        }
    },
    created(){
        console.log(this.propsToTable())
        this.userTable=this.propsToTable();
    },
    computed:{
        heartCount:function(){
            return this.heart
        }
        
    }
}