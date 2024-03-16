export const getStar = (starpath) => {
    switch (starpath) {
        case 'full':
            return (require("../img/icon_star_filled.png"));
        case 'empty':
            return require("../img/icon_star_empty.png");
        default:
            return null;
    }
};
