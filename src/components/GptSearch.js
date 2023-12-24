import React from 'react'
import BarSearch from './BarSearch';
import { bg_image } from '../utils/constants';

const GptSearch = () => {
    //what does z index do search
  return (
    <div>

<div className="absolute -z-10">
    <img
src={bg_image}/>
    </div>
<BarSearch/>
    </div>
  )
}

export default GptSearch;