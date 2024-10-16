import Post from "../types/post";
export default function mockPosts(): Post[] {
  return [
    {
      id: 1,
      title: "Example Post Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-09-12",
      authorId: 1,
    },
    {
      id: 2,
      title: "Example Post Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-09-12",
      authorId: 2,
    },
    {
      id: 3,
      title: "Example Post Title 3 with ubnoxiously long title",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-09-13",
      authorId: 1,
    },
    {
      id: 4,
      title: "Example Post Title 4",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-09-14",
      authorId: 2,
    },
    {
      id: 5,
      title: "Example Post Title 5",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-09-15",
      authorId: 1,
    },
    {
      id: 6,
      title: "Example Post Title 6",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-09-16",
      authorId: 2,
    },
    {
      id: 7,
      title: "Example Post Title 7",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-09-17",
      authorId: 1,
    },
  ];
}
