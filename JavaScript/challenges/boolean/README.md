# Boolean Logic Challenge

Background
As a career developer you will have to read other peoples' code, A LOT of it, and learning how to read boolean expressions is a core part of understanding how a codebase works.

MVP
Without running the code, figure out the output for each expression, including whether the output is truthy / falsey.

Be prepared to tell us your reasoning!

```
2 == '2'; // True
2 === 2; // True
2 === '2'; // False
'2' + 3 == 23; // True
'2' + 3 === 5; // False
10 % 3; // = 1
10 % 3 === 1; // True
(100 % 7) % 5; // 2
(100 % 7) % 5 !== 0; // True
(100 % 7) % 9 == 2; // True
!(10 % 2); // = 0 -> Falsey -> True
!!!!((10 % 7) % 3); // = 0 -> Falsey -> x4! -> False
10 % 3 === -1 % 2; // = 1 === 1 -> True
(892783 != '89278' + 3) == 0; // = True == Falsey -> False
true && false;
false || true;
true || false;
true || false;
true || false + true;
true * false && false + true;
10 && 123 && -1 && 3;
10 && 123 && 0 && 3;
(10 && (123 || '') && parseInt('Roisin')) || 23 / 23 - 1;
3 && 'Calum' && ('' || 26);
3 && 'Remi' && (null || 86 * 0 || ('' + 1 && 'Cat' + 'Dog'));
```
