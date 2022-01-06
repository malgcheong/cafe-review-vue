export {gallery}
const gallery = {
    props:['userData'],
    template:`
    <div>
        <div v-for="row in userTable" style="display:flex; flex-direction:row">
            <div v-for="(data,idx) in row" style="border:solid">
                {{data}}
                <button :class="idx" @click="upHeart">
                    <img src="./heart.png" class="heart">
                </button>
                <div>{{heartCount}}</div>
            </div>
        </div>
    </div>
    `,
    data(){
        return{
            userTable:[],
            heart:0
        }
    },
    methods:{
        propsToTable(){
            var res=[];
            for (let i = 0; i < this.userData.length; i++) {
                var row=[]
                row.push(this.userData[i],this.userData[i++])
                res.push(row)
            }
            console.log(res)
            return res
        },
        upHeart(){
            this.heart++;
            this.$emit('galleryHeart',this.heart)
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