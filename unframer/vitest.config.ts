import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        exclude: [
            '**/node_modules/**',
            '**/dist/**',
            '**/esm/**',
            '**/plugin-mcp-dist/**',
        ],
    },
})
