<!-- MUHAMAD SIROJUDIN - 043922682 -->
<template>
  <main>
    <h1>Daftar angka 1 s/d 50</h1>
    <ul>
      <li
        v-for="angka in listAngka"
        :key="angka"
        :class="[angka % 2 == 0 ? 'genap' : 'ganjil']"
      >
        {{ angka }}
      </li>
    </ul>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// Membuat array angka dari 1 sampai 50
const listAngka = ref<number[]>(Array.from({ length: 50 }, (_, i) => i + 1))
</script>

<style scoped>
h1 {
  color: #b11f1f;
}
ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
li {
  padding: 5px;
  border-bottom: 1px solid #555;
}
/* Variasi, membedakan angka genap dan ganjil */
li.genap {
  color: #b11f1f;
}
li.ganjil {
  color: #555;
}
</style>
