import {gallery} from './gallery.js'
import {table} from './table.js'

new Vue({
    el:"#app",
    components:{
        'gallery-view':gallery,
        'table-view':table,
    },
    data:{
        getViewType:[],
        type:'',
        userData:[],
        activedTab:''
    },
    template:`
        <div>
            <div class="buttons_viewType" style="padding:20px;">
                <button
                v-for="type in getViewType"
                :type="type"
                @click="switchType(type)"
                :class="activate(type)"
                
                >
                {{type}}
                </button>
            </div>
            <div class="user-list" style="padding:40px;">
                <gallery-view :userData="userData" v-if="type=='gallery-view'"></gallery-view>
                <table-view :userData="userData" v-if="type=='table-view'"></table-view>
            </div>
        </div>
    `,
    methods:{
        //view type변경 함수
        switchType:function(type){
            this.type=type
        },
        //axios로 userData get
        getData: function(){
            var vm=this
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function(response){
                console.log(response.data);
                vm.userData=response.data
            })
            .catch(function(error){
                console.log(error);
            });
        },
        activate(type){
            return this.type==type&&"active"
        }
    },
    created(){
        //컴포넌트 가져오기 (지역컴포넌트로 viewType만 등록한다고 가정)
        console.log(this)
        this.getViewType=Object.keys(this.$options.components)
        console.log(this.getViewType);
        this.userData=this.getData()
    }

})