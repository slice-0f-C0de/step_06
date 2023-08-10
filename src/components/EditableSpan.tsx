import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    oldTitle: string
    callback: (updateTitle: string) => void
}

export const EditableSpan = (props: PropsType) => {

    let [updateTitle, setUpdateTitle] = useState(props.oldTitle)

    let [edit, setEdit] = useState(false)

    const editHandler = () => {
        setEdit(!edit)
        if(edit) addTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(e.currentTarget.value)
    }

    const addTask = () => {
        props.callback(updateTitle)
    }

    return (
        edit
            ? <input value={updateTitle} onChange={onChangeHandler} onBlur={editHandler} autoFocus/>
            : <span onDoubleClick={editHandler}>{props.oldTitle}</span>
    );
};
