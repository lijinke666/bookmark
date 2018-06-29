const htmlTemp = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{name}</title>
  <style>
  a{
    text-decoration: none;
    color:#444;
    transition: color .3s;
  }
  a:hover,a:active,a:visited{
    color:#396;
  }
  </style>
</head>
<body>
{path}
</body>
</html>
`;

module.exports = htmlTemp;
