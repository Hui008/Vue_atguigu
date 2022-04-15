<template>
  <div>
      <h1>当前求和为{{sum}}</h1>
      <h1>当前求和的十倍为{{bigSum}}</h1>
      <h2>我在{{school}},学习{{object}}</h2>
      <select v-model="n">
          <option :value="1">1</option>
          <option :value="2">2</option>
          <option :value="3">3</option> 
      </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数时再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
export default {
    name:'CounT',
    data(){
        return {
            n : 1, // 用户选择的数字
            
        }
    },
    methods:{
        /* increment(){
            this.$store.commit('add',this.n)
        },
        decrement(){
            this.$store.commit('minus',this.n)  
        }, */
        /* incrementOdd(){
            this.$store.dispatch('addOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('addWait',this.n) 
        }, */
        ...mapMutations({increment:'ADD',decrement:'MINUS'}),
        ...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'})
    },
    computed:{
        // 借助mapState生成计算属性
        // ...mapState({sum:'sum', school:'school', object:'object'})

        ...mapState(['sum','school','object']),

        //借助mapGetters生成计算属性
        // ...mapGetters({bigSum:'bigSum'}
        ...mapGetters(['bigSum'])
    },
    mounted() {
        console.log(this.$store);
        // const x = mapState({sum:'sum', school:'school', object:'object'})
        /* mapState({sum:'sum', school:'school', object:'object'})
        mapGetters({bigSum:'bigSum'})
        mapMutations({increment:'add',decrement:'minus'})
        mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}) */
    },

}
</script>
    
<style>
    button{
        margin-left: 5px;
    }
</style>