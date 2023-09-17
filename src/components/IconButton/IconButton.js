import './IconButton.scss';

export const IconButton = ({ icon }) => {
    return (
        <div className="IconButton">
            <i className={`ic-${icon}`}></i>
        </div>
    )
}