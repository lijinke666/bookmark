const buildTemplate = ({ bookmarks, name, total, disableAnimate } = {}) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${name}</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background: #fafafa;
        --primary-color: #31c27c;
        --columnWidth: 300px;
        --animate-type: .55s cubic-bezier(0.165, 0.84, 0.44, 1);
        overflow-x: hidden;
      }
      @media screen and (max-width: 767px) {
        body {
          --column: 1;
        }
      }
      .title {
        padding: 20px;
        color: #444;
        font-weight: 400;
        text-align: right;
        ${
          !disableAnimate
            ? "animation: slideIn var(--animate-type) forwards"
            : ""
        };
      }
      .title b {
        color: var(--primary-color);
      }
      .list {
        display: grid;
        grid-template-columns: repeat(
          auto-fit,
          minmax(var(--columnWidth), 1fr)
        );
        gap: 20px 20px;
        padding: 20px;
      }
      .item {
        position: relative;
        display: flex;
        align-items: center;
        padding: 15px 25px;
        background: #fff;
        min-height: 40px;
        color: #111;
        box-shadow: 0 17px 37px -12px rgba(104, 104, 104, 0.24);
        border-radius: 10px;
        border: 2px solid transparent;
        cursor: pointer;
        transition: all var(--animate-type);
        width: 100%;
      }

      a {
        text-decoration: none;
        color: #444;
        display: flex;
        transition: all var(--animate-type);
        ${
          !disableAnimate
            ? `
        animation: fadeIn var(--animate-type) forwards;
        opacity: 0;
          `
            : ""
        };
      }
      a:hover .item,
      a:active .item,
      a:visited .item {
        color: var(--primary-color);
      }

      a:hover .item {
        background-color: var(--primary-color);
        box-shadow: 0 15px 30px -12px var(--primary-color);
        color: #fff;
      }
      ${
        !disableAnimate
          ? `@keyframes fadeIn {
              from {
                opacity: 0;
                transform: translate3d(0, 100px,0);
              }
              to {
                opacity: 1;
                transform: translate3d(0, 0,0);
              }
            }

            @keyframes slideIn {
              from {
                opacity: 0;
                transform: translate3d(100px, 0,0);
              }
              to {
                opacity: 1;
                transform: translate3d(0, 0,0);
              }
            }`
          : ""
      }
    </style>
  </head>
  <body>
    <h2 class="title">共 <b>${total}</b> 条书签</h2>
    <div class="list">
      ${bookmarks}
    </div>
  </body>
  </html>
`;

module.exports = buildTemplate;
