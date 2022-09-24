<template>
  修改信息界面
</template>

<script setup>
  import {
    setStorage
  } from "@/utils/shared/handleStatus.js"

  setStorage(uni, "organization", 1)
</script>

<style lang="scss" scoped>
</style>
