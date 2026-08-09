import { LoginPayloadDto } from "../auth/dtos/loginPayload.dto";

export const authorizationToLoginPayload = (authorization: string) : LoginPayloadDto | undefined => {
  const authprizationSplitter = authorization.split('.');

  if(authprizationSplitter.length < 3 || !authprizationSplitter[1]) return undefined;

  return JSON.parse(Buffer.from(authprizationSplitter[1], 'base64').toString('ascii'));
};