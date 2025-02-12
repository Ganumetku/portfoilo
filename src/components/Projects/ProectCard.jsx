import React from 'react';
import { Link } from 'react-router-dom';
import appnacollage from "../../../public/appnacollage.jpg";
import VideoCalling from "../../../public/VideoCalling.jpg";
import Elearning from "../../../public/Elearning.jpg";
import Zerodhaclone from "../../../public/Zerodhaclone.jpg";
import Githubeclone from "../../../public/Githubeclone.jpg";


const ProectCard = () => {
  return (
    <div className='flex flex-wrap gap-6 justify-center'>
      {/* First Card */}
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 lg:w-96 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <figure className="px-10 pt-10">
          <img
            src={appnacollage}
            alt="Appna Collage"
            className="rounded-xl h-40 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-red-600 text-lg font-semibold">Appna Collage</h2>
          <p className="text-sm">Try To Clone Appna Collage Site But Not Responsive</p>
          <div className="card-actions mt-4">
            <Link to="https://apancollage.vercel.app/" target="_blank">
              <button className="btn btn-primary">Preview</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 lg:w-96 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <figure className="px-10 pt-10">
          <img
            src={VideoCalling}
            alt="Video Calling"
            className="rounded-xl h-40 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-green-600 text-lg font-semibold">Video Call Site</h2>
          <p className="text-sm">Try To Make Video Call Site With Guest Mode But Not Responsive</p>
          <div className="card-actions mt-4">
            <Link to="https://backendzoom.vercel.app/" target="_blank">
              <button className="btn btn-primary">Preview</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 lg:w-96 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <figure className="px-10 pt-10">
          <img
            src={Elearning}
            alt="E-Learning"
            className="rounded-xl h-40 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue-600 text-lg font-semibold">E-Learning</h2>
          <p className="text-sm">Try To Make E-Learning Website</p>
          <div className="card-actions mt-4">
            <Link to="https://e-learning-pi-vert.vercel.app/" target="_blank">
              <button className="btn btn-primary">Preview</button>
            </Link>
          </div>
        </div>
      </div>

      {/* second Line div */}

      <div className='flex flex-wrap gap-6 justify-center mb-6'>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 lg:w-96 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <figure className="px-10 pt-10">
          <img
            src={Zerodhaclone}
            alt="E-Learning"
            className="rounded-xl h-40 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-yellow-400 text-lg font-semibold">Zerodha Clone</h2>
          <p className="text-sm">Try To Clone Zerodha Website</p>
          <div className="card-actions mt-4">
            <Link to="https://zirodhafrontante.vercel.app/" target="_blank">
              <button className="btn btn-primary">Preview</button>
            </Link>
          </div>
        </div>
      </div>

{/* second githuv */}
<div className="card bg-base-100 w-full sm:w-80 md:w-96 lg:w-96 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <figure className="px-10 pt-10">
          <img
            src={Githubeclone}
            alt="Githube"
            className="rounded-xl h-40 w-full object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-pink-600 text-lg font-semibold">GitHub Clone</h2>
          <p className="text-sm">Try To Clone GitHub Website Using Mern Stack</p>
          <div className="card-actions mt-4">
            <Link to="" target="_blank">
              <button className="btn btn-primary">Comming Soon</button>
            </Link>
          </div>
        </div>
      </div>

      {/* not */}
      </div><div className="mt-6">
        <Link to="/">
          <button className="btn btn-secondary">Back to Home</button>
        </Link>
      </div>

    </div>
  );
}

export default ProectCard;
