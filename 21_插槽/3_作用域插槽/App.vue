<template>
  <div class="container">
      <Category title="游戏分类">
          <template scope="atguigu">
              <ul>
                  <li v-for="(game,index) in atguigu.games" :key=index>{{game}}</li>
              </ul>
          </template>
      </Category>
      <Category title="游戏分类">
          <template scope="{games}">
              <ol>
                  <li v-for="(game,index) in games" :key=index>{{game}}</li>
              </ol>
          </template>
      </Category>
      <Category title="游戏分类">
          <template scope="{games}">
                  <h4 v-for="(game,index) in games" :key=index>{{game}}</h4>
          </template>
      </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
    name:'App',
    components:{Category},
    
}
</script>

<style>
.container,
.foot {
		display: flex;
		justify-content: space-around;
	}
</style>