/**
 * @name bookmark
 * @description generator bookmark form the directory
 */

const path = require("path");
const fs = require("fs");
const glob = require("glob");
const chalk = require("chalk");
const { version, name } = require("../package.json");

const htmlTemp = require("./temp");

const consoleSource = (source = []) => {
  source.forEach((path) => {
    console.log(chalk.gray("generator path :", path));
  });
};

const addSourcePublicPath = (source = [], publicPath) => {
  return source.map((p) => {
    return path.join(publicPath, p);
  });
};

const createBookmark = ({
  entry,
  output,
  publicPath = "",
  ignore = "**/node_modules/**",
} = {}) => {
  if (path.extname(output) !== ".html") {
    throw new Error(`[${output}] output format should be [/path/to/*.html]`);
  }
  const currentEntry = path.resolve(process.cwd(), entry);
  const currentOutput = path.resolve(process.cwd(), output);
  const filename = path.basename(currentOutput);

  console.log(chalk.green(name, version));
  console.table({
    Entry: currentEntry,
    Output: currentOutput,
    PublicPath: publicPath,
    Ignore: ignore,
  });
  console.log("   ");

  const source = glob.sync("**/*.html", {
    root: currentEntry,
    ignore,
  });

  if (!source.length) {
    console.log(chalk.gray("Not found html files, exit..."));
    process.exit(0);
  }

  consoleSource(source);
  const transformedSource = addSourcePublicPath(source, publicPath);

  const bookmarks = transformedSource.reduce((str, value, i) => {
    str += `
     <div class="item">
      <a href="${value}" target="_blank">${i + 1}. ${path.basename(value)}</a>
     </div>
    `;
    return str;
  }, "");

  const html = htmlTemp
    .replace("{bookmarks}", bookmarks)
    .replace("{name}", filename)
    .replace("{total}", transformedSource.length);

  console.log(chalk.blue(`↓ output ${currentOutput} `));

  fs.writeFileSync(currentOutput, html);

  console.log(chalk.green(`√ generator success! `));
};

module.exports = {
  createBookmark,
};
