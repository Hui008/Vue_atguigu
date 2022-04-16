<template>
  <ul>
    <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由携带query写法 -->
      <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
        <!-- 跳转路由携带to写法 -->
      <router-link :to="{
          name:'xiangqing',
          query:{
              id:m.id,
              title:m.title
          }
      }">
      {{m.title}}
      </router-link>&nbsp;&nbsp;

    </li>
    <router-view></router-view>
  </ul>

</template>

<script>
export default {
  name: 'MessageS',
  data() {
    return {
      messageList: [
        { id: '001', title: '消息001' },
        { id: '002', title: '消息002' },
        { id: '003', title: '消息003' },
      ],
    }
  },
}
</script>
