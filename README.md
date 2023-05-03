# color-hex-generator
Generates the hex for specified color

## Table of Contents
- [Installation](#installation)
- [Initialization](#initialization)
- [Usage](#usage)
- [Planned Features](#planned-features)
- [License](#license)
- [Author](#author)

## Installation

npm i @j-dotjs/color-hex-generator

## Initialization
```node.js
const colorHexGenerator = require('@j-dotjs/color-hex-generator');
```

## Usage
```node.js
colorHexGenerator.getHexStr('red'); // #ff0000
colorHexGenerator.getHexStr('blue'); // #0000ff
colorHexGenerator.getHexStr('green'); // #00ff00

etc...
```

## Planned Features
- [ ] Generate rgb from string
- [ ] Generate hex from rgb
- [ ] Generate rgb from hex

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Author
[J-dotJS](https://github.com/J-dotjs)

## Disclaimer
Some colors may not be supported. You can suggest colors to be added by creating an [issue](https://github.com/J-dotjs/color-hex-generator/issues) or forking the repository and creating a [pull request](https://github.com/J-dotjs/color-hex-generator/pulls).
This package is still in development and may not work as intended. Please report any bugs or issues to the [issues](https://github.com/J-dotjs/color-hex-generator/issues) page.