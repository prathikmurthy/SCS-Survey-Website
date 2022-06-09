import { react } from 'react';
import Image from 'next/image'


export default function TitleBar() {
    return (
        <div className="min-w-screen min-h-screen">

            <div className="pt-10 max-w-xl m-auto">
                <p className="xl:text-6xl text-2xl text-green-500 font-bold text-center xl:pb-10 xl:pt-20 pt-0 pb-0">Planning Ideas Survey</p>
                <p className="text-white xl:text-xl text-md text-center pt-4 xl:pb-10">This website was created by the IMO for you to help us select 50 applications from below that you would like to include in our online application configuration pilot.</p>
                <p className="text-white xl:text-xl text-md text-center pt-2 xl:pb-10">To vote, all you need to do is select the tile of the applications that you would like to include. A tile can be selected by <span className="text-green-500">clicking on any of the black space contained within the tile</span>. You only have <span className="text-green-500">50</span> votes, so choose wisely.</p>
                <p className="text-white xl:text-xl text-md text-center pt-2 xl:pb-10">Make sure to be intentional in choosing the right proportion of spaces (Meeting Spaces, Private Spaces, Private Offices, Semi-Private Spaces and Workstations). If you want to explore any setting in more detail you can click on the provided image within the tile and it will take you to the original Planning Idea website with further details.</p>
                <p className="text-white xl:text-xl text-md text-center pt-2 xl:pb-10">As you make your selections, the indicator at the bottom of the screen will update with the total number of settings you have selected.</p>
                <p className="text-white xl:text-xl text-md text-center pt-2">After you have made your selections, please click the <span className="text-green-500">Submit</span> button at the bottom of the screen. You will see a summary of the number of applications you have selected for each setting type. This information screen can be shown again by clicking the <span className="text-green-500">?</span> button also at the bottom of the screen.</p>
                <p className="text-gray-400 xl:text-lg text-md text-center pt-10">If you have any questions, please contact Jorge Lozano at <span className="text-green-500">jlozano1@steelcase.com</span></p>
                
            </div>
        </div>

    )
}