import {prefab} from '@diez/engine';
import {cmyk} from 'color-convert';

export interface CustomColorFromScratchData {
  h: number;
  s: number;
  l: number;
  a: number;
}

/**
 * This is an example of a custom prefab made from scratch + a binding, check
 * the root `.diezrc` to see how the binding is linked.
 */
export class CustomColorFromScratch extends prefab<CustomColorFromScratchData>() {
  defaults = {
    h: 0,
    s: 0,
    l: 0,
    a: 1,
  };

  static cmyk (c: number, m: number, y: number, k: number) {
    const [h, s, l] = cmyk.hsl([c, m, y, k]);
    return new CustomColorFromScratch({h: h /100, s: s/100, l: l/100, a: 1});
  }
}
