<script setup>
  import { defineAsyncComponent } from 'vue';

  console.log('Test');

  const props = defineProps({
    name: {
      type: String,
      required: true,
    }
  });

  const Icon = defineAsyncComponent(() =>
    import(`../assets/images/${props.name}.svg`)
  );
</script>

<template>
  <Icon />
  <!-- <Icon /> -->
</template>

<style>

</style>