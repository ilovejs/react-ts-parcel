// https://stackoverflow.com/questions/62715379/how-to-declare-types-of-props-of-svg-component-react-typescript-and-webpack
declare module '*.svg' {
  // import React = require('react');
  // export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>
  // const src: string
  // export default src
  import { ReactElement, SVGProps } from 'react'
  const content: (props: SVGProps<SVGElement>) => ReactElement
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

declare module '*.json' {
  const content: string
  export default content
}
