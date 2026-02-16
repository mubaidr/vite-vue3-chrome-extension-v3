<template>
  <div
    v-if="error"
    class="alert alert-error shadow-lg"
  >
    <div>
      <span>{{ error }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: string
}>()
</script>
