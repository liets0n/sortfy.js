import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.ts',
  format: 'esm',
  exports: true,
  dts: {
    sourcemap: true
  }
})
