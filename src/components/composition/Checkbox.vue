<script setup>
import { ref, onMounted } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}

onMounted(() => {
  console.log(`초기값${count}`);
});
</script>

<template>
  <h1>하하하하</h1>
  <button @click="increment">숫자 {{ count }}</button>
</template>
