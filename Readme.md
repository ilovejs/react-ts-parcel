Minimal React Typescript Template + Parcel

## How to use

click the green button 'Use this template'

## Steps to reproduce this template

```sh
mkdir react-ts-parcel
cd react-ts-parcel
yarn init
mkdir src
yarn add -D parcel

yarn start

yarn add -D typescript @types/react @types/react-dom
yarn add react react-dom

yarn tsc --init
 - add "jsx": "react" to tsconfig.json

yarn add -D eslint
yarn eslint --init

- if u pick airbnb, u can switch to standard by remove airbnb package, then

  yarn add -D eslint-config-standard

yarn add -D @typescript-eslint/eslint-plugin eslint-plugin-react-hooks

yarn add -D rimraf
```

## Doc

[parcel v1](https://parceljs.org/getting_started.html)

[parcel v2](https://v2.parceljs.org/languages/css/)

## Refs

[building-app-with-react-typescript-and-parcel](https://pagepro.co/blog/building-app-with-react-typescript-and-parcel/)

sass,eslint
[parcel-typescript-react](https://adrianhall.github.io/javascript/react/2020/03/29/parcel-typescript-react/)
[repo](https://github.com/adrianhall/parcel-typescript-template)

[digitalOcean,babel,sass](https://www.digitalocean.com/community/tutorials/how-to-set-up-a-react-project-with-parcel)

[webpack5](https://www.carlrippon.com/creating-react-app-with-typescript-eslint-with-webpack5/)

[setting-eslint-on-a-react-typescript](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)

[declearation-svg-img-assets](https://duncanleung.com/typescript-module-declearation-svg-img-assets/)

