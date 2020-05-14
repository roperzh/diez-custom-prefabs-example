import {Color} from '@diez/prefabs';
import {cmyk} from 'color-convert';

/**
 * This is an example of a custom prefab that extends another prefab, note that
 * it will use the binding associated to the class that is being extended (in
 * this case `Color`)
 */
export class CustomColor extends Color {
  static cmyk (c: number, m: number, y: number, k: number) {
    const [h, s, l] = cmyk.hsl([c, m, y, k]);
    return CustomColor.hsla(h / 100, s / 100, l / 100, 1);
  }
}
