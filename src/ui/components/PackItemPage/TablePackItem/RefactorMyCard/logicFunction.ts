import {sortCardsType} from "bll/reducers/myCard-reducer";

export const logicFunction = (sortCards:sortCardsType, setSortCards: (sortCards: sortCardsType) => void, up:sortCardsType, down:sortCardsType) => {
    if (sortCards !== up && sortCards !== down) {
        setSortCards(up)
    } else if (sortCards === up) {
        setSortCards(down)
    } else {
        setSortCards(up)
    }
};