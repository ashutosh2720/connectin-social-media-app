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
      "https://scontent.fvns2-1.fna.fbcdn.net/v/t1.18169-9/972046_1380432585513387_1929490854_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=de6eea&_nc_ohc=K9wOiqFbtPwAX-X64s9&_nc_ht=scontent.fvns2-1.fna&oh=00_AfAp5MYm6laQq0e1LPhuolbp07VJ8ByOVPl8PzPTu610IA&oe=64CDF955",
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
      "https://scontent.fvns2-1.fna.fbcdn.net/v/t1.6435-9/60335806_633499770449637_6950103395348774912_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=19026a&_nc_ohc=iJWa-35Mu1UAX_z9Zwy&_nc_ht=scontent.fvns2-1.fna&oh=00_AfDEsGyGyDhLNT4xdt6Wk3bmszyEdP6pL9nZmV3fyHejlA&oe=64CDD4F7",
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
      "https://scontent.fvns2-1.fna.fbcdn.net/v/t39.30808-6/274620241_3084176255245423_1092928864219700103_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=HAhYCJ0P0ssAX-r-uNt&_nc_ht=scontent.fvns2-1.fna&oh=00_AfC4D_fu-rQNreHwfgnVp89LAHdXxrggada2MEW7e31axA&oe=64ABC39C",
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
      "https://avatars.githubusercontent.com/u/109124944?v=4",
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
    firstName: "Puneet",
    lastName: "Superstar",
    username: "puneet@",
    password: "kamlesh123",
    bio: "SUPERSTAR OF MEEMS  ",
    bookmarks: [],
    avatarUrl:
      "https://www.videomeme.in/wp-content/uploads/2022/12/1671998060722.jpg",
    website: "",
    createdAt: "2022-01-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];