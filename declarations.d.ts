/* declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export const style: string; // Именованный экспорт для класса .style
  export default styles;
}*/

declare module '*.svg' {
  const ReactComponent: string;

  export default ReactComponent;
}

declare module '*.po' {
  const poModule: { [key: string]: string };

  export default poModule;
}
