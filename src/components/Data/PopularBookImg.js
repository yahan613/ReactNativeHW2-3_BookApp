import PopularBookData from "./PopularBookData.json";

export const getImage = (imagePath) => {
  switch (imagePath) {
    case "first":
      return (require("../img/img_book_fashinopolis.png"));
    case "second":
      return require("../img/img_book_chanel.png");
    case "third":
      return require("../img/img_book_calligraphy.png");
    default:
      return null;
  }
};
