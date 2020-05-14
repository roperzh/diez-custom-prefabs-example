import {CustomColor} from './prefabs/CustomColor';
import {Margin} from './prefabs/Margin';
import {CustomColorFromScratch} from './prefabs/CustomColorFromScratch';

/**
 * Note how this component is exported from `index.ts`. Diez compiles these
 * exported components for your apps' codebases.
 *
 * Check out https://diez.org/getting-started to learn more.
 */
export const designLanguage = {
  purple: CustomColor.cmyk(100, 0, 0, 0),
  margin: Margin.simple(10),
  red: CustomColorFromScratch.cmyk(0, 100, 100, 0),
}
