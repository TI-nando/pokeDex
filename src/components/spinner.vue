<template>
  <div class="spinner-container">
    <div class="spinner"></div>
  </div>
</template>

<script setup></script>

<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.spinner {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #f3f3f3;
  border-top-color: #3498db;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
