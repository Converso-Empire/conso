export default class nullPointerException extends Error {
  constructor(errorMessage: string) {
    const errorName = "nullPointerException";
    errorMessage = errorName + ": " + errorMessage;
    super(errorMessage);
    this.name = errorName;
    this.message = errorMessage;
  }
}
