import { Outlet } from "react-router-dom";

import Nav from "../../components/layout/Nav";
import InnerLayout from "../../components/layout/InnerLayout";

function Sports(props) {


  const navData = [
    {
      key: 1,
      items:[
        {key: 1,name:"Sports Home",icon:"home"}
      ]
    },{
      key: 2,
      title: "Farourites",
      items:[
        {key: 1,name:"Football",icon:"sports_soccer"},
        {key: 2,name:"Basketball",icon:"sports_basketball"},
        {key: 3,name:"Tennis",icon:"sports_tennis"},
        {key: 4,name:"A-Z Sports",icon:"more_horiz"}
      ]
    },{
      key: 3,
      title: "Toolbox",
      items:[
        {key: 1,name:"My Bets",icon:"format_list_bulleted"},
        {key: 2,name:"Enter Booking Code",icon:"qr_code"},
        {key: 3,name:"Check Coupon",icon:"checklist"}
      ]
    }
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

export default Sports;
