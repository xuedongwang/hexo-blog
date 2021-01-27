const { execSync } = require('child_process');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const inquirer = require('inquirer');


inquirer.prompt([{ 
  type: 'list', 
  name: 'type',
  choices: ['post', 'draft', 'page'],
  message: '请选择创建的类型:', 
  default: 'post' 
}, { 
  type: 'input', 
  name: 'name',
  message: '请输入页面的名称:',
  when (answers) {
    return answers.type === 'page'
  },
  default: 'post' 
}]).then(answers => {
  try {
    const name = answers.type === 'page' ? answers.name : uuidv4()
    execSync(`hexo new ${answers.type} ${name}`)
    if (answers.type !== 'page') {
      console.log(`创建了新${answers.type === 'post' ? '文章': '文草稿件'}：source/_${answers.type}s/${name}.md`);
    } else {
      console.log(`创建了新页面：source/${name}/index.md`);
    }
  } catch (err) {
    throw err;
  }
});