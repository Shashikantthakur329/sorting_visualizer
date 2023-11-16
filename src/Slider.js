import React, {useState} from "react";


function Slider({onSliderChange}){
    const [sliderValue, setSliderValue] = useState(20);

    const SliderValChanged = (event) =>{
        const newVal = event.target.value;
        // sliderValue = newVal;
        setSliderValue(newVal);
        onSliderChange(newVal);
    };

    return (
        <div className="Slider">
          <label>
            Size of array: {sliderValue}
            <input
              type="range"
              min="7"
              max="55"
              step="1"
              value={sliderValue}
              onChange={SliderValChanged}
            />
          </label>
        </div>
      );

}

export default Slider;