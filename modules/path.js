const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// O nome do diretorio atual
console.log(path.dirname(__filename));

// pegar a extensao do arquivo
console.log(path.extname(__filename));

// Criar objeto path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));