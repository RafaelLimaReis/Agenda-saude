# Aplicativo Agenda Saúde 

- Dependências
    - Start [API](https://github.com/RafaelLimaReis/api_agenda_medica)
    - [Ionic](https://ionicframework.com) - Versão 3.x (Desenvolvido e testado)
    - [Node e npm](https://nodejs.org/en) - Versão 6.x (Desenvolvido e testado)
- Start
    - Duplique o arquivo `webConnfigExample.ts` localizado na pasta `src` e renomeie para `webConfig.ts`
        - Altere a url para localhost ou para o ip da rede em que a api está conectada
    - no terminal ou bash rode o comando `ionic serve --lab`
---
### Gerar aplicativo para android
- Dependências
  - [JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  - [ANDROID STUDIO](https://developer.android.com/studio/index.html) ou ANDROID TOOLS
  - Versões android do 4.0 até 8.0
- Comando para gerar apk
  1. `ionic cordova add platform android`
  2. `ionic cordova build android` ou `cordova build android` (para gerar apk no projeto)
  3. `ionic corduva run android --device` (para gerar apk no celular, **OPÇÃO DESENVOLVEDOR** e **DEPURADOR DE USB** devem estar ativos)
---
Toda a documentação do projeto está na pasta `doc`.

>Este projeto está em fase final de desenvolvimento então qualquer problema encontrado abra uma [issue](https://github.com/RafaelLimaReis/Agenda-saude/issues) que iremos analisar e solucionar o problema.
