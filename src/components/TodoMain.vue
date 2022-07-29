<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li class="completed" v-for="item in $store.state.user.list" :key='item.id'>
      <div class="view">
        <input class="toggle" type="checkbox" />
        <label>{{item.name}}</label>
        <button @click='butFn(item.id)' class="destroy"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods:{ 
    butFn(id){
      console.log(id)
      this.$store.dispatch('asyncDellist',id)
    }
  }
}
</script>
