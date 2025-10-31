import Snippet from "./Snippet";


/* This example requires Tailwind CSS v2.0+ */
const features = [
  {
    name: "General",
    description: (
      <>
        <code className="language-cpp">hi conso</code> is the entrypoint for the
        program and all program must end with{" "}
        <code className="language-cpp">bye conso</code>. Anything outside of it
        will be ignored.
      </>
    ),
    code: `This will be ignored

hi conso
  // Write code here
bye conso

This too
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using{" "}
        <code className="language-cpp">conso ye hai</code>.
      </>
    ),
    code: `hi conso
    conso ye hai a = 10;
    conso ye hai b = "two";
    conso ye hai c = 15;
    a = a + 1;
    b = 21;
    c *= 2;
bye conso
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. Null values can be denoted
        using <code className="language-cpp">nalla</code>.{" "}
        <code className="language-cpp">true</code> and{" "}
        <code className="language-cpp">false</code> are the boolean values.
      </>
    ),
    code: `hi conso
    conso ye hai a = 10;
    conso ye hai b = 10 + (15*20);
    conso ye hai c = "two";
    conso ye hai d = 'ok';
    conso ye hai e = nalla;
    conso ye hai f = true;
    conso ye hai g = false;
bye conso
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="language-cpp">bol conso</code> to print anything to
        console.
      </>
    ),
    code: `hi conso
    bol conso "Hello World";
    conso ye hai a = 10;
    {
       conso ye hai b = 20;
       bol conso a + b;
    }
    bol conso 5, 'ok', nalla , true , false;
bye conso
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        conso supports if-else-if ladder construct , <code className="language-cpp">agar conso</code> block will execute if condition is <code className="language-cpp">true</code>, otherwise one of the subsequently added <code className="language-cpp">nahi to conso</code> blocks will execute if their respective condition is <code className="language-cpp">true</code>, and the <code className="language-cpp">warna conso</code> block will eventually execute if all of the above conditions are <code className="language-cpp">false</code>.
      </>
    ),
    code: `hi conso
    conso ye hai a = 10;
    agar conso (a < 20) {
      bol conso "a is less than 20";
    } nahi to conso ( a < 25 ) {
      bol conso "a is less than 25";
    } warna conso {
      bol conso "a is greater than or equal to 25";
    }
bye conso
    `
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="language-cpp">jab tak conso</code> blocks are executed as long as a specified condition evaluates to <code className="language-cpp">true</code>. If the condition becomes <code className="language-cpp">false</code>, statement within the loop stops executing and control passes to the statement following the loop. 
        Use <code className="language-cpp">bas kar conso</code> to break the loop and <code className="language-cpp">agla dekh conso</code> to continue within loop.
      </>
    ),
    code: `hi conso
    conso ye hai a = 0;
    jab tak conso (a < 10) {
      a += 1;
      agar conso (a == 5) {
        bol conso "andar se bol conso ", a;
        agla dekh conso;
      }
      agar conso (a == 6) {
        bas kar conso;
      }
      bol conso a;
    }
    bol conso "done";
bye conso
    `
  }

];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">
            Documentation
          </h2>
          <p className="mt-4 text-gray-300">
            conso is dynamically typed toy programming language, based on an
            inside joke, written in Typescript.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="font-medium text-gray-300">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-200">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
