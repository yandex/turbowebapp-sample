declare global {
    interface Window {
        yandex: {
            app: {
                auth: {
                    identify: (clientId: string) => Promise<YandexAuthPSUIDInfo>;
                    getCurrentUserId: (clientId: string) => Promise<YandexAuthPSUIDInfo | null>;
                    authorize: (clientId: string, scopes?: YandexAuthScope[]) => Promise<YandexAuthApiInfo>;
                    updateUserInfo: (authToken: string) => Promise<YandexAuthInfo>;
                }
            }
        }
    }
}

const CLIENT_ID = '29155348f1804fa59520fdb55a90a003';

export type UserInfo = {
    uid?: number;
    login?: string;
    avatar_id?: string; //eslint-disable-line camelcase
    email?: string;
    name?: string;
    display_name?: string; //eslint-disable-line camelcase
}

export type PSUIDPayload = {
    psuid: string;
}

export type JWTPayload = {
    iss: string;
    iat: number;
    jti: string;
    exp: number;
}

export type YandexAuthPayload = JWTPayload & PSUIDPayload & UserInfo;

export type YandexAuthUserInfo = {
    jwtToken: string;
    payload: YandexAuthPayload;
}

export type YandexAuthPSUIDInfo = {
    jwtToken: string;
    payload: JWTPayload & PSUIDPayload;
}

export enum YandexAuthScope {
    Avatar = 'login:avatar',
    Info = 'login:info',
    Email = 'login:email',
}

export type YandexAuthInfo = {
    tokenInfo: {
        authToken: string;
        authorizedScopes: YandexAuthScope[];
    };
    userInfo: YandexAuthUserInfo;
}

export type YandexAuthApiInfo = {
    tokenInfo: {
        authToken: string;
        authorizedScopes: DOMStringList;
    };
    userInfo: YandexAuthUserInfo;
}

export async function identify(): Promise<YandexAuthPSUIDInfo> {
    return window.yandex.app.auth.identify(CLIENT_ID);
}

export async function getCurrentUserId(): Promise<YandexAuthPSUIDInfo | null> {
    return window.yandex.app.auth.getCurrentUserId(CLIENT_ID);
}

export async function authorize(scopes?: YandexAuthScope[]): Promise<YandexAuthInfo> {
    const rawData = await window.yandex.app.auth.authorize(CLIENT_ID, scopes);

    return {
        ...rawData,
        tokenInfo: {
            ...rawData.tokenInfo,
            authorizedScopes: Array.from(rawData.tokenInfo.authorizedScopes) as YandexAuthScope[]
        }
    };
}
