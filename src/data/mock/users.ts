import User from "../types/user";
export default function mockUsers(): User[] {
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      password_hashed:
        "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f",
    },
    {
      id: 2,
      name: "Kate Red",
      email: "kate.red@example.com",
      password_hashed:
        "4ab0b1e04465620179a0dca683ab910c879e2e684cc08a05b3bc5cf4f0453616",
    },
  ];
}
