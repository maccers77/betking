import { Outlet } from "react-router-dom";

import InnerLayout from "../../components/layout/InnerLayout";
import Nav from "../../components/layout/Nav";

function Virtuals() {
  const navData = [
    {
      key: 1,
      items: [{ key: 1, name: "Virtuals Home", icon: "home" }],
    },
    {
      key: 2,
      title: "Instant Play",
      items: [
        { key: 1, name: "King's League", icon: "sports_soccer" },
        { key: 2, name: "King's Liga", icon: "sports_soccer" },
      ],
    },
    {
      key: 3,
      title: "Scheduled Games",
      items: [
        { key: 1, name: "King's League", icon: "sports_soccer" },
        { key: 2, name: "King's Liga", icon: "sports_soccer" },
        { key: 3, name: "King's Italiano", icon: "sports_soccer" },
        { key: 4, name: "King's Bundliga", icon: "sports_soccer" },
      ],
    },
    {
      key: 4,
      title: "More Games",
      items: [
        { key: 1, name: "Virtual Greyhounds", icon: "sports_soccer" },
        { key: 2, name: "Spin 2 Win", icon: "sports_soccer" },
        { key: 3, name: "Keno", icon: "sports_soccer" },
        { key: 4, name: "Colour Colour", icon: "sports_soccer" },
      ],
    },
  ];

  return (
    <>
      <Nav navData={navData} />
      <InnerLayout>
        <Outlet />
      </InnerLayout>
    </>
  );
}

export default Virtuals;
