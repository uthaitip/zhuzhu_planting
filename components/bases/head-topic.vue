<template>
  <div>
    <h1 class="text-xl my-4">{{  title }}</h1>
  </div>
</template>

<script lang="ts" setup>

    defineProps<{
        title: string;
    }>();
</script>

<style>

</style>