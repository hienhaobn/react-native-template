import { EThemeColor } from 'styles/colors';

import { IUser } from 'types/user';

export interface IToken {
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: string;
}

interface GlobalVariableParams {
  tokenInfo?: IToken | undefined;
  user?: IUser | undefined;
  activeRouteKey?: string;
  userId?: string;
  themeCurrent: EThemeColor;
  tron?: any;
}

export const GlobalVariable: GlobalVariableParams = {
  themeCurrent: EThemeColor.Light,
};

export const clearGlobal = () => {
  GlobalVariable.tokenInfo = undefined;
  GlobalVariable.user = undefined;
  GlobalVariable.userId = undefined;
};
