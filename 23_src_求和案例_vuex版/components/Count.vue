<template>
  <div>
      <h1>当前求和为{{$store.state.sum}}</h1>
      <select v-model="n">
          <option  :value="1">1</option>
          <option  :value="2">2</option>
          <option  :value="3">3</option> 
      </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前求和为奇数时再加</button>
        <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
    name:'CounT',
    data(){
        return {
            n : 1, // 用户选择的数字
            
        }
    },
    methods:{
        increment(){
            this.$store.commit('add',this.n)
        },
        decrement(){
            this.$store.commit('minus',this.n)
            
        },
        incrementOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('addWait',this.n)
            
        },
    },
    mounted() {
        console.log(this);
    }
}
</script>
    
<style>
    button{
        margin-left: 5px;
    }
</style>