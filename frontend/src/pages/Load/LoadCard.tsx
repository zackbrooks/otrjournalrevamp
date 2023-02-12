import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import LoadModal from "./LoadModal";

type Props = {
  load: any;
  deleteLoadMutation: any;
  updateLoadMutation: any;
};

const LoadCard = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const { load, deleteLoadMutation, updateLoadMutation } = props;
  console.log("LOAD", load);
  return (
    <>
      <div
        className="w-60 h-36 border-2 border-black p-2 rounded-md hover:scale-125 transition-transform hover:shadow-md bg-zinc-200/95 hover:bg-zinc-900 hover:text-zinc-200"
        onClick={() => setShowModal(true)}
      >
        <p>Origin: {load.originName}</p>
        <p>Destination: {load.destinationName}</p>
        <p>Email: {load.originWindow}</p>
        <p>Rating: {load.rating}</p>
        <div className="flex justify-between mt-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteLoadMutation.mutate({
                dataType: "load",
                dataId: load._id,
              });
            }}
          >
            <BsTrashFill />
          </button>
          <AiFillEdit />
        </div>
      </div>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative md:w-auto my-6 mx-auto md:max-w-3xl w-[90vw]">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-200/100 outline-none focus:outline-none pb-4">
                <div className="flex items-start justify-between p-5 pb-0 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Load Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl ">
                      X
                    </span>
                  </button>
                </div>
                <div className="relative p-6 pb-0 flex-auto pt-0">
                  <LoadModal
                    updateLoadMutation={updateLoadMutation}
                    load={load}
                    editMode={editMode}
                  />
                </div>
                <div className="flex items-center justify-around border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="hover:bg-zinc-700 bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  mt-2"
                    type="submit"
                    onClick={() => setEditMode(true)}
                  >
                    Edit Info
                  </button>
                  <button
                    className="hover:bg-zinc-700 bg-zinc-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
                    type="submit"
                    onClick={() => setShowModal(false)}
                  >
                    Close Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default LoadCard;
