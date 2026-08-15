export default async function ExtraInfo({id} : {id : number}){


    return (
      <div className="h-full">
        <div>
          <h1 className="text-4xl text-white font-bold">
            qsdsq
            <span className="text-gray-200 font-normal">qsdqsd</span>
          </h1>
        </div>

        <div>
          <span className="text-lg text-white font-bold bg-violet-500 inline-block rounded-lg p-1 m-1 mt-3">
            qsdq
          </span>
          <span className="font-semibold">sqddfs</span>
        </div>
        <div className="flex flew-row gap-2">
          <a
            href="#"
            className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
          ></a>
          <a
            href="#"
            className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
          ></a>

          <a
            href="#"
            className="w-10 text-lg text-white font-bold bg-black inline-block rounded-full p-2 m-1 mt-3"
          ></a>
        </div>
        <div>
          <span className="text-lg text-white italic text-gray-200 inline-block rounded-lg p-1 m-1 ">
            qsddsff
          </span>
        </div>
        <div>
          <span className="text-lg text-white text-gray-200 inline-block rounded-lg p-1 m-1 mt-3">
            Overview
          </span>
          <span className="text-md text-white text-gray-200 inline-block rounded-lg p-1 m-1 mt-3 text-wrap">
            qsdsf
          </span>
        </div>
      </div>
    );
}