// Candidate.interface.tsx
export interface Candidate {
  name: string;
  login: string;  // GitHub API uses 'login' instead of 'username'
  location: string;
  avatar_url: string;
  email: string;
  html_url: string;
  company: string;
  id: number;
}