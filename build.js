require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outfile: 'dist/esbuild.js',
}).catch(() => process.exit(1))
