<template>
  <div>
    <div>
      <input
        type="checkbox"
        v-model="allSelected"
        id="selectAll"
        @click="selectAll"
      />
      <label for="selectAll">전체 선택</label>
    </div>
    <div v-for="category in categories" :key="category.id">
      <input
        type="checkbox"
        v-model="selectedCategories"
        :value="category.id"
        :id="category.id"
      />
      <label :for="category.id">{{ category.name }}</label>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from "vue";

const categories = ref([
  { id: 1, name: "사과" },
  { id: 2, name: "배" },
  { id: 3, name: "포도" },
  { id: 4, name: "오렌지" },
]);
const selectedCategories = ref([]);
const allSelected = ref(false);

watch(selectedCategories, () => {
  allSelected.value = selectedCategories.value.length === 4;
});

function selectAll() {
  selectedCategories.value = [];

  if (!allSelected.value) {
    categories.value.forEach((category) => {
      selectedCategories.value.push(category.id);
    });
  }
}
</script>


