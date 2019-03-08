## Projeto "Votação Online" - Desafio Sicredi
Confira as versões das dependências utilizadas no *package.json*. Em alguns casos, é preferível mantê-las desatualizadas, como no caso do 'react-native' e 'firebase', por questões de compatibilidade. 

Já vá abrindo o Android Studio...

E enquanto ele inicia, importe o repositório da seguinte forma, havendo o git instalado:

```
git clone http://joao.lerina@www.tools.ages.pucrs.br/VotacaoOnLine/rn-votacaoonline.git
```
Atente ao nome de aluno. A URL pode ser copiada abaixo do nome do projeto.
A seguir, entre na pasta do projeto importado, com:

```
cd rn-votacaoonline
```
Dentro do diretório, execute a instalação dos pacotes através do [Yarn](https://yarnpkg.com/pt-BR/):
```
yarn install
```
Perceba que foi criada uma pasta *node_modules*. Alí, estão as centenas de dependências necessárias para executar uma aplicação React Native. Algumas delas foram declaradas no *package.json*.

Com o Android Studio iniciado, escolha abrir como projeto o diretório *rn-votacaoonline/android*, aqui do projeto mesmo. Isso não é essencial, mas pelo menos evita que se crie um projeto sem nada dentro.

Isso porque o que queremos é apenas executar um Android Virtual Device. Para isso, **abra o menu AVD Manager**, localizado no canto direito superior do Android Studio. Crie um Android Virtual Device, se não houver um. Prefira utilizar AVDs de **API 27 ou superior**.

Com o simulador Android iniciado, volte ao terminal e execute:

```
react-native run-android
```
O build será iniciado em um terminal aparte, e eventualmente a aplicação será instalada e aberta no AVD. Se houver um problema de build, tente resolver executando os comandos a seguir.
```
cd android
./gradlew clean
cd ..
react-native run-android
```

E se nada disso resolver, peça ajuda aos colegas. 🤠

Bom estudo!