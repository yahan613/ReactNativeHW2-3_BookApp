export const getnavicon = (imagePath) => {
    switch (imagePath) {
        case "Original_Homeimg":
            return (require("../img/icon_home.png"));
        case "Original_Listimg":
            return (require("../img/icon_nav_bookmark.png"));
        case "Original_Mybookimg":
            return (require("../img/icon_mybook.png"));
        case "Activated_Homeimg":
            return (require("../img/icon_home_actived.png"));
        case "Activated_Listimg":
            return (require("../img/icon_nav_bookmark_actived.png"));
        case "Activated_Mybookimg":
            return (require("../img/icon_mybook_actived.png"));
        default:
            return null;
    }
};