<template>
  <TodoComponents v-for="item in 10" :key="item" title="数据库概论 第一次作业 - 456班"></TodoComponents>
</template>
<script setup>
  import TodoComponents from "@/components/TodoComponents/index.vue"
</script>
<style lang="scss" scoped>

</style>
