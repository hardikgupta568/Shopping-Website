import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ram kapoor',
    email: 'ram@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Papu Sign',
    email: 'papu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mohit',
    email: 'mohit@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
