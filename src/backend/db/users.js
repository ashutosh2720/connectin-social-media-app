import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "ashutosh",
    lastName: "singh",
    username: "ashutosh@",
    password: "ashutosh",
    bio: "Everything is Connected",
    bookmarks: [],
    avatarUrl:
      "https://i.postimg.cc/Gmy05qwV/IMG-20220817-042650-595.jpg",
    website: "https://ashutosh.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "79Gksh9otl",
    firstName: "Shivam",
    lastName: "rao",
    username: "shivam@",
    password: "shivam123",
    bio: "Hello World",
    bookmarks: [],
    avatarUrl:
      "https://i.postimg.cc/nLhWtk6n/images-3.jpg",
    website: "https://google.com/",
    createdAt: "2022-01-02T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "anand",
    lastName: "gautam",
    username: "anand@",
    password: "anand123",
    bio: "Whats in bio?",
    bookmarks: [],
    avatarUrl:
      "https://i.postimg.cc/XY7LZvx8/IMG-20220817-043311-003.jpg",
    website: "https://romabulani.netlify.app/",
    createdAt: "2022-01-01T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "niket",
    lastName: "mishra",
    username: "niket@",
    password: "niket123",
    bio: "Whats in bio?",
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1651563581/socialmedia/avatars/carl-smith_mehw0u.webp",
    website: "https://romabulani.netlify.app/",
    createdAt: "2022-01-03T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "o5gzWjEeX_",
    firstName: "abhishek",
    lastName: "rana",
    username: "abhishek@",
    password: "abhishek123",
    bio: "Aspiring Frontend Engineer",
    bookmarks: [],
    avatarUrl:
      "https://i.postimg.cc/66bpsjgp/IMG-20220814-WA0011.jpg",
    website: "https://romabulani.hashnode.dev/",
    createdAt: "2022-01-04T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "M1NR81Bzlz",
    firstName: "ritesh",
    lastName: "maurya",
    username: "ritesh@",
    password: "ritesh123",
    bio: "What's up?",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525373/socialmedia/avatars/alex-maxwell.webp",
    website: "",
    createdAt: "2022-01-05T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "qq8zWjEeXd",
    firstName: "kamlesh",
    lastName: "kumar",
    username: "kamlesh@",
    password: "kamlesh123",
    bio: "Frontend Engineer",
    bookmarks: [],
    avatarUrl:
      "https://res.cloudinary.com/dtrjdcrme/image/upload/v1652525510/socialmedia/avatars/sophia-jones.webp",
    website: "",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];