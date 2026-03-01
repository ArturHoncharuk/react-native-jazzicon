import type { StyleProp, ViewStyle } from 'react-native';
import type * as MersenneTwister from 'mersenne-twister';

export type TJazziconProps = {
  size?: number;
  address?: string;
  seed?: number;
  containerStyle?: StyleProp<ViewStyle>;
};

export type TJazziconState = {
  generator: MersenneTwister.IMersenneTwister;
  colors: string[];
};
