# Rispar-teste para Front end 

 Para acessar o proxy pass Allow CORS: Access-Control-Allow-Origin

## Pré Requisitos

Para Desabilitar o cors com Google CHORME utilizei essa extensão , já no Firefox não houve a necessidade.

![Screenshot](src/assets/allowCors.gif) 

Através do arquivo vue.config.js o proxy redireciona as consultas para serem realizadas da mesma origem .
```
module.exports = {
  devServer: {
    proxy: {
      "/proxy_api": {
        target: "url_para_consulta",
        pathRewrite: {
          "^/proxy_api": "/"
        }
      }
    }
  }
};

```

## Instalando Depêndencias do projeto
```
npm install
```

### Iniciar aplicação
```
npm run serve
```

### Compilar e minificar para modo de produção
```
npm run build
```



### Lints e fixes 
```
npm run lint
```


