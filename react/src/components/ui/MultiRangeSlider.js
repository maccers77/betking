import { useCallback, useEffect, useState, useRef } from 'react';
import style from './MultiRangeSlider.module.css'
import { useDispatch } from 'react-redux'
import { pricesFrom, pricesTo } from '../../features/lessThanSlice'

import classnames from "classnames"

function MultiRangeSlider(props) {
  const [minVal, setMinVal] = useState(props.min);
  const [maxVal, setMaxVal] = useState(props.max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);

  const priceArray = [1,1.1,1.2,1.3,1.4,1.5,2,2.5,3,3.5,4,5,10,20,10000]
  const dispatch = useDispatch()

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - props.min) / (props.max - props.min)) * 100),
    [props.min, props.max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  // useEffect(() => {
  //   onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal, onChange]);

function setMinHandler(event) {
  const value = Math.min(+event.target.value, maxVal - 1);
  setMinVal(value);
  event.target.value = value.toString();
}
function setMaxHandler(event) {
  const value = Math.max(+event.target.value, minVal + 1);
  setMaxVal(value);
  event.target.value = value.toString();
}

useEffect(() => {
  dispatch(pricesTo(priceArray[maxVal-1]));
  dispatch(pricesFrom(priceArray[minVal-1]));
},[minVal, maxVal]);
 

  let text;
  if(minVal === props.min &&  maxVal === props.max) {
    text = "Showing all odds"
  }else{
    if(maxVal === props.max) {
      text = "Showing from " + priceArray[minVal-1] + " to Max";
    }else{
      text = "Showing from " + priceArray[minVal-1] + " to " + priceArray[maxVal-1];
    }
  }

  return (
    <div className={style.sliderContainer}>
      <div className={style.text}>{text}</div>
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={minVal}
        ref={minValRef}
        onChange={setMinHandler}
        className={`${style.thumb} ${style["thumb--zindex-3"]} ${style["thumb--zindex-5"]}`}
      />
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={maxVal}
        ref={maxValRef}
        onChange={setMaxHandler}
        className={`${style.thumb} ${style["thumb--zindex-4"]}`}
      />

      <div className={style.slider}>
        <div className={style.slider__track} />
        <div ref={range} className={style.slider__range} />
        <div className={style.min}>1</div>
        <div className={style.max}>Max</div>
      </div>
    </div>
  );
}


export default MultiRangeSlider;