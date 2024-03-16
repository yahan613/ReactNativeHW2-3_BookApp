export const getImagee = (imagePath) => {
  switch (imagePath) {
    case "first":
      return (require("../img/img_book_ysl.png"));
    case "second":
      return require("../img/img_book_tbos.png");
    case "third":
      return require("../img/img_book_stitchedup.png");
    default:
      return null;
  }
};