module.exports = {
  'extends': '@istanbuljs/nyc-config-typescript',
  'include': [
    'src/models',
    'src/services',
    'src/controllers'
  ],
  'exclude': [
    '**/*.spec.js',
    '**/*.spec.ts',
    '**/*.test.js',
    '**/*.test.ts',
  ],
  'reporter': [
    'text',
    'text-summary',
    'json-summary',
    'html',
    'lcov'
  ]
}

// REF: https://www.npmjs.com/package/nyc#typescript-projects
// REF: Arquivo de configuração do nyc do Projeto Cra Shop da Trybe
