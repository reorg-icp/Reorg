// src/types/splidejs__react-splide.d.ts

declare module "@splidejs/react-splide" {
  import { ComponentType } from "react";

  interface SplideProps {
    options?: any;
    [key: string]: any;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideProps>;
}
