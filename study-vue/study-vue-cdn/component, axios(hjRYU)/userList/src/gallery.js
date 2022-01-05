export {gallery}
const gallery = {
    props:['userData'],
    template:`
    <div>
        <table id = "gallery"></table>
    </div>
    `,
    data(){
        return{
            userTable:[],
            size:3, //column size
        }
    },
    methods:{
        getTable(){
            let table = document.getElementById("gallery");
            let col = 0;
            let content = "";

            Array.from(this.userTable).forEach((value, index, array) =>{
                if(col == index){
                    content += "<tr>";
                    col += this.size;
                }   
                content += `<td style='border:solid'> ${JSON.stringify(value)} </td>` 
                if(col-1 == index) content += "</tr>"
            })

            table.innerHTML = content;
        }
    },
    created(){
        this.userTable=this.userData;
    },
    mounted(){
        this.getTable();
    }
}