/**
 * Do not edit directly
 * Generated on Fri, 24 Feb 2023 09:39:51 GMT
 */

export default tokens;

declare interface DesignToken {
  value: any;
  name?: string;
  comment?: string;
  themeable?: boolean;
  attributes?: {
    category?: string;
    type?: string;
    item?: string;
    subitem?: string;
    state?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

declare const tokens: {
  "color": {
    "black": DesignToken,
    "white": DesignToken
  },
  "borderRadius": {
    "base": DesignToken
  }
}