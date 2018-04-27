<template>
  <div class="outer">
  <div v-show="checked" class="wrapper">
    {{ marker }}
  </div>
  </div>
</template>

<script>
export default {
  name: 'Square',

  props: {
    checked: {
      required: true,
      type: Boolean
    },

    marker: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
.outer {
  height: 50px;
  width: 50px;
  border: 1px solid black;
}
</style>
