export const TokenTypes = {
  NULL_TYPE: null,

  HI_conso_TYPE: "start conso",

  BYE_conso_TYPE: "end conso",

  BOL_conso_TYPE: "print conso",

  conso_YE_HAI_TYPE: "conso",

  AGAR_conso: "conso if",

  WARNA_conso: "conso else",

  NAHI_TO_conso: "conso else-if",

  JAB_TAK_conso: "conso while",

  BAS_KAR_conso: "stop conso",

  AGLA_DEKH_conso: "conso next",

  null_TYPE: "null",

  SEMI_COLON_TYPE: ";",

  OPEN_CURLY_BRACE_TYPE: "{",

  CLOSED_CURLY_BRACE_TYPE: "}",

  OPEN_PARENTHESIS_TYPE: "(",

  CLOSED_PARENTHESIS_TYPE: ")",

  COMMA_TYPE: ",",

  NUMBER_TYPE: "NUMBER",

  IDENTIFIER_TYPE: "IDENTIFIER",

  SIMPLE_ASSIGN_TYPE: "SIMPLE_ASSIGN",

  COMPLEX_ASSIGN_TYPE: "COMPLEX_ASSIGN",

  ADDITIVE_OPERATOR_TYPE: "ADDITIVE_OPERATOR",

  MULTIPLICATIVE_OPERATOR_TYPE: "MULTIPLICATIVE_OPERATOR",

  RELATIONAL_OPERATOR: "RELATIONAL_OPERATOR",

  EQUALITY_OPERATOR: "EQUALITY_OPERATOR",

  STRING_TYPE: "STRING",

  BOOLEAN_TYPE: "BOOLEAN",

  LOGICAL_AND: "LOGICAL_AND",

  LOGICAL_OR: "LOGICAL_OR"
};

export const SPEC = [
  // Whitespcaes
  { regex: /^\s+/, tokenType: TokenTypes.NULL_TYPE },

  // singke line Comments
  { regex: /^\/\/.*/, tokenType: TokenTypes.NULL_TYPE },

  // multi line comments
  { regex: /^\/\*[\s\S]*?\*\//, tokenType: TokenTypes.NULL_TYPE },

  // Symbols, delimiters
  { regex: /^;/, tokenType: TokenTypes.SEMI_COLON_TYPE },
  { regex: /^\{/, tokenType: TokenTypes.OPEN_CURLY_BRACE_TYPE },
  { regex: /^\}/, tokenType: TokenTypes.CLOSED_CURLY_BRACE_TYPE },
  { regex: /^\(/, tokenType: TokenTypes.OPEN_PARENTHESIS_TYPE },
  { regex: /^\)/, tokenType: TokenTypes.CLOSED_PARENTHESIS_TYPE },
  { regex: /^,/, tokenType: TokenTypes.COMMA_TYPE },

  //Keywords
  { regex: /^\bstart conso\b/, tokenType: TokenTypes.HI_conso_TYPE },
  { regex: /^\bend conso\b/, tokenType: TokenTypes.BYE_conso_TYPE },
  { regex: /^\bprint conso\b/, tokenType: TokenTypes.BOL_conso_TYPE },
  { regex: /^\bconso\b/, tokenType: TokenTypes.conso_YE_HAI_TYPE },
  { regex: /^\bconso if\b/, tokenType: TokenTypes.AGAR_conso },
  { regex: /^\bconso else-if\b/, tokenType: TokenTypes.NAHI_TO_conso },
  { regex: /^\bconso else\b/, tokenType: TokenTypes.WARNA_conso },
  { regex: /^\bnull\b/, tokenType: TokenTypes.null_TYPE },
  { regex: /^\bconso while\b/, tokenType: TokenTypes.JAB_TAK_conso },
  { regex: /^\bstop conso\b/, tokenType: TokenTypes.BAS_KAR_conso },
  { regex: /^\bconso next\b/, tokenType: TokenTypes.AGLA_DEKH_conso },

  // Number
  { regex: /^[+-]?([\d]*[.])?[\d]+/, tokenType: TokenTypes.NUMBER_TYPE },

  // Boolean
  { regex: /^\btrue\b/, tokenType: TokenTypes.BOOLEAN_TYPE },
  { regex: /^\bfalse\b/, tokenType: TokenTypes.BOOLEAN_TYPE },

  // Identifier
  { regex: /^\w+/, tokenType: TokenTypes.IDENTIFIER_TYPE },

  // Equality operator: ==, !=
  {regex: /^[=!]=/, tokenType: TokenTypes.EQUALITY_OPERATOR},

  // Assignment operators: =, *=, /=, +=, -=
  { regex: /^=/, tokenType: TokenTypes.SIMPLE_ASSIGN_TYPE },
  { regex: /^[\*\%\/\+\-]=/, tokenType: TokenTypes.COMPLEX_ASSIGN_TYPE },

  // operator
  { regex: /^[+\-]/, tokenType: TokenTypes.ADDITIVE_OPERATOR_TYPE },
  { regex: /^[*\/\%]/, tokenType: TokenTypes.MULTIPLICATIVE_OPERATOR_TYPE },
  {regex: /^[><]=?/, tokenType: TokenTypes.RELATIONAL_OPERATOR},

  // logical operators: &&, ||
  {regex: /^&&/, tokenType: TokenTypes.LOGICAL_AND},
  {regex: /^\|\|/, tokenType: TokenTypes.LOGICAL_OR},

  // String
  { regex: /^"[^"]*"/, tokenType: TokenTypes.STRING_TYPE },
  { regex: /^'[^']*'/, tokenType: TokenTypes.STRING_TYPE },
];

export type Spec = typeof SPEC;
