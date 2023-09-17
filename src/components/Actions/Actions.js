import { Block } from "../Block/Block";
import './Actions.scss'


export const Actions = () => {
    const onCopy = () => {
        alert('ON COPY')
    }
    const onShow = () => {
        alert('ON SHOW')
    }


    return (
        <div className="Actions">
            <Block 
            className="action"
            onClick={onCopy}>
                <i className="io-Group"></i>
                <span>COPY CARD NUMBER</span>
            </Block>
            <Block 
            className="action"
            onClick={onShow}>
                <i className="io-Group-11"></i>
                <span>SHOW CVV</span>
            </Block>
        </div>
    )
}