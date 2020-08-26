import { ConfirmUserResolver } from "./user/ConfirmUser";
import { ForgotPasswordResolver } from "./user/ForgotPassword";
import { LoginResolver } from "./user/Login";
import { LogoutResolver } from "./user/Logout";
import { MeResolver } from "./user/Me";
import { RegisterResolver } from "./user/Register";

export const ConfirmUser = ConfirmUserResolver
export const ForgotPassword = ForgotPasswordResolver;
export const Login = LoginResolver;
export const Logout = LogoutResolver;
export const Me = MeResolver;
export const Register = RegisterResolver;
