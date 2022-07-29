<template>
  <header class="header">
    <h1 :style="`color:${satr}`">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="value"
      @keyup.enter="enter"
    />
  </header>
</template>

<script>
export default {
  props: {
    satr: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
      objlist: {},
      done: false,
    };
  },
  methods: {
    enter() {
      console.log(this.value);
      this.objlist = {
        name: this.value,
        done: false,
        id: this.$store.state.user.list.length + 1,
      };
      this.$store.dispatch("asyncAddlist", this.objlist);
    },
  },
};
</script>
<style scoped>
h1 {
}
</style>