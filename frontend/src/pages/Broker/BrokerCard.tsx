import { BsTrashFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";

type Props = {
  broker: any;
  deleteBrokerMutation: any;
};

const BrokerCard = (props: Props) => {
  const { broker, deleteBrokerMutation } = props;
  return (
    <div className="w-fit border-2 border-black p-2">
      <p>Name: {broker.firstName + " " + broker.lastName}</p>
      <p>Phone Number: {broker.phoneNumber}</p>
      <p>Email: {broker.email}</p>
      <p>Rating: {broker.rating}</p>
      <div className="flex justify-between mt-2">
        <button
          onClick={() =>
            deleteBrokerMutation.mutate({
              dataType: "broker",
              dataId: broker._id,
            })
          }
        >
          <BsTrashFill />
        </button>
        <AiFillEdit />
      </div>
    </div>
  );
};

export default BrokerCard;
