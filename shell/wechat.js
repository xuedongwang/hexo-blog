const axios = require('axios');
const argv = require('minimist')(process.argv.slice(2));

const content = `网站于部署成功。`
const SCKEY = argv['sckey'];

axios.get(`https://sc.ftqq.com/${SCKEY}.send?text=${encodeURIComponent(content)}`)
  .then(res => {
    console.log('success');
  })
  .catch(err => {
    throw err;
  })