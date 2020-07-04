import { resolve } from 'path';
import { execRegex, replaceString, testRegex } from './reFunctions';
import { errorHandler, freeUpMemory, getPointers, validate } from './utils';

const modulePath = resolve(process.cwd() + '/bin/re2Lib'); // delete after tests rewrite
const re2Module = require(modulePath) as RegExp2;
export class RE2 {
  private regex: string;
  private flag?: string;

  constructor(regex: string, flag?: string) {
    errorHandler(regex, 'Regular expression can not be');

    validate(re2Module, regex);
    this.regex = regex;
    this.flag = flag;
  }

  /** @function numberOfCaptureGroups : Returns number of capture groups. */
  numberOfCaptureGroups = (): number => {
    const [regexPointer] = getPointers(re2Module, this.regex);
    const number = re2Module._getQtyOfCapturingGroups(regexPointer);
    freeUpMemory(re2Module, regexPointer);
    return number;
  };

  /** @function test : Executes a search for a match between a regular expression and a specified string.
   * Returns true or false.
   * @param string Can be only a string
   */
  test = (string: string): boolean => testRegex(re2Module, string, this.regex);

  /** @function exec : Returns all matches of the regular expression against a string.
   * @param string Can be only a string
   */
  exec = (string: string): string[][] | null =>
    execRegex(re2Module, string, this.regex, this.flag);

  /** @function replace Return new string with some or all matches of a pattern replaced by a replacement.
   * @param string Can be only a string
   * @param string Can be only a string
   */
  replace = (string: string, rewrite: string): string =>
    replaceString({
      re2: re2Module,
      string,
      regex: this.regex,
      rewrite,
      flag: this.flag || '',
    });
}
