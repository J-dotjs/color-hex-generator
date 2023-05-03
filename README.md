# color-code-converter
Converts to the specified color code between different color codes

## Table of Contents
- [Installation](#installation)
- [Initialization](#initialization)
- [Usage](#usage)
- [Planned Features](#planned-features)
- [License](#license)
- [Author](#author)

## Installation

npm i @j-dotjs/color-code-converter

## Initialization
```node.js
const colorConverter = require('@j-dotjs/color-code-converter');
```

## Usage
#### Get Hex Code from Color Name
```node.js
colorConverter.getHexStr('red'); // #ff0000
colorConverter.getHexStr('blue'); // #0000ff
colorConverter.getHexStr('green'); // #00ff00

etc...
```
#### Get Hex Code from RGB
```node.js
colorConverter.getHexRGB(255, 0, 0); // #ff0000
colorConverter.getHexRGB(0, 0, 255); // #0000ff
colorConverter.getHexRGB(0, 255, 0); // #00ff00

etc...
```

## Planned Features
- [ ] Generate rgb from string
- [x] Generate hex from rgb
- [ ] Generate rgb from hex

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
[J-dotJS](https://github.com/J-dotjs)

## Disclaimer
Some colors may not be supported. You can suggest colors to be added by creating an [issue](https://github.com/J-dotjs/color-hex-generator/issues) or forking the repository and creating a [pull request](https://github.com/J-dotjs/color-hex-generator/pulls).
This package is still in development and may not work as intended. Please report any bugs or issues to the [issues](https://github.com/J-dotjs/color-hex-generator/issues) page.