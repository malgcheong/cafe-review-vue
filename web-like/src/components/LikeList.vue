<template>
    <div>
        <table class="cafeTable">
            <thead>
                <tr>
                    <th>
					<label class="form-checkbox">
                    <input type="checkbox" v-model="selectAll" @click="select">
                    <i class="form-icon"></i>
                    </label>
                    </th>
                    <th>카페이름</th>
                    <th>위치</th>
                    <th>리뷰개수</th>
                    <th>좋아요</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in likeLists" v-bind:key="data">
                    <td>
                        <label class="form-checkbox">
                            <input type="checkbox" :value="data.cafeName" v-model="selected">
                            <i class="form-icon"></i>
                        </label>
                    </td>
                    <td>{{data.cafeName}}</td>
                    <td>{{data.cafeLocation}}</td>
                    <td>{{data.numOfReview}}</td>
                    <td>{{data.numOfLike}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['likeList'],
    data(){
        return{
          selected:[],
          selectAll:false
        }
    },
    methods:{
        select(){
            //selectall 선택o상태에서 클릭한 경우(전체 선택)
            if(!this.selectAll){
                for(let cafe in this.likeLists){
                    this.selected.push(this.likeLists[cafe].cafeName);
                }
            }
            //selectall 선택x상태에서 클릭한 경우 배열 비우기(전체 선택 해제)
            else this.selected=[];
        }
    }
}
</script>

<style scope>
.cafeTable{
  font-family: 'Do Hyeon', sans-serif;
}
</style>