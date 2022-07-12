import style from './IncrementalValues.module.css'


function IncrementalValues(props) {
    // function incrementClicked(event, val) {
    //     this.props.onClick(val);
    // }
    return <div className={style.incrementalValues}>
        {/* <button onClick={event => props.onClick(event, 10)}>+10</button> */}
        <button onClick={event => props.onClick(event, 50)}>+50</button>
        <button onClick={event => props.onClick(event, 250)}>+250</button>
        <button onClick={event => props.onClick(event, 1000)}>+1,000</button>
    </div>
}

export default IncrementalValues;