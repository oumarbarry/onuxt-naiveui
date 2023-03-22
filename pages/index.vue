<script setup lang="ts">
import { NButton, NSpace } from 'naive-ui'
</script>

<template>
  <div class="min-h-screen flex items-center justify-center">
    <NSpace>
      <NButton type="primary" class="px-7 py-5" round>
        Primary
      </NButton>
      <NButton type="info" class="px-7 py-5">
        Info
      </NButton>
      <NButton type="success" class="px-7 py-5">
        Success
      </NButton>
      <NButton type="warning" class="px-7 py-5">
        Warning
      </NButton>
      <NButton type="error" class="px-7 py-5" round>
        Error
      </NButton>
    </NSpace>
  </div>
</template>
