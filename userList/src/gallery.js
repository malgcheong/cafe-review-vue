export {gallery}
const gallery = {
    props:['userData'],
    template:`
    <div>
        <div v-for="row in userTable" style="display:flex; flex-direction:row">
            <div v-for="data in row" style="border:solid">{{data}}</div>
        </div>
    </div>
    `,
    data(){
        return{
            userTable:[]
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
        }
    },
    created(){
        console.log(this.propsToTable())
        this.userTable=this.propsToTable();
    }
}