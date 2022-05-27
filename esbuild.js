require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/esbuild.js',
  watch: true,
  treeShaking: true,
  minify: true,
}).catch(() => process.exit(1))
