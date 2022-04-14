<template>
  <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
            <input type="text" placeholder="enter the name you search" v-model="keyWord">&nbsp;
            <button @click='searchUsers'>Search</button>
        </div>
    </section>
</template>

<script>
    // import axios from 'axios'
    export default {
        name:'SearcH',
        data(){
            return {
                keyWord:''
            }
        },
        methods:{
            searchUsers() {
                // console.log(this);
                // 请求前更新List数据
                this.$bus.$emit('updateListData',{isLoading:true,errMsg:'',users:[],isFirst:false})
                this.$http.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response =>{
                        this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
                    },
                    error =>{
                        // console.log('请求失败了',error.message);
                        this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
                    }
                )
            }
        }
    }
</script>
