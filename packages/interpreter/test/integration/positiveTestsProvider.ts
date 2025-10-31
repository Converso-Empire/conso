export const NoOutputPositiveTests = [
  // init statement tests
  {
    name: "interpreter empty init statement test, should success",
    input: `
      start conso
      end conso
    `,
  },
  {
    name: "interpreter empty init statement test with random charaters initially, should success",
    input: `
      some random characters
      random random random
      start conso
      end conso
    `,
  },
  // empty statement tests
  {
    name: "interpreter empty statement test, should success",
    input: `
      start conso
      ;
      end conso
    `,
  },
  {
    name: "interpreter multiple empty statements test, should success",
    input: `
      start conso
      ;
      ;
      ;;
      end conso
    `,
  },
  // block statement tests
  {
    name: "interpreter block statement test with empty block, should success",
    input: `
      start conso
      {};
      end conso
    `,
  },
  {
    name: "interpreter block statement test with variable statement inside, should success",
    input: `
      start conso
      {
        conso a = 4;
      }
      end conso
    `,
  },
  // variable statement test
  {
    name: "interpreter variable statement test with basic variable declaration, should success",
    input: `
      start conso
      conso a, b, c;
      end conso
    `,
  },
  {
    name: "interpreter variable statement test with basic variable declaration and initialisation, should success",
    input: `
      start conso
      conso a = 10, b = "crap";
      end conso
    `,
  },
  {
    name: "interpreter variable statement test with multiple variable initialisation, should success",
    input: `
      start conso
      conso a = 10, b = 5;
      end conso
    `,
  },
  {
    name: "interpreter variable statement test with variable initialisation with some expression, should success",
    input: `
      start conso
      conso a = 7 + 90;
      end conso
    `,
  },
  // assignment expression tests
  {
    name: "simple assignment expression test with only one identifer, should success",
    input: `
      start conso
      conso a = true;
      a = 4;
      end conso
    `,
  },
  {
    name: "complex assignment expression test with only one identifer, should success",
    input: `
      start conso
      conso a = 2;
      a *= 4;
      end conso
    `,
  },
  // paranthesized expression tests
  {
    name: "paranthesized expression test with one parenthesis and simple expression, should success",
    input: `
      start conso
      conso a = 2;
      (a + 4);
      end conso
    `,
  },
  {
    name: "paranthesized expression test with one parenthesis and complex expression, should success",
    input: `
      start conso
      conso a = 2;
      (a + 4) * 10 + (5 - 4);
      end conso
    `,
  },
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
      start conso
      conso a = 2;
      (a * (4 + 8) + 10);
      end conso
    `,
  },
  // if statement test
  {
    name: "paranthesized expression test with multiple parenthesis, should success",
    input: `
    start conso
    conso x = 9;
    conso if (x != 9) {
      x = 5;
      print conso x;
    } conso else (x >= 9);
    end conso;
    `,
  },
];

export const WithOutputPositiveTests = [
  {
    name: "variable assignment test with multiple variables, should success",
    input: `
      start conso;
      conso a , b;
      a = b = 60;
      print conso a, b;
      end conso
    `,
    output: "60 60",
  },
  {
    name: `binaryExpression print test with null and "==", should success`,
    input: `
      start conso;
      conso a;
      conso if (a == null) {
        print conso a;
      }
      end conso
    `,
    output: "null",
  },
  {
    name: `binaryExpression print test with null without any operator, should success`,
    input: `
      start conso;
      conso a;
      conso if (a) {
        print conso a;
      } conso else {
        print conso "not null";
      }
      end conso
    `,
    output: "not null",
  },
  {
    name: `binaryExpression print test - comparing null with null "==", should success`,
    input: `
      start conso;
      conso if (null == null) {
        print conso "hai null";
      }
      end conso
    `,
    output: "hai null",
  },
  {
    name: `binaryExpression print test with comparing null with var "a", should success`,
    input: `
      start conso;
      conso a;
      conso if (null == a) {
        print conso "hai null";
      }
      end conso
    `,
    output: "hai null",
  },
  {
    name: `binaryExpression print test with comparing null with var "a" explicit initialization, should success`,
    input: `
      start conso;
      conso a = null;
      conso if (null == a) {
        print conso "hai null";
      }
      end conso
    `,
    output: "hai null",
  },
  {
    name: `binaryExpression print test with comparing null with string null, should success`,
    input: `
      start conso;
      conso a = null;
      conso if ("null" == a) {
        print conso "hai null";
      } conso else {
        print conso "not null";
      }
      end conso
    `,
    output: "not null",
  },
  {
    name: `binaryExpression print test with comparing null with string null, should success`,
    input: `
      start conso;
      conso a = "null";
      conso if (null == a) {
        print conso "hai null";
      } conso else {
        print conso "not null";
      }
      end conso
    `,
    output: "not null",
  },
  {
    name: `binaryExpression print test with comparing null with string null, should success`,
    input: `
      start conso;
      conso a = "null";
      conso if (null == a) {
        print conso "hai null";
      } conso else {
        print conso "not null";
      }
      end conso
    `,
    output: "not null",
  },
  {
    name: `binaryExpression print test with null var "a" & "b" - 0, should success`,
    input: `
      start conso;
      conso a;
      conso b;
      conso if (a == b) {
        print conso "hai null";
      } conso else {
        print conso "nahi null";
      }
      end conso
    `,
    output: "hai null",
  },
  {
    name: `binaryExpression print test with null var "a" & "b" - 1, should success`,
    input: `
      start conso;
      conso a;
      conso b = null;
      conso if (a == b) {
        print conso "hai null";
      } conso else {
        print conso "nahi null";
      }
      end conso
    `,
    output: "hai null",
  },
  {
    name: `binaryExpression print test with null var "a" & "b" -2, should success`,
    input: `
      start conso;
      conso a;
      conso b = "null";
      conso if (a == b) {
        print conso "hai null";
      } conso else {
        print conso "nahi null";
      }
      end conso
    `,
    output: "nahi null",
  },
  // Boolean test
  {
    name: `binaryExpression print test with boolean expression - true, should success`,
    input: `
      start conso;
      conso a = true;
      conso if (true == a) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - false, should success`,
    input: `
      start conso;
      conso a = false;
      conso if (false == a) {
        print conso "hai false";
      } conso else {
        print conso "nahi false";
      }
      end conso
    `,
    output: "hai false",
  },
  {
    name: `binaryExpression print test with boolean expression - true with string true, should success`,
    input: `
      start conso;
      conso a = "true";
      conso if (true == a) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression, should success`,
    input: `
      start conso;
      conso a = 7;
      conso if (true == (a > 5)) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression & string "true", should success`,
    input: `
      start conso;
      conso a = 7;
      conso if ("true" == (a > 5)) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression & two expressions, should success`,
    input: `
      start conso;
      conso a = true;
      conso if ("true" == (a == true)) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression -3, should success`,
    input: `
      start conso;
      conso a = true;
      conso if ((a == true) == (a == true)) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "hai true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 4, should success`,
    input: `
      start conso;
      conso a;
      conso if ((a == null) == (a == true)) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 5, should success`,
    input: `
      start conso;
      conso a;
      conso if ((a == null) == (a == true)) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - true expression - 5, should success`,
    input: `
      start conso;
      conso a;
      conso b = false;
      conso if (a == b) {
        print conso "hai true";
      } conso else {
        print conso "nahi true";
      }
      end conso
    `,
    output: "nahi true",
  },
  {
    name: `binaryExpression print test with boolean expression - false variables comparison, should success`,
    input: `
      start conso;
      conso a = false;
      conso b = false;
      conso if (a == b) {
        print conso "hai false";
      } conso else {
        print conso "nahi false";
      }
      end conso
    `,
    output: "hai false",
  },
  {
    name: `binaryExpression print test with boolean expression - false variables comparison with string false, should success`,
    input: `
      start conso;
      conso a = "false";
      conso b = false;
      conso if (a == b) {
        print conso "hai false";
      } conso else {
        print conso "nahi false";
      }
      end conso
    `,
    output: "nahi false",
  },
  {
    name: "float value addition with integer value test, should success",
    input: `
      start conso
      conso a = 1.2, b = 2;
      print conso a + b;
      end conso
    `,
    output: "3.2"
  },
  {
    name: "float value addition with float value value test, should success",
    input: `
      start conso
      conso a = 1.2, b = 2.3;
      print conso a + b;
      end conso
    `,
    output: "3.5"
  },
  {
    name: "printStatement test with multiple expressions, should success",
    input: `
      start conso;
      conso a = 2, b = 60;
      print conso (a * (4 + 8) + 10), b;
      end conso
    `,
    output: "34 60",
  },
  {
    name: "printStatement test with multiple expressions and re assigning value of one variable, should success",
    input: `
      start conso;
      conso a = 2, b = 60;

      a = b + 3;
      print conso a, b;
      end conso
    `,
    output: "63 60",
  },
  {
    name: "printStatement test with multiple expressions & without any variables, should success",
    input: `
      start conso;
      print conso "hello", true, false;
      end conso
    `,
    output: "hello true false",
  },
  {
    name: "printStatement test with null, should success",
    input: `
      start conso;
      print conso null;
      end conso;
    `,
    output: "null",
  },
  {
    name: "printStatement test with null as second parameter, should success",
    input: `
      start conso;
      print conso 10, null;
      end conso;
    `,
    output: "10 null",
  },
  {
    name: "printStatement test with string concatenation, should success",
    input: `
      start conso;
      print conso "hello" + "crap";
      end conso;
    `,
    output: "hellocrap",
  },
  {
    name: "printStatement test with multiple expresions including null, should success",
    input: `
      start conso;
      conso a = 70;
      print conso 6*5, null, "jamtara", a;
      end conso;
    `,
    output: "30 null jamtara 70",
  },
  {
    name: "printStatement test with null variable, should success",
    input: `
      start conso;
      conso a;
      print conso a;
      end conso;
    `,
    output: "null",
  },
  {
    name: `printStatement test with string "undefined", should success`,
    input: `
      start conso;
      print conso "undefined";
      end conso;
    `,
    output: "undefined",
  },
  {
    name: `printStatement test with null variable, should success`,
    input: `
      start conso;
      conso a;
      print conso a;
      end conso;
    `,
    output: "null",
  },
  {
    name: `printStatement test with true variable, should success`,
    input: `
      start conso;
      conso a = true;
      print conso a;
      end conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with false variable, should success`,
    input: `
      start conso;
      conso a = false;
      print conso a;
      end conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with assignment expression, should success`,
    input: `
      start conso;
      conso a;
      print conso a = 90;
      end conso;
    `,
    output: "90",
  },
  {
    name: `printStatement test with logical AND, should success`,
    input: `
      start conso;
      print conso 9 && 10;
      end conso;
    `,
    output: "10",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      start conso;
      print conso 9 || 10;
      end conso;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical - 1, should success`,
    input: `
      start conso;
      print conso false && true;
      end conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with logical - 2, should success`,
    input: `
    start conso;
    conso a = true;
    print conso a && false;
    end conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with logical - 3, should success`,
    input: `
    start conso;
    conso a = true;
    print conso a && true;
    end conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with equality, should success`,
    input: `
      start conso;
      print conso 9 == 10;
      end conso;
    `,
    output: "false",
  },
  {
    name: `printStatement test with inequality, should success`,
    input: `
      start conso;
      print conso 9 != 10;
      end conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with logical OR, should success`,
    input: `
      start conso;
      print conso 9 || 10;
      end conso;
    `,
    output: "9",
  },
  {
    name: `printStatement test with logical OR - 2, should success`,
    input: `
      start conso;
      print conso false || true;
      end conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with boolean true false and logical, should success`,
    input: `
      start conso;
      print conso true != 10;
      end conso;
    `,
    output: "true",
  },
  {
    name: `printStatement test with boolean true and string "true", should success`,
    input: `
      start conso;
      print conso "true" == true;
      end conso;
    `,
    output: "false",
  },
  // while statement / loop tests
  {
    name: `whileStatement test with 1 time loop, should success`,
    input: `
      start conso;
      conso a = 0;
      conso while (a < 1) {
        print conso "conso";
        a += 1;
      }
      end conso;
    `,
    output: "conso",
  },
  {
    name: `whileStatement test with single break statement, should success`,
    input: `
      start conso;
      conso while (true) 
        stop conso;
      print conso "end";
      end conso;
    `,
    output: "end",
  },
  {
    name: `whileStatement test with nested loops, should success`,
    input: `
      start conso;
      conso a = 0;
      conso while (a < 2) {
        conso while (true)
          stop conso;
        print conso "hello";
        conso if (true)
          stop conso;
      }
      end conso;
    `,
    output: "hello",
  },
  {
    name: `whileStatement with multiple breaks, should success`,
    input: `
      start conso;
      conso a = 0;
      conso while (a < 2) {
        print conso "hello";
        conso if (true)
          stop conso;
        stop conso;
        stop conso;
      }
      end conso;
    `,
    output: "hello",
  },
  // if statement tests
  {
    name: `if statement success test - 1: only if, should success`,
    input: `
    start conso
    conso if (true) {
      print conso "conso";
    }
    end conso;
    `,
    output: "conso",
  },
  {
    name: `if statement success test - 2: if else both, should success`,
    input: `
    start conso
    conso if (true) {
      print conso "true";
    } conso else {
      print conso "false";
    }
    end conso;
    `,
    output: "true",
  },
  {
    name: `if statement success test - 3: if only with comarison condn, should success`,
    input: `
    start conso
    conso x = 9;
    conso if (x >= 9) {
      x = 5;
      print conso x;
    } 
    end conso;
    `,
    output: "5",
  },
  // else-if statement tests
  {
    name: `else-if statement success test - 1: if with one else-if, should success`,
    input: `
    start conso
    conso if (false) {
      print conso "false";
    } conso else-if (true) {
      print conso "true";
    }
    end conso;
    `,
    output: "true",
  },
  {
    name: `else-if statement success test - 2: if with multiple else-ifs, should success`,
    input: `
    start conso
    conso x = 10;
    conso if (x < 5) {
      print conso "x < 5";
    } conso else-if (x < 8) {
      print conso "x < 8";
    } conso else-if (x < 12) {
      print conso "x < 12";
    } conso else-if (x < 15) {
      print conso "x < 15";
    }
    end conso;
    `,
    output: "x < 12",
  },
  {
    name: `else-if statement success test - 3: nested if-else-if ladder, should success`,
    input: `
    start conso
    conso a = 15;
    conso if (a < 0) {
      print conso "a < 0";
    } conso else-if (a > 0) {
      conso if (a < 10) {
        print conso "a < 10";
      } conso else-if (a < 20) {
        print conso "a < 20";
      }
    }
    end conso
    `,
    output: "a < 20",
  },
  {
    name: `else-if statement success test - 4: if-else-if ladder evaluating to else, should success`,
    input: `
    start conso
    conso x = 15;
    conso if (x < 5) {
      print conso "x < 5";
    } conso else-if (x < 8) {
      print conso "x < 8";
    } conso else-if (x < 12) {
      print conso "x < 12";
    } conso else {
      print conso "x > 12";
    }
    end conso;
    `,
    output: "x > 12",
  },
  // logical expression test
  {
    name: `logical "&&" test with true false, should success`,
    input: `
        start conso
        conso if (true && false) {
          print conso "true";
        } conso else {
          print conso "false";
        }
        end conso;
      `,
    output: `false`,
  },
  // modulus operator test
  {
    name: `modulus operator "%" test, should success`,
    input: `
        start conso
        print conso 90 % 9;
        end conso;
      `,
    output: `0`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        start conso
        print conso 27 % 5;
        end conso;
      `,
    output: `2`,
  },
  {
    name: `modulus operator "%" test - 2, should success`,
    input: `
        start conso
        print conso 5 % 20;
        end conso;
      `,
    output: `5`,
  },
  {
    name: `whileStatement test with single continue statement, should success`,
    input: `
      start conso;
      conso a = 5;
      conso step = 0;
      conso while (a > 0) {
        step += 1;
        conso if (a % 2 != 0){
          a -= 2;
          conso next;
        }
        a -= 1;
      }
      print conso step;
      end conso;
    `,
    output: "3",
  },
  {
    name: `whileStatement test with multiple continue statement, should success`,
    input: `
      start conso;
      conso a = 5;
      conso step = 0;
      conso while (a > 0) {
        step += 1;
        conso if (a % 2 == 0){
          a -= 2;
          conso next;
        }
        a -= 1;
        conso next;
        print conso "oye oye oye.. yha tk nhi aana tha conso";
      }
      print conso step;
      end conso;
    `,
    output: "3",
  },
  {
    // step:  1 => 2
    // a: 10 => 7 => 6 => 3 => 2 => -1
    name: `whileStatement test with single continue statement without block, should success`,
    input: `
      start conso;
      conso a = 10;
      conso step = 0;
      conso while (a > 0) {
        conso if (a % 2 == 0){
          a -= 3;
          conso next;
        }
        a -= 1;
        conso if (step == 1) conso next
        step += 1;
      }
      print conso step;
      end conso;
    `,
    output: "1",
  },
];