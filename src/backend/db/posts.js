import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "xhzTkUi2Nt",
    content: "Nice Weather Today!!",
    mediaURL:
      "https://www.livemint.com/lm-img/img/2023/04/22/600x338/heatwave_1682126178495_1682126179096.jpg",

    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "janedoe",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "shivam",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content: "Started my Baking journey! Look what I made.",
    mediaURL:
      "https://insanelygoodrecipes.com/wp-content/uploads/2022/12/Pink-Mini-Cakes-with-Vanilla-and-Berries.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anand",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content: "I made this model . Check it out",
    mediaURL:
      "https://p.turbosquid.com/ts-thumb/FD/7b4Chy/5j/01/jpg/1614410620/600x600/fit_q87/0d36e52362d71912e56a9e47b8bcb36926cf7afb/01.jpg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "johndoe",
        text: "That's mouth watering! Could you make one for my Birthday as well?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "ritesh",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "MTYtVhecCj",
    content:
      "You are never too old to set another goal or to dream a new dream.",
    mediaURL: "https://uploads-ssl.webflow.com/624377e20c9e225e2e55e2ed/6321ba5da5c575b9fd49578d_soccer-into-goal-success-concept.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ashutosh",
    createdAt: "2022-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content: "Yayy! i likes anime!",
    mediaURL:
      "https://www.helpguide.org/wp-content/uploads/2023/02/Seasonal-Affective-Disorder-1200x800.jpeg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "janedoe",
        text: "Wow! Looks Amazzing! Happy Birthday!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "ashutosh",
    createdAt: "2022-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "tHaThLyFQh",
    content:
      "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    mediaURL: "https://avatars.githubusercontent.com/u/109720375?v=4",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ashutosh",
    createdAt: "2022-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "G-Gi3lSZP9",
    content: "When you have a dream, you’ve got to grab it and never let go.",
    mediaURL: "https://scontent.flko1-2.fna.fbcdn.net/v/t39.30808-6/337262442_999080971058518_9091879633088665080_n.jpg?stp=c0.139.843.843a_dst-jpg_p843x403&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=uKofVpIMIDEAX8CaLHY&_nc_ht=scontent.flko1-2.fna&oh=00_AfDLi_yjH_0RyN6hbIAHmYnamPkm8j2bH_wdn3N8nvqZgQ&oe=64A6BB14",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ashutosh",
    createdAt: "2022-05-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "GeMUAdi9mh",
    content:
      "No matter what people tell you, words and ideas can change the world.",
    mediaURL: "https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?cs=srgb&dl=pexels-lukas-rychvalsky-670720.jpg&fm=jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ashutosh",
    createdAt: "2022-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "IyUlYXTrzZ",
    content: "Sad memories",
    mediaURL:
      "https://media.cnn.com/api/v1/images/stellar/prod/230331134441-waking-up-distressed-dream-stock.jpg?c=16x9&q=h_720,w_1280,c_fill",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "sophiajones",
        text: "Oh! That looks Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "shivam",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "Ie92xOSVeU",
    content:
      "i got selected for Big Boss",
    mediaURL: "https://www.filmibeat.com/img/2023/06/puneetbbott2f1-1687176182.jpg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "janedoe",
        text: "Yes! I am also learning from there!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "puneet",
    createdAt: "2022-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUyfNt",
    content: "Believe in yourself! Rest all will fall in place.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "unImWvIzbf",
        username: "romabulani",
        text: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "abhishek",
    createdAt: "2022-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "CCmJpDnnQQ",
    content:
      "You can get everything in life you want if you will just help enough other people get what they want.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "shivam",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "Z_TZT_3EAw",
    content:
      "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
    mediaURL: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_601403390_370517.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ritesh",
    createdAt: "2022-01-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "e-knMEsoLq",
    content: "More is lost by indecision than wrong decision.",
    mediaURL: "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2023/06/18/1222630-puneet-superstar-bigg-boss.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "puneet",
    createdAt: "2022-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "VY14RsXC7G",
    content:
      "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",
    mediaURL: "https://images.unsplash.com/photo-1545241201-fee9df605ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RydWdnbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anand",
    createdAt: "2022-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "l9pedEMjZS",
    content: "If you don’t risk anything, you risk even more.",
    mediaURL: "https://focus.namirial.global/wp-content/uploads/sites/4/2023/02/RISK-MANAGEMENT.jpg",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "abhishek",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lbW4dlCpNC",
    content: "If it makes you nervous, you’re doing it right.",
    mediaURL: "https://www.verywellhealth.com/thmb/GM6xq49GkruiRtss1GazzI9aMWs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1295833423-27233bda8ea14eb7b870932551ed4370.jpg",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "shivam",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "k-Vwd2d7Vt",
    content:
      "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
    mediaURL: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "anand",
    createdAt: "2022-01-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "R2lAuXvK7V",
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm. Love this quote by Winston Churchill.",
    mediaURL: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ritesh",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "G5xd30tMCR",
    content:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    mediaURL: "https://img.indiaforums.com/media/640x0/58/0559-puneet-kumar.jpg",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "punee",
    createdAt: "2022-02-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lF8cnfPAe9",
    content:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "shivam",
    createdAt: "2022-01-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "stfTkUi2Nt",
    content:
      "“Do not wait for the perfect time and place to enter, for you are already onstage.",
    mediaURL: "",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "abhishek",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "quiTkUi2Nt",
    content: "It is a rough road that leads to the heights of greatness.",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "ritesh",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
