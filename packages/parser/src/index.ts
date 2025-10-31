import consoModule from "./module/consoModule";

export { NodeType } from "./constants/constants";
export type { ASTNode } from "./components/parser/types/nodeTypes";
export default consoModule.getParser();
