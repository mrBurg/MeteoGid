declare module '*.module.scss' {
  const styles: { [className: string]: string };
  export const style: string; // Именованный экспорт для класса .style
  export default styles;
}
