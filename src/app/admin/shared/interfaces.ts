export interface User {
  email: string
  password: string
  returnSecureToken?: boolean
}

export interface FbAuthResponse {
  idToken: string
  expiresIn: string
}

export interface Project {
  github: string
  name: string
  link: string
  file: string
  id?: string
  date: Date
}

export interface FbCreateResponse {
  name: string
}
