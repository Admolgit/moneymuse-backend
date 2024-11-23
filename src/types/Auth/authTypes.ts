export type AuthDTOTypes = {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  isAdmin?: boolean;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
}
