declare module 'mersenne-twister' {
  const MersenneTwister: {
    new (seed?: number): MersenneTwister.IMersenneTwister;
  };

  namespace MersenneTwister {
    export interface IMersenneTwister {
      random(): number;
      random_int(): number;
      random_incl(): number;
      random_excl(): number;
      random_long(): number;
      random_int31(): number;
    }
  }

  export = MersenneTwister;
}

declare module 'color' {
  interface Color {
    rotate(amount: number): Color;
    hex(): string;
  }
  interface ColorConstructor {
    new (color: string): Color;
  }
  const Color: ColorConstructor;
  export default Color;
}
