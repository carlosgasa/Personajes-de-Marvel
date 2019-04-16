# Personajes de Marvel
## Código de aplicación hecha para ganar una entrada a [TalentLand][df1] con [Softek][df7] consumiendo el [API de Marvel][df8]

### En esta app tú puedes:
* Listar 20 personajes de Marvel por letra.
* Ver los detalles de cada personaje mostrado, incluyendo: su imagen, su descripción (si es que la tiene), la lista de comics y la lista de series en la que aparece.

<img src="img/caps.jpg">

## Puedes descargar el apk [aquí][df2], ver el [demo web][df6] o   puedes correr el proyecto así:

**Se requiere tener instalado [NodeJS][df3], [Android SDK][df4] y [Ionic][df5]**

```sh
git clone https://github.com/carlosgasa/Personajes-de-Marvel.git
git checkout master
cd Personajes-de-Marvel
npm install
```
Instalar dependencias:
```sh
ionic cordova plugin add cordova-plugin-statusbar
npm install @ionic-native/status-bar

npm i ts-md5
```

Para ver en el explorador:
```sh
ionic serve
```
Para correr en el teléfono (con usb debug):
```sh
ionic cordova run android
```

Para mostrar más de 20 personajes (máximo 100):
Modifica el número en **src\pages\home\home.ts**:
```ts
 this.marvel.getCharacters(20,letter)
```
Para poner tus propias credenciales, usa el archivo **src\providers\global-variables\global-variables.example.ts** eliminando '.example' del nombre.



[df1]: <https://www.talent-land.mx/>
[df2]: <https://github.com/carlosgasa/Personajes-de-Marvel/raw/gh-pages/marvel_app_prod_1.0.0.apk>
[df3]:<https://nodejs.org/es/>
[df4]:<https://developer.android.com/studio>
[df5]:<https://ionicframework.com/>
[df6]:<https://carlosgasa.github.io/Personajes-de-Marvel/>
[df7]:<https://www.facebook.com/softtek/>
[df8]:<https://developer.marvel.com>
