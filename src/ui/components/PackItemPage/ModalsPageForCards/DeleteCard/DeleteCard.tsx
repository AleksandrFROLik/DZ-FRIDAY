import {memo} from "react";
import SuperButton from "../../../../common/c2-SuperButton/SuperButton";
import s from './DeleteCard.module.scss'

type DeletePacksPropsType = { deleteCard: () => void }

const DeleteCard = memo(({deleteCard}: DeletePacksPropsType) => {

    const deleteCardOnClick = () => deleteCard()

    return (
        <div className={s.delete_packs_container}>
            <p>Do you really want to remove card ?</p>
            <p>All data will be excluded from this course.</p>
            <SuperButton onClick={deleteCardOnClick} className={s.delete_button}>Delete</SuperButton>
        </div>
    )
})

export default DeleteCard