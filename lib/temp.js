const htmlTemp = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{name}</title>
    <style>
       body {
        margin: 0;
        padding: 0;
        background: #fafafa;
        --primary-color: #31c27c;
        --column: 4;
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
      }
      .title b {
        color: var(--primary-color);
      }
      .list {
        display: grid;
        grid-template-columns: repeat(var(--column), 1fr);
        grid-auto-rows: max-content;
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
        transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
      }

      .item:hover {
        border-color: var(--primary-color);
      }
      .item:hover > a {
        color: var(--primary-color);
      }

      a {
        text-decoration: none;
        color: #444;
        transition: color 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
      }
      a:hover,
      a:active,
      a:visited {
        color: var(--primary-color);
      }
    </style>
  </head>
  <body>
    <h2 class="title">共 <b>{total}</b> 条书签</h2>
    <div class="item">
      {bookmarks}
    </div>
  </body>
  </html>
`;

module.exports = htmlTemp;
