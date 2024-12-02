import { IoCartOutline } from "react-icons/io5";

export function CardButton() {
  return (
    <button className="card-button">
      <div>
        <IoCartOutline />
        <span>Add to card</span>
      </div>
    </button>
  );
}
