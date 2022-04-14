<template>
  <div class="category" >
      <h3>{{title}}</h3>
      
      <slot :games="games">
          <ul slot="center">
            <li v-for="(game,index) in games" :key=index>{{game}}</li>
          </ul>
      </slot>

  </div>
</template>

<script>
export default {
    name:'CategorY',
    props:["title"],
    data(){
        return {
            games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
        }
    }

}
</script>

<style>
    .category {
        background-color: pink;
        width: 200px;
        height: 300px;
    }
    h3 {
        background-color: skyblue;
        text-align: center;
    }
    img {
        width: 100%;
    }
    video {
        width: 100%;
    }
</style>