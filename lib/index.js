/**
 * @name bookmark
 * @description generator bookmark form the directory
 */

const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { version, name } = require("../package.json");

const htmlTemp = require("./temp");

const getDirPath = (dir, publicPath = "..") => {
  if (!fs.existsSync(dir)) throw new Error(`${dir}: not found`);

  console.log(chalk.gray(`Start read ${dir}...`));

  const _dir = fs.readdirSync(dir); //当前目录列表
  const filenames = [];

  for (let filename of _dir) {
    const currentPath = path.join(dir, filename);
    const isDirectory = fs.lstatSync(currentPath).isDirectory();
    if (
      (!isDirectory && path.extname(filename) !== ".html") ||
      filename.startsWith(".")
    ) {
      continue;
    }

    const newPath = currentPath.replace(dir, publicPath);
    if (isDirectory) {
      filenames.push(...getDirPath(currentPath, publicPath));
    } else {
      filenames.push(newPath);
    }
  }
  return filenames;
};

const createBookmark = ({ entry, output, publicPath = "" } = {}) => {
  if (path.extname(output) !== ".html") {
    throw new Error(`[${output}] output format should be [/path/to/*.html]`);
  }
  ``;
  const _output = output || path.join(entry, "index.html");
  const filename = path.basename(_output);

  console.log(chalk.green("Thanks use for ", name, version, ": )"));
  console.log(
    chalk.gray("entry:", name, "output:", _output, "publicPath:", publicPath)
  );
  console.log("   ");

  const source = getDirPath(entry, publicPath);

  console.log(chalk.gray("start read path : \n", source.map(v => `${v}\n`)));

  const temp = source.reduce((str, value, i) => {
    str += `
     <p>
      <a href="${value}" target="_blank">${i + 1}. ${path.basename(value)}</a>
     </p>
    `;
    return str;
  }, "");

  const html = htmlTemp.replace("{path}", temp).replace("{name}", filename);

  console.log(chalk.gray(`↓ output ${_output} `));

  fs.writeFileSync(_output, html);

  console.log(chalk.green(`√ generator ${filename} success! `));
};

module.exports = {
  createBookmark
};
