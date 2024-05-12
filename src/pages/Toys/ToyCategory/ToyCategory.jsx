import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import ToyItem from "../../Shared/ToyItem/ToyItem";

const ToyCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <ToyItem key={item._id} item={item}></ToyItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default ToyCategory;
