import * as S from './Modal.styled'

const Modal = ({onCloseModal}) =>{
    return(
        <S.Overlay>
            <S.Modal>
                <S.Button style={{background: "crimson"}} onClick={() => onCloseModal(false)}>X</S.Button>
                <p>Os campos não podem ficar vazios</p>
            </S.Modal>
        </S.Overlay>
    )
}

export default Modal