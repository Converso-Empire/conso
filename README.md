<div align="center">

# 🧠 Conso Programming Language

### *A Product of Converso Empire*

[![Build](https://github.com/Converso-Empire/conso/actions/workflows/node.js.yml/badge.svg)](https://github.com/Converso-Empire/conso/actions)
[![NPM](https://img.shields.io/badge/npm-conso-orange)](https://www.npmjs.com/package/conso)
[![Website](https://img.shields.io/badge/website-conversoempire.world-blue)](http://conversoempire.world/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**"Empire of Innovation, Creativity & Intelligence."**

[Website](http://conversoempire.world/) • [Documentation](https://conso.js.org/) • [GitHub](https://github.com/Converso-Empire/conso)

</div>

---

## 🌍 About Converso Empire

**Converso Empire** is a parent company that unites technology, creativity, and marketing under one vision. It serves as the umbrella brand for multiple specialized ventures — from AI to design to marketing — each focused on helping businesses and individuals thrive in the digital-first world.

Converso Empire is not just a group of companies; it is an **ecosystem that blends next-generation AI solutions, cutting-edge design, powerful marketing strategies, and futuristic digital experiences**.

---

## 🚀 About Conso

**Conso** is a modern, multi-paradigm programming language developed by Converso Empire. Written in TypeScript, Conso is designed to be intuitive, powerful, and accessible for developers of all skill levels.

### Key Features

- **🎯 Simple & Intuitive Syntax** - Easy to learn, powerful to use
- **⚡ Multi-Paradigm** - Supports multiple programming styles
- **🔧 TypeScript-Based** - Built on modern, robust technology
- **🌐 Cross-Platform** - Works seamlessly across different environments
- **📦 NPM Ready** - Easy installation and integration

### Version Information

- **Status:** Stable Release
- **Maintained By:** Converso Empire

---

## 💡 Why Choose Conso?

Conso represents the perfect blend of simplicity and power, designed by Converso Empire to meet the demands of modern software development:

- **Developer-Friendly**: Intuitive syntax that reduces learning curve
- **Enterprise-Ready**: Built with scalability and reliability in mind
- **Community-Driven**: Open-source with active community support
- **Future-Proof**: Regular updates and long-term support from Converso Empire
- **Versatile**: Suitable for web development, automation, scripting, and more

---

## 📦 Installation

### Quick Start

Install Conso globally via npm:

```bash
npm install -g conso
```

Verify installation:

```bash
conso --version
```

---

## 🎯 Usage

### Getting Started

**1. Create a new file (`hello.conso`)**

```conso
hi bhai
  bol bhai "Hello from Converso Empire!";
bye bhai
```

**2. Run your program**

```bash
conso hello.conso
```

**3. See the output**

```
Hello from Converso Empire!
```

### Try Online

Experiment with Conso in our [Interactive Playground](https://conso.js.org/#playground) — no installation required!

---

## 📚 Documentation

<h3 align="center">General</h3>
<p align="center"><code>hi bhai</code> is the entrypoint for the program and all program must end with <code>bye bhai</code>. Anything outside of it will be ignored.</p>

```

This will be ignored

hi bhai
// Write code here
bye bhai

This too
```

<h3 align="center">Variables</h3>
<p align="center">Variables can be declared using <code>bhai ye hai</code>.</p>

```

hi bhai
  bhai ye hai a = 10;
  bhai ye hai b = "two";
  bhai ye hai c = 15;
  a = a + 1;
  b = 21;
  c *= 2;
bye bhai
```

<h3 align="center">Types</h3>
<p align="center">Numbers and strings are like other languages. Null values can be denoted using <code>nalla</code>. <code>true</code> and <code>false</code> are the boolean values.</p>

```

hi bhai
  bhai ye hai a = 10;
  bhai ye hai b = 10 + (15*20);
  bhai ye hai c = "two";
  bhai ye hai d = 'ok';
  bhai ye hai e = nalla;
  bhai ye hai f = true;
  bhai ye hai g = false;
bye bhai
```

<h3 align="center">Built-ins</h3>
<p align="center">Use <code>bol bhai</code> to print anything to console.</p>

```

hi bhai
  bol bhai "Hello World";
  bhai ye hai a = 10;
  {
    bhai ye hai b = 20;
    bol bhai a + b;
  }
  bol bhai 5, 'ok', nalla , true , false;
bye bhai
```

<h3 align="center">Conditionals</h3>
<p align="center">conso supports if-else-if ladder construct , <code>agar bhai</code> block will execute if condition is <code>true</code>, otherwise one of the subsequently added <code>nahi to bhai</code> blocks will execute if their respective condition is <code>true</code>, and the <code>warna bhai</code> block will eventually execute if all of the above conditions are <code>false</code>

```

hi bhai
  bhai ye hai a = 10;
  agar bhai (a < 20) {
    bol bhai "a is less than 20";
  } nahi to bhai ( a < 25 ) {
    bol bhai "a is less than 25";
  } warna bhai {
    bol bhai "a is greater than or equal to 25";
  }
bye bhai
```

<h3 align="center">Loops</h3>
<p align="center">Statements inside <code>jab tak bhai</code> blocks are executed as long as a specified condition evaluates to true. If the condition becomes <code>false</code>, statement within the loop stops executing and control passes to the statement following the loop. Use <code>bas kar bhai</code> to break the loop and <code className="language-cpp">agla dekh bhai</code> to continue within loop.</p>


```

hi bhai
  bhai ye hai a = 0;
  jab tak bhai (a < 10) {
   a += 1;
   agar bhai (a == 5) {
    bol bhai "andar se bol bhai ", a;
    agla dekh bhai;
   }
   agar bhai (a == 6) {
    bas kar bhai;
   }
   bol bhai a;
  }
  bol bhai "done";
bye bhai
```

---

## 🛠️ Development

### For Contributors

Interested in contributing to Conso? We welcome contributions from the community!

**Explore the AST:**
- [Conso AST Explorer](https://conso-ast.netlify.app/) - Visualize the Abstract Syntax Tree

**Development Setup:**

```bash
# Clone the repository
git clone https://github.com/Converso-Empire/conso.git

# Install dependencies
cd conso
npm install

# Build the project
npm run build

# Run tests
npm test
```

---

## 🤝 Community & Support

### Get Help

- **Documentation**: [https://conso.js.org/](https://conso.js.org/)
- **Issues**: [GitHub Issues](https://github.com/Converso-Empire/conso/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Converso-Empire/conso/discussions)

### Connect With Us

- **Website**: [http://conversoempire.world/](http://conversoempire.world/)
- **GitHub**: [@Converso-Empire](https://github.com/Converso-Empire)

---

## 📄 License

Conso is released under the [MIT License](LICENSE).

Copyright © 2025 Converso Empire. All rights reserved.

---

## 🌟 About Converso Empire

Converso Empire is a technology company focused on innovation, creativity, and intelligence. We build cutting-edge solutions that empower businesses and developers worldwide.

**Our Ecosystem:**
- 🤖 **AI Solutions** - Next-generation artificial intelligence
- 🎨 **Design Services** - Cutting-edge creative solutions
- 📈 **Marketing Strategies** - Powerful digital marketing
- 💻 **Development Tools** - Modern software solutions

**Learn More:** [conversoempire.world](http://conversoempire.world/)

---

<div align="center">

**Made with ❤️ by Converso Empire**

*"Empire of Innovation, Creativity & Intelligence."*

[Website](http://conversoempire.world/) • [GitHub](https://github.com/Converso-Empire) • [Documentation](https://conso.js.org/)

</div>




