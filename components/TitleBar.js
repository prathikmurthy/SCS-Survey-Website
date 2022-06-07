import { react } from 'react';
import Image from 'next/image'


export default function TitleBar() {
    return (
        <div className="min-w-screen min-h-screen">

            <div className="pt-10 max-w-xl m-auto">
                <p className="text-4xl text-white font-bold text-center">Planning Ideas Survey</p>
                {/* <p className="pt-10 text-2xl text-white font-bold text-center">Created by the Innovation Management Office</p> */}
                {/* <p className="pt-5 text-l text-white font-bold text-center">Created by the Innovation Management Office</p> */}
                <p className="text-white lg:text-xl text-xl text-center pt-4 ">This survey has been created to determine the 50 most popular Steelcase Space Planning Ideas, please scroll through the ideas shown on this page and choose your personal favorites.</p>
                <p className="text-white lg:text-xl text-xl text-center pt-2">The Planning Idea tiles have not been sorted in any particular order. A tile can be selected by clicking on any of the black space contained within the tile.</p>
                <p className="text-white text-xl lg:text-xl text-center pt-2">For further information, clicking on the provided image within the tile will take you to the Steelcase website with further details.</p>
                <p className="text-white text-xl lg:text-xl text-center pt-2">After you've made your selections, please click the <span className="text-green-400">Submit</span> button at the bottom of the screen. This information screen can be shown again by clicking the <span className="text-green-400">?</span> button also at the bottom of the screen.</p>
                
            </div>
        </div>

    )
}