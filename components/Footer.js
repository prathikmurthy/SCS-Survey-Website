import { react } from 'react';
import SelectionCount from './SelectionCount.js';
const axios = require('axios');
import { ReactDOM } from 'react-dom';
import MyDialog from './Dialog.js';





export default function Footer(props) {
    return (
        <footer className="w-full text-white font-bold p-4 sticky bottom-0 bg-[#191919]">
            <div className="flex justify-around">
                <SelectionCount />
                {/* <Alert /> */}
                <MyDialog />               
            </div>
      </footer>
    )
}