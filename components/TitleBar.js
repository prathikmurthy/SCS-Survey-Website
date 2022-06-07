import { react } from 'react';
import Image from 'next/image'


export default function TitleBar() {
    return (
        <div className="min-w-screen min-h-screen">

            <div className="pt-10 max-w-xl m-auto">
                <p className="xl:text-6xl text-4xl text-green-500 font-bold text-center xl:pb-10 xl:pt-20 pt-0 pb-0">Planning Ideas Survey</p>
                <p className="text-white xl:text-2xl text-md text-center pt-4 xl:pb-10">This survey has been created to determine the 50 most popular Steelcase Space Planning Ideas, please scroll through the ideas shown on this page and choose your personal favorites.</p>
                <p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">The Planning Idea tiles have not been sorted in any particular order. A tile can be selected by clicking on any of the black space contained within the tile.</p>
                <p className="text-white xl:text-2xl text-md text-center pt-2 xl:pb-10">For further information, clicking on the provided image within the tile will take you to the Steelcase website with further details.</p>
                <p className="text-white xl:text-2xl text-md text-center pt-2">After you have made your selections, please click the <span className="text-green-500">Submit</span> button at the bottom of the screen. This information screen can be shown again by clicking the <span className="text-green-500">?</span> button also at the bottom of the screen.</p>
                
            </div>
        </div>

    )
}