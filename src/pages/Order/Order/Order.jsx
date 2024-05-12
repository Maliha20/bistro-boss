import { useState } from "react";
import orderCoverImg from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useToys from "../../../hooks/useToys";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["dolls", "cars", "figures", "board"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [toys] = useToys();

  const dolls = toys.filter((item) => item.category === "dolls");
  const cars = toys.filter((item) => item.category === "cars");
  const figures = toys.filter((item) => item.category === "figures");
  const board = toys.filter((item) => item.category === "board");

  return (
    <div>
      <Helmet>
        <title>EnchantedToyland | Order Toy</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Toy"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Dolls</Tab>
          <Tab>Cars</Tab>
          <Tab>Figures</Tab>
          <Tab>Board Games</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={dolls}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={cars}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={figures}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={board}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
