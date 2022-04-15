import {ModalType} from "../reducers/modal-reducer";
import {modalCardReducerType} from "../reducers/modalCard-reducer";
import {AppRootStateType} from "../store";
import {PackItemResponseType, PackItemType} from "bll/reducers/packItem-reducer";

export const selectorIsInitialized = (state: AppRootStateType): boolean => state.app.isInitialized
export const selectorFetching = (state: AppRootStateType): boolean => state.app.isFetching
//export const selectorIsAuth = (state: AppRootStateType): boolean => state.auth.isAuth

export const selectorMyUserId = (state: AppRootStateType): string => state.auth.user._id

//export const selectorModalCard = (state: AppRootStateType): modalCardReducerType => state.modalCard
export const selectorTitleModalCard = (state: AppRootStateType): string => state.modalCard.title
export const selectorActiveModalCard = (state: AppRootStateType): ModalType => state.modalCard.activeModalCard
export const selectorCardId = (state: AppRootStateType): string => state.modalCard.cardId
export const selectorQuestion = (state: AppRootStateType): string => state.modalCard.question
export const selectorAnswer = (state: AppRootStateType): string => state.modalCard.answer

export const selectorPackItem = (state: AppRootStateType): PackItemResponseType => state.packItem
export const selectorPackUserId = (state: AppRootStateType): string => state.packItem.packUserId
export const selectorMinGrade = (state: AppRootStateType): number => state.packItem.minGrade
export const selectorMaxGrade = (state: AppRootStateType): number => state.packItem.maxGrade
export const selectorCards = (state: AppRootStateType): PackItemType[] => state.packItem.cards
export const selectorPageCount = (state: AppRootStateType): number => state.packItem.pageCount
export const selectorPage = (state: AppRootStateType): number => state.packItem.page
