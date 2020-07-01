/**
 * @name bookmark
 * @description generator bookmark form the directory
 */

const path = require("path");
const fs = require("fs");
const glob = require("glob");
const chalk = require("chalk");
const { version, name } = require("../package.json");

const createTemplate = require("./temp");

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
  disableAnimate,
} = {}) => {
  if (path.extname(output) !== ".html") {
    throw new Error(`[${output}] output format should be [/path/to/*.html]`);
  }
  const currentEntry = path.resolve(process.cwd(), entry);
  const relativeEntry = path.relative(process.cwd(), currentEntry);
  const currentOutput = path.resolve(process.cwd(), output);
  const filename = path.basename(currentOutput);

  console.log(chalk.green(name, version));
  console.table({
    Entry: currentEntry,
    RelativeEntry: relativeEntry,
    Output: currentOutput,
    PublicPath: publicPath,
    Ignore: ignore,
  });
  console.log("   ");

  try {
    const source = glob.sync(`${relativeEntry}/**/*.html`, {
      ignore,
    });

    if (!source.length) {
      console.log(chalk.gray("Not found html files, exit..."));
      process.exit(0);
    }

    consoleSource(source);
    const transformedSource = addSourcePublicPath(source, publicPath);
    const bookmarks = transformedSource.reduce((str, currentPath, i) => {
      const pathInfo = path.parse(currentPath);
      console.log("pathInfo: ", chalk.green(JSON.stringify(pathInfo)));
      const { root = "/", base, name, dir } = path.parse(currentPath);
      const href = path.join(root, dir, base);
      const filename = dir !== entry && name === "index" ? href : base;
      const animationDelay = `animation-delay: ${i * 0.025}s`;

      str += `
        <a href="${href}" target="_blank" title="${currentPath}" style="${animationDelay}">
          <div class="item">${i + 1}. ${filename}</div>
        </a>
      `;
      return str;
    }, "");

    const html = createTemplate({
      bookmarks,
      name: filename,
      total: transformedSource.length,
      disableAnimate,
    });

    console.log(chalk.blue(`↓ output ${currentOutput} `));

    fs.writeFileSync(currentOutput, html);

    console.log(chalk.green(`√ generator success! `));
  } catch (error) {
    console.log(chalk.red("error: ", error.message));
    process.exit(0);
  }
};

module.exports = {
  createBookmark,
};
