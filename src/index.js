import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

let props = {
  navbar: [{
    path: "/profile",
    name: "profile"
  }, {
    path: "/dialogs",
    name: "dialogs"
  }, {
    path: "/news",
    name: "news"
  }, {
    path: "/music",
    name: "music"
  }, {
    path: "/settings",
    name: "settings"
  }],

  profile: {
    posts: [{
      author: "Ivan Ivanovchenkov",
      message: "Nunc fermentum placerat varius. ",
      likeCount: 35
    }, {
      author: "Ivan Ivanovchenkov",
      message: "Proin iaculis ante in felis ornare eleifend. ",
      likeCount: 31

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Nunc ornare eleifend mattis.",
      likeCount: 22

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Iaculis ante in felis ornare eleifend. Nullam aucto, volutpat lacinia.",
      likeCount: 111

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Nunc fermentum ante in felis ornare eleifend.lectus. Donec mattis.",
      likeCount: 85

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Volutpat nunc tincidunt, tincidunt tellus. Vivamauris vitae sapien scelerisque faucibuseget aliquet augue risus, commodo et nunc mollis.",
      likeCount: 39

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Nunc fermentum placerat varius. Proin iaculis ante in felis ornare eleifend. Nullam auctor quam pretium, volutpat nunc tincidunt, tincidunt tellus. Vivamus vel augue dapibus nisi condimentum gravida a vehicula mauris. Sed malesuada turpis vitae sapien scelerisque faucibus. Vestibulum quis vestibulum ante. In finibus consequat turpis in pulvinar. Integer eget aliquet augue, et efficitur sapien. Aliquam diam turpis, faucibus tincidunt porta et, dictum id erat. In nibh odio, lobortis eget erat vitae, cursus ultrices tortor. Sed quis risus lacus. Nullam pretium at quam a rutrum. In rhoncus euismod risus, a ullamcorper magna. Vestibulum vel enim at augue interdum mollis. Quisque mauris augue, commodo et nunc mollis, volutpat finibus lectus. Donec tincidunt lacinia mattis.",
      likeCount: 21

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Nunc mollis, volutpat finibus lectus. Donec tincidunt lacinia mattis.",
      likeCount: 53

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Nunc fermentum placerat varius. Proin iaculis ante in felis ornare eleifend. Nullam auctor quam pretium, volutpat nunc tincidunt, tincidunt tellus. Vivamus vel augue dapibus nisi condimentum gravida a vehicula mauris. Sed malesuada turpis vitae sapien scelerisque faucibus. Vestibulum quis vestibulum ante. In finibus consequat turpis in pulvinar. Integer eget aliquet augue, et efficitur sapien. Aliquam diam turpis, faucibus tincidunt porta et, dictum id erat. In nibh odio, lobortis eget erat vitae, cursus ultrices tortor. Sed quis risus lacus. Nullam pretium at quam a rutrum. In rhoncus euismod risus, a ullamcorper magna. Vestibulum vel enim at augue interdum mollis. Quisque mauris augue, commodo et nunc mollis, volutpat finibus lectus. Donec tincidunt lacinia mattis.",
      likeCount: 22

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Proin iaculis ante in felis ornare eleifend.",
      likeCount: 12

    }, {
      author: "Ivan Ivanovchenkov",
      message: "Tincidunt tellus. Vivamus gravida a vehicula mauris malesuada turpis.",
      likeCount: 6

    }]
  },
  dialogs: {
    dialogList: [{
      id: 1,
      author: "Nikolai Drozdov",
      message: "Nice animal!",
      avatar: "https://katun24.ru/sites/default/files/images/16764_705823479501415_4535084995626581082_n.jpg"
    }, {
      id: 2,
      author: "Anna Karenina",
      message: "Check my book.",
      avatar: "https://mtdata.ru/u5/photo0FEA/20511228952-0/original.jpg"
    }, {
      id: 3,
      author: "Prima Victoria",
      message: "WRRRR WRRRR",
      avatar: "https://wiki.gcdn.co/images/thumb/4/4a/Primo_Victoria_art_3.jpg/800px-Primo_Victoria_art_3.jpg"
    }, {
      id: 4,
      author: "San Diego",
      message: "I from Azur L.",
      avatar: "https://i.ytimg.com/vi/McCe-myjx4A/hqdefault.jpg"
    }, {
      id: 5,
      author: "Ded Insaid",
      message: "I am dead inside",
      avatar: "https://s.starladder.com/uploads/team_logo/3/f/4/1/meta_tag_8035f8c2f435bada12afd948c2598473.jpg"
    },],

    dialogMessageList: [{
      isMyMessage: true,
      message: "Hi!",
    }, {
      isMyMessage: false,
      message: "Hi!",
    }, {
      isMyMessage: true,
      message: "What is your name?",
    }, {
      isMyMessage: false,
      message: "My name is Anna.",
    }, {
      isMyMessage: true,
      message: "How are you?",
    }, {
      isMyMessage: false,
      message: "I'm fine.",
    },]
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App props={props} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
