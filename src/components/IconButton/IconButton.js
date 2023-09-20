import './IconButton.scss';

export const IconButton = ({ icon, onClick }) => {
    return (
        <div className="IconButton" onClick={onClick}>
            <i className={`io-${icon}`}></i>
        </div>
    )
}