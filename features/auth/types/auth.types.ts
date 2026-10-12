export type AccountType = "PATIENT" | "DOCTOR";

export type DoctorRegistrationData = {
  specialization: string;
  yearsOfExperience: number;
  bio?: string;
  hospitalId?: number;
  departmentId?: number;
  licenseNumber: string;
};

type RegisterBase = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  age: number;
};

export type PatientRegisterRequest = RegisterBase & {
  accountType?: "PATIENT";
};

export type DoctorRegisterRequest = RegisterBase & {
  accountType: "DOCTOR";
  doctor: DoctorRegistrationData;
};

export type RegisterRequest = PatientRegisterRequest | DoctorRegisterRequest;

export type VerifyEmailRequest = {
  email: string;
  code: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type SocialAuthRequest = {
  idToken: string;
};

export type ForgotPasswordRequest = {
  email: string;
};

export type ResetPasswordRequest = {
  email: string;
  code: string;
  newPassword: string;
};

export type RefreshTokenRequest = {
  refreshToken: string;
};

export type ApiMessageResponse = {
  message: string;
};

export type AuthRole = "PATIENT" | "DOCTOR" | "CAREGIVER";

export type AuthUser = {
  id: number;
  email: string;
  fullName: string;
  role: AuthRole;
  status: string;
  provider: string;
  isEmailVerified: boolean;
  phone?: string;
  age?: number;
  avatarUrl?: string;
  lastLoginAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type AuthTokens = {
  accessToken: string;
  refreshToken: string;
};

export type VerifyEmailResponse = {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
};

export type AuthResponse = {
  user: AuthUser;
  accessToken: string;
  refreshToken: string;
};
