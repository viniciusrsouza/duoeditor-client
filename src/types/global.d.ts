interface User {
  id: number;
  fullName: string;
  profilePicture?: string;
}

interface AuthUser extends User {
  email: string;
}
