import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
}, {
  rules: {
    'node/prefer-global/process': 'off',
    'no-console': 'off',
  },
})
