import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Card(){
    return (
        <div className="flex flex-col items-center gap-6 rounded-2xl border-solid border-2 border-white-200 w-fit rounded-none text-md">
        <div className="flex flex-col">
                <img className="w-fit
" src="https://media.themoviedb.org/t/p/w220_and_h330_face/iPOn6DinuVyLY17YM9mKuPofV08.jpg" />
            <div className="flex flex-col  py-9 px-3">
                <h1 className="text-xl">Title</h1>
                <div className="flex gap-2 font-medium text-gray-600 dark:text-gray-400 gap-y-8">
                    <span className="text-purple-300">2026 . </span>
                    <span className="text-purple-300">4.8/5 . </span>
                    <span className="text-purple-300">Comedy</span>
                </div>
                <div className="flex gap-4 font-medium">
                <button className="border-1 border-white-200 bg-white text-black p-1 text-sm"><InformationCircleIcon className="w-6"/></button>

                </div>
            </div>
        </div>
        </div>
    )
}