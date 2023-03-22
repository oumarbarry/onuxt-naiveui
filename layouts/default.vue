<script setup lang="ts">
import type { GlobalThemeOverrides } from 'naive-ui'
import { NConfigProvider, NGlobalStyle, darkTheme, dateFrFR, frFR } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: { primaryColor: '#6b21a8', fontWeightStrong: '500', pressedColor: '0000' },
  Button: { textColor: 'green' },
}
</script>

<template>
  <div class="font-inter">
    <NConfigProvider
      :theme="darkTheme"
      :theme-overrides="themeOverrides"
      :locale="frFR"
      :date-locale="dateFrFR"
      inline-theme-disabled
    >
      <NGlobalStyle />
      <slot />
    </NConfigProvider>
  </div>
</template>
