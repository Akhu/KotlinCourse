(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
    }
    root.output = factory(typeof output === 'undefined' ? {} : output, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var L1 = Kotlin.Long.ONE;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  function main() {
    var tmp$;
    factorial(4);
    println('Test 1');
    println('Test 2');
    document.bgColor = 'FFAA12';
    (tmp$ = document.getElementById('test')) != null ? (tmp$.innerHTML = 'COUCOU') : null;
  }
  function factorial(n) {
    return n === 0 ? L1 : Kotlin.Long.fromInt(n).multiply(factorial(n - 1 | 0));
  }
  var forOdd = defineInlineFunction('output.forOdd_364jb5$', function ($receiver, f) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element % 2 === 1)
        f(element);
    }
  });
  _.main = main;
  _.factorial_za3lpa$ = factorial;
  $$importsForInline$$.output = _;
  _.forOdd_364jb5$ = forOdd;
  main();
  Kotlin.defineModule('output', _);
  return _;
}));

//# sourceMappingURL=output.js.map
