const process = require('child_process')

process.exec('vue-cli-service build', (error, stdout, stderr) => {
  console.log(error, stdout, stderr)

  process.exec('scp -r ./dist/* root@47.94.168.30:/data/ddftp/pub', (error, stdout, stderr) => {
    console.log(error, stdout, stderr)
  })
})
