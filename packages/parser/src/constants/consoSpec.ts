export const TokenTypes = {
  NULL_TYPE: null,

  HI_conso_TYPE: "hi conso",

  BYE_conso_TYPE: "bye conso",

  BOL_conso_TYPE: "bol conso",

  conso_YE_HAI_TYPE: "conso ye hai",

  AGAR_conso: "agar conso",

  WARNA_conso: "warna conso",

  NAHI_TO_conso: "nahi to conso",

  JAB_TAK_conso: "jab tak conso",

  BAS_KAR_conso: "bas kar conso",

  AGLA_DEKH_conso: "agla dekh conso",

  NALLA_TYPE: "NALLA",

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
  { regex: /^\bhi conso\b/, tokenType: TokenTypes.HI_conso_TYPE },
  { regex: /^\bbye conso\b/, tokenType: TokenTypes.BYE_conso_TYPE },
  { regex: /^\bbol conso\b/, tokenType: TokenTypes.BOL_conso_TYPE },
  { regex: /^\bconso ye hai\b/, tokenType: TokenTypes.conso_YE_HAI_TYPE },
  { regex: /^\bagar conso\b/, tokenType: TokenTypes.AGAR_conso },
  { regex: /^\bnahi to conso\b/, tokenType: TokenTypes.NAHI_TO_conso },
  { regex: /^\bwarna conso\b/, tokenType: TokenTypes.WARNA_conso },
  { regex: /^\bnalla\b/, tokenType: TokenTypes.NALLA_TYPE },
  { regex: /^\bjab tak conso\b/, tokenType: TokenTypes.JAB_TAK_conso },
  { regex: /^\bbas kar conso\b/, tokenType: TokenTypes.BAS_KAR_conso },
  { regex: /^\bagla dekh conso\b/, tokenType: TokenTypes.AGLA_DEKH_conso },

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
