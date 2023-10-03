import React from "react";
import "./SectionCardsStyle.css";
import Card from "../../Components/CardSide/CardSide";

import PhoneIcon from "../../Assets/Images/phoneIcon.png";
import RewardIcon from "../../Assets/Images/rewardIcon.png";
import DiscountIcon from "../../Assets/Images/discountIcon.png";
import MoneyIcon from "../../Assets/Images/moneyBagIcon.png";
import SecurityIcon from "../../Assets/Images/securityIcon.png";

const SectionCards = () => {
  return (
    <div className="SectionCards">
      <h1 className="SectionCards__title">Some of our benefits</h1>

      <div className="Cards">
        <Card title={"Security"} img={SecurityIcon} />
        <Card title={"Flexible Payment Options"} img={MoneyIcon} />
        <Card title={"Exclusive Discounts"} img={DiscountIcon} />
        <Card title={"Digital Management"} img={PhoneIcon} />
        <Card title={"Rewards"} img={RewardIcon} />
      </div>
    </div>
  );
};

export default SectionCards;
