<template>
  <div>
    <div>
      <input type="checkbox" v-model="allSelected" id="selectAll" @click="selectAll">
      <label for="selectAll">전체 선택</label>
    </div>
    <div v-for="category in categories" :key="category.id">
      <input type="checkbox" v-model="selectedCategories" :value="category.id" :id="category.id">
      <label :for="category.id">{{category.name}}</label>
    </div>
  </div>
</template>
<script>
  export default {
    data: () => {
      return {
        categories: [{
            id: 1,
            name: '사과'
          },
          {
            id: 2,
            name: '배'
          },
          {
            id: 3,
            name: '포도'
          },
          {
            id: 4,
            name: '오렌지'
          }
        ],
        selectedCategories: [],
        allSelected: false
      }
    },
     watch: {
        // 체크박스 전체 선택
        selectedCategories: function () {
          this.allSelected = this.selectedCategories.length === 4;
        }
      },
    methods: {
      selectAll() {
        this.selectedCategories = [];

        if (!this.allSelected) {
          this.categories.forEach((category) => {
            this.selectedCategories.push(category.id)
          })
        }
      }
    }
  }
</script>