import { strict } from 'assert';
import { RE2 } from '../scripts/re2';
((): void => {
  console.log('test 1');
  const reReplace1 = new RE2('(?i)apples', 'g');
  const resultReplace1 = reReplace1.replace(
    'Apples are round, and apples are juicy.',
    'oranges'
  );
  strict.equal(resultReplace1, 'oranges are round, and oranges are juicy.');
  console.log(resultReplace1);

  console.log('test 2');
  const reReplace2 = new RE2('(?i)xmas');
  const resultReplace2 = reReplace2.replace(
    'Twas the night before Xmas...',
    'Christmas'
  );
  strict.equal(resultReplace2, 'Twas the night before Christmas...');
  console.log(resultReplace2);

  console.log('test 3');
  const reReplace3 = new RE2('(\\w+)\\s(\\w+)');
  const resultReplace3 = reReplace3.replace('John Smith', '\\2, \\1');
  strict.equal(resultReplace3, 'Smith, John');
  console.log(resultReplace3);

  console.log('test 4');
  const reReplace4 = new RE2('([^\\d]*)(\\d*)([^\\w]*)');
  const p1 = '\\1';
  const p2 = '\\2';
  const p3 = '\\3';
  const resultReplace4 = reReplace4.replace(
    'abc12345#$*%',
    [p1, p2, p3].join(' - ')
  );
  strict.equal(resultReplace4, 'abc - 12345 - #$*%');
  console.log(resultReplace4);

  console.log('test 5');
  const textReplace5 =
    'yabba& dabba &doo yabba& dabba &doo yabba& dabba &doo yabba& dabba &doo yabba& dabba &doo';
  const reReplace5 = new RE2('(\\w+?)&.+?&(\\w+)', 'g');
  const resultReplace5 = reReplace5.replace(textReplace5, '\\2 \\1');
  strict.equal(
    resultReplace5,
    'doo yabba doo yabba doo yabba doo yabba doo yabba'
  );
  console.log(resultReplace5);
})();
