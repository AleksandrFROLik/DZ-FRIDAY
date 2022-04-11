import {memo} from "react";
import {useDispatch} from "react-redux";
import s from "../TablePackItem.module.scss";
import {deleteCardModalAC, updateCardModalAC} from "bll/reducers/modalCard-reducer";
import SuperButton from "../../../../common/c2-SuperButton/SuperButton";

type RefactorMyCardType = {
    _id: string,
    newQuestion: string,
    newAnswer: string
}

const RefactorMyCard = memo(({_id, newQuestion, newAnswer}: RefactorMyCardType) => {
    
    const dispatch = useDispatch()

    const deleteCard = () => dispatch(deleteCardModalAC(_id));
    const updateCard = () => dispatch(updateCardModalAC(newQuestion, newAnswer, _id));

    return (
        <>
            <div className={s.buttonsBlock}>
                <SuperButton className={` ${s.button} ${s.delete}`} onClick={deleteCard}>Delete</SuperButton>
                <SuperButton className={s.button} onClick={updateCard}>Edit</SuperButton>
            </div>
        </>
    );
});

export default RefactorMyCard;