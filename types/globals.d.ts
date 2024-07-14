export {};

declare global {
  interface CustomJwtSessionClaims {
    firstName?: string;
    lastName?: string;
    email?: string;
    externalID?: string;
  }
}
