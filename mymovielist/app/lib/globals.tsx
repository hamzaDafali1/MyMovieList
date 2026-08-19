import { UserCircleIcon, PhotoIcon } from "@heroicons/react/24/outline";

export var CardImgLink = "https://image.tmdb.org/t/p/w220_and_h330_face/";
export var InfoCardImgLink =
  "https://media.themoviedb.org/t/p/w300_and_h450_face/";
export var BackdropImgLink =
  "https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces";
export var CastActorImgLink =
  "https://media.themoviedb.org/t/p/w138_and_h175_face/";

export var PersonNotFound = (
  <div className="w-[150] h-[190] flex flex-col items-center justify-center border-b-1">
    <UserCircleIcon className="w-1/2" />
  </div>
);

export var PosterNotFound = (
  <div className="w-[130] h-[195] flex flex-col items-center bg-gray-400 justify-center border-1">
    <PhotoIcon className="w-1/2" />
  </div>
);