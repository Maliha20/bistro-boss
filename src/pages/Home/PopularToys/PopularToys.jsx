import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useToys from "../../../hooks/useToys";
import ToyItem from "../../Shared/ToyItem/ToyItem";


const PopularToys = () => {
    const [toys] = useToys();
    const popular = toys.filter(item => item.category === 'popular');
    
    return (
        <section className="mb-12">
            <SectionTitle
                heading="From Our Collection"
                subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <ToyItem
                        key={item._id}
                        item={item}
                    ></ToyItem>)
                }
            </div>
            <Link to="/toys" className="btn btn-outline border-0 border-b-4 mt-4">View Full Collection</Link>
        </section>
    );
};

export default PopularToys;