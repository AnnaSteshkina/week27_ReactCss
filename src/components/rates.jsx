import './rates.css';

function Rate(props){
    return(
        <div className='wrapper'>
            <div className='upper-level'>Безлимитный {props.price}</div>
            <div className='main-level'>
                <div className='wrapper-main-level'>
                    <span className='text-currency'>руб</span>
                    <span className='main-price'>{props.price}</span>
                    <span className='text-month'>/мес</span>
                </div>
            </div>
            <div className='speed'>до {props.speed} Мбит/с</div>
            <div className='lower-level'>{props.details}</div>
        </div>
    )
}
export default Rate;