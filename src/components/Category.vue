<template>
  <div class="category" >
      <h3>{{title}}</h3>
      <slot></slot>
      <ul>
          <li v-for="(item,index) in listData" :key=index>{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name:'CategorY',
    props:["listData","title"]

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