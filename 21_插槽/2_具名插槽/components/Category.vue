<template>
  <div class="category" >
      <h3>{{title}}</h3>
      <slot name="center"></slot>
      <slot name="footer"></slot>

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