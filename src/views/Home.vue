<template>
  <div>
    <h1>홈</h1>
    <Checkbox />
    <router-link to="/test">테스트</router-link>
  </div>
</template>

<script>
import Checkbox from "../components/Checkbox.vue";
export default {
  components: {
    Checkbox,
  },
};
</script>
