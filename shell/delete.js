const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');


inquirer.prompt([{ 
  type: 'input', 
  name: 'id', 
  message: '需要删除的文章id是?', 
  default: '' 
}]).then(answers => {
  try {
    const { id } = answers;
    fs.rmdirSync(path.join(__dirname, `../source/_posts/${id}`))
    fs.unlinkSync(path.join(__dirname, `../source/_posts/${id}.md`))
  } catch (err) {
    throw err;
  }
});
