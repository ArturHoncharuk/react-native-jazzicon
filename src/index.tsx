import { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg, Rect } from 'react-native-svg';
import MersenneTwister from 'mersenne-twister';
import Color from 'color';
import type { TJazziconProps, TJazziconState } from './types';
import { COLORS, wobble, shapeCount } from './constants';

export class Jazzicon extends Component<TJazziconProps, TJazziconState> {
  private static propsToState({
    seed,
    address,
  }: TJazziconProps): TJazziconState {
    if (address) {
      address = address.toLowerCase();

      if (address.startsWith('0x')) {
        seed = parseInt(address.slice(2, 10), 16);
      }
    }

    const generator = new MersenneTwister(seed);
    const amount = generator.random() * 30 - wobble / 2;
    return {
      generator,
      colors: COLORS.map((hex) => new Color(hex).rotate(amount).hex()),
    };
  }

  public state: TJazziconState = Jazzicon.propsToState(this.props);

  public static getDerivedStateFromProps(
    props: TJazziconProps,
    _state: TJazziconState
  ): Partial<TJazziconState> | null {
    return Jazzicon.propsToState(props);
  }

  public render() {
    const { containerStyle, size = 16 } = this.props;

    return (
      <View
        style={[
          styles.container,
          {
            width: size,
            height: size,
            backgroundColor: this.randomColor,
            borderRadius: size / 2,
          },
          containerStyle,
        ]}
      >
        <Svg width={size} height={size}>
          {Array(shapeCount)
            .fill(0)
            .map((_, index) => {
              const center = size / 2;

              const firstRot = this.randomNumber;
              const angle = Math.PI * 2 * firstRot;
              const velocity =
                (size / shapeCount) * this.randomNumber +
                (index * size) / shapeCount;

              const tx = Math.cos(angle) * velocity;
              const ty = Math.sin(angle) * velocity;

              const secondRot = this.randomNumber;
              const rot = firstRot * 360 + secondRot * 180;

              return (
                <Rect
                  key={`shape_${index}`}
                  x={0}
                  y={0}
                  width={size}
                  height={size}
                  fill={this.randomColor}
                  transform={`translate(${tx} ${ty}) rotate(${rot.toFixed(
                    1
                  )} ${center} ${center})`}
                />
              );
            })}
        </Svg>
      </View>
    );
  }

  private get randomNumber(): number {
    const { generator } = this.state;
    return generator.random();
  }

  private get randomColor(): string {
    const { colors } = this.state;

    this.randomNumber;

    return (
      colors.splice(Math.floor(colors.length * this.randomNumber), 1)[0] ??
      '#000000'
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
