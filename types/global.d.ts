type GlobalResponse<T> = {
  message: string;
  statusCode: Number;
  result: T;
};

type Demo = {
  message: string;
};

type AuthSchemes = typeof AuthSchemes[keyof typeof AuthSchemes];

interface HttpOptions {
  expire?: number;
  secret?: string;
}

interface JwtOptions {
  accessExpire?: number;
  refreshExpire?: number;
  secret?: string;
}

type JWTPayload = {
  id: string;
  iat: number | undefined;
  exp: number | undefined;
  type?: stgring;
};

interface IUser {
  name?: string;
  email: string;
  password: string;
  roleCode: number;
  requestCode: number;
}

interface IRequest {
  request: string;
  code: number;
}

interface IRole {
  code: number;
  seniority: string;
  function: string;
}