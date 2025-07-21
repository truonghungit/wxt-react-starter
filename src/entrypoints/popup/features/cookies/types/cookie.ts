export type CookieItem = {
  name: string;
  value: string;
  domain: string;
  secure: boolean;
  session: boolean;
  httpOnly: boolean;
  hostOnly: boolean;
  sameSite: "Strict" | "Lax" | "None";
  expirationDate: number | null;
};
