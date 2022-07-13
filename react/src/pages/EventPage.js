import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import OddsButton from "../components/ui/OddsButton";
import Moment from "moment";

import style from "./EventPage.module.css";
import TextField from "../components/ui/TextField";
import Tabs from "../components/ui/Tabs";
import Breadcrumb from "../components/ui/Breadcrumb";
import Nav from "../components/layout/Nav";
import InnerLayout from "../components/layout/InnerLayout";

function EventPage(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvent, setLoadedEvent] = useState([]);
  const params = useParams();

  function formatDate(dt) {
    return Moment(dt).format("Do MMM HH:mm");
  }

  useEffect(() => {
    fetch("/getEvent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ eventId: params.eventId }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setLoadedEvent(data);
      });
  }, [params]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <>
      <Nav />
      <InnerLayout>
        <div className={style.eventContainer}>
          <Breadcrumb />
          <div className={style.event}>
            <div className={style.eventHeader}>
              <div className={style.date}>
                {formatDate(loadedEvent.AM[0].IT[0].ID)}
                {" - "}
                {loadedEvent.AM[0].IT[0].TN}
              </div>
              <div className={style.teams}>
                <div className={`${style.team} ${style.team1}`}>
                  {loadedEvent.AM[0].IT[0].participant1}
                </div>
                {" v "}
                <div className={`${style.team} ${style.team1}`}>
                  {loadedEvent.AM[0].IT[0].participant2}
                </div>
              </div>
            </div>
            <div className={style.marketGroups}>
              <Tabs
                tabs={[
                  { name: "Popular" },
                  { name: "Goals" },
                  { name: "Players" },
                  { name: "BetBuilder", new: true },
                ]}
                activeTab="Popular"
              />

              <div className="marketFilter">
                <TextField
                  icon="search"
                  label="Find Market"
                  placeholder="Find Market"
                  variant="small"
                />
              </div>
            </div>

            <div className={style.markets}>
              {loadedEvent.AM[0].IT[0].OC.map((market) => (
                <div key={market.key} className={style.market}>
                  <div className={style.marketHeader}>{market.OT.ON}</div>
                  <div className={style.selections}>
                    {market.MO.map((selection) => (
                      <div
                        key={selection.selectionId}
                        className={style.selectionContainer}
                      >
                        {selection.OA.ON}
                        <OddsButton key={selection.OI} selection={selection} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </InnerLayout>
    </>
  );
}

export default EventPage;
