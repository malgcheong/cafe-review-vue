export {gallery}
const gallery = {
    props:['userData'],
    template:`
    <div>
        <table>
            <tr v-for = "rowSize in getRowSize"> 
                {{userIndex = rowSize - 1}}
                <td v-for = "user in getUser" style = "border:solid"> {{user}} </td>
            </tr>
        </table>
    </div>
    `,
    data(){
        return{
            userTable:[],
            userIndex: 0,
            colSize:3, //column size
        }
    },
    computed: {
        getRowSize:function(){
            debugger;
            return Math.ceil(this.userTable.length/this.colSize)
        },
        getUser:function(){
            debugger;
            return this.userTable.slice(this.getIndex, this.getIndex + this.colSize);
        },
        getIndex:function(){
            debugger;
            return this.userIndex * this.colSize;

        }
    },
    methods:{
    },
    created(){
        this.userTable=this.userData;
    },
}