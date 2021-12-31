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
        userData:[]
    },
    template:`
        <div>
            <div class="buttons_viewType" style="padding:20px;">
                <button
                v-for="(type,key) in getViewType"
                :key="key"
                :type="type"
                @click="switchType(type)"
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
        }
    },
    created(){
        //컴포넌트 가져오기 (지역컴포넌트로 viewType만 등록한다고 가정)
        this.getViewType=Object.keys(this.$options.components)
        console.log(this.getViewType);
        this.userData=this.getData()
    }

})