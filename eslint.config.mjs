import js from '@eslint/js'
import parser from '@typescript-eslint/parser'
import plugin from '@typescript-eslint/eslint-plugin'
import pluginPrettier from 'eslint-plugin-prettier'

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'], // ✅ Inclui arquivos .ts
    languageOptions: {
      parser: parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      env: {
        node: true, // ✅ Habilita o ambiente Node.js
      },
    },
    plugins: {
      '@typescript-eslint': plugin,
      prettier: pluginPrettier,
    },
    rules: {
      // 🟥 Regras de estilo
      semi: ['error', 'never'], // ❌ sem ponto e vírgula
      quotes: ['error', 'single'], // ❌ aspas duplas, ✅ aspas simples

      // 🟡 Tratamento de variáveis não utilizadas
      'no-unused-vars': 'off', // Desativa a padrão do ESLint
      '@typescript-eslint/no-unused-vars': ['warn'], // Usa a versão do TS

      // Outras sugestões (opcional):
      'no-console': 'off', // warn - alerta para console.log
      eqeqeq: ['error', 'always'], // obriga uso de ===
    },
  },
]
