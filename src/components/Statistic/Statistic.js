import { IconButton } from '../IconButton/IconButton'
import './Statistic.scss'

export const Statistic = () => {
    return (
        <div className="Statistic">
            <div className="Statistic__label"></div>
            <div className="Statistic_2col">
                <div className="Statistic__balance"></div>
                <IconButton icon="share" />
            </div>
            <div className="Statistic__label"></div>
            {/* <div className="Statistic_2col">
                <CircleStatistic
                label="last month"
                >$208.00</CircleStatistic>
                <CircleStatistic
                label="this month"
                >$328.00</CircleStatistic>
            </div> */}

        </div>
    )
}