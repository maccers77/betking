import { useState, useEffect } from "react";

import { ref, onValue } from "firebase/database";

import db from "../../components/firebase/Firebase";
import EventList from "../../components/eventlist/Eventlist";
import Tabs from "../../components/ui/Tabs";
import style from "./SportsHome.module.css";
import Banners from "../../components/banners/Banners";

function SportsHome(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvents, setLoadedEvents] = useState([]);
  const [loadedHeadings, setLoadedHeadings] = useState([]);
  const popularRef = ref(db, "eventData/popular");

  useEffect(() => {
    onValue(popularRef, (snapshot) => {
      const data = snapshot.val();
      const sports = [];
      const headings = [];

      for (const key in data.sports) {
        const marketHeadings = [];
        for (const keyB2 in data.sports[key].marketHeadings) {
          const marketHeading = {
            key: keyB2,
            ...data.sports[key].marketHeadings[keyB2],
          };
          marketHeadings.push(marketHeading);
        }

        const events = [];
        for (const key2 in data.sports[key].events) {
          const markets = [];
          for (const key3 in data.sports[key].events[key2].markets) {
            const selections = [];
            for (const key4 in data.sports[key].events[key2].markets[key3]
              .selections) {
              const selection = {
                key: key4,
                ...data.sports[key].events[key2].markets[key3].selections[key4],
              };
              selections.push(selection);
            }
            selections.sort(function callback(a, b) {
              if (a.order > b.order) return 1;
              if (a.order < b.order) return -1;
              return 0;
            });
            const market = {
              key: key3,
              ...data.sports[key].events[key2].markets[key3],
            };
            market.selections = selections;
            markets.push(market);
          }
          markets.sort(function callback(a, b) {
            if (a.order > b.order) return 1;
            if (a.order < b.order) return -1;
            return 0;
          });
          const event = {
            key: key2,
            ...data.sports[key].events[key2],
          };
          event.markets = markets.slice(0, 3);
          events.push(event);
        }
        const sport = {
          key: key,
          ...data.sports[key],
        };
        sport.marketHeadings = marketHeadings.slice(0, 3);
        sport.events = events;
        sports.push(sport);
      }

      setIsLoading(false);
      setLoadedEvents(sports);
      setLoadedHeadings(headings);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    );
  }



  return (
    <>
      <article>
        <section>
          <Banners />
          <Tabs
            tabs={[{ name: "Trending" }, { name: "Today" }, { name: "Boosts" }]}
            activeTab="Trending"
          />

          <EventList
            sports={loadedEvents}
            headings={loadedHeadings}
            checkoutselections={props.checkoutselections}
          />
        </section>
      </article>
    </>
  );
}

export default SportsHome;
