/// <reference types="react-scripts" />

declare module '*.png';
declare module '*.svg' {
  export const ReactComponent: SvgrComponent;
}
