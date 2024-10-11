/* declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export const style: string; // Именованный экспорт для класса .style
  export default styles;
}*/

declare module '*.svg' {
  export const ReactComponent: string;
  export default ReactComponent;
}
