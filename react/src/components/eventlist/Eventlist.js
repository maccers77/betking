import Event from "./Event";

import style from "./Eventlist.module.css";
import Tabs from "../ui/Tabs";
import Button from "../ui/Button";
import MultiRangeSlider from "../ui/MultiRangeSlider";

function EventList(props) {
  return (
    <>
      <div className={style.filters}>
        <Tabs
          tabs={[
            { name: "Football", icon: "sports_soccer" },
            { name: "Basketball", icon: "sports_basketball" },
            { name: "Tennis", icon: "sports_tennis" },
          ]}
          activeTab="Football"
          variant="grouped"
        />
        <div className={style.lessThan}>
          <MultiRangeSlider min={1} max={15} />
        </div>
        <Button variant="quaternary" icon="filter_list">
          Filters
        </Button>
      </div>

      {props.sports.map((sport) => (
        <div key={sport.sportId}>
          <div className={style.eventList}>
            <div className={style.event}>
              <div className={style.details}>
                <div className={style.name}>
                  <div className={style.stats}></div>
                  <div className={style.details}></div>
                </div>
                <div className={style.markets}>
                  {sport.marketHeadings.map((heading) => (
                    <div
                      key={heading.marketHeadingId}
                      data-num={"X" + heading.marketSelectionHeadings.length}
                    >
                      {heading.marketHeadingName}
                    </div>
                  ))}
                </div>
                <div className={style.icon}></div>
              </div>
            </div>
            <div className={style.event}>
              <div className={style.details}>
                <div className={style.name}>
                  <div className={style.stats}></div>
                  <div className={style.details}></div>
                </div>
                <div className={style.markets}>
                  {sport.marketHeadings.map((heading) => (
                    <div
                      key={heading.marketHeadingId}
                      data-num={"X" + heading.marketSelectionHeadings.length}
                      className={style.selectionHeadings}
                    >
                      {heading.marketSelectionHeadings.map(
                        (selectionHeading) => (
                          <div key={selectionHeading.selectionHeadingId}>
                            {selectionHeading.selectionHeadingName}
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
                <div className={style.icon}></div>
              </div>
            </div>

            {sport.events.map((event) => (
              <Event key={event.eventId} event={event} />
            ))}
          </div>
        </div>
      ))}
      {/* 



      <div className={style.event}>
        <div className={style.details}>
          <div className={style.name}>
            <div className={style.stats}>
            </div>
            <div className={style.details}>
            </div>
          </div>
          <div className={style.markets}>
            {props.headings.map((heading) => (
              <div key={heading.key} data-num={heading.len}>
                {heading.marketName}
              </div>
            ))}
          </div>
          <div className={style.icon}>
          </div>
        </div>
      </div>

      <div className={style.event}>
        <div className={style.details}>
          <div className={style.name}>
            <div className={style.stats}>
            </div>
            <div className={style.details}>
            </div>
          </div>
          <div className={style.markets}>
            {props.headings.map((heading) => (
              <div key={heading.key} data-num={heading.len} className={style.selectionHeadings}>
                {heading.selectionHeadings.map((selectionHeading) => (
                  <div key={selectionHeading.key}>{selectionHeading.selectionName}</div>
                ))}
              </div>
            ))}
          </div>
          <div className={style.icon}>
          </div>
        </div>
      </div>

      {props.events.map((event) => (
        <Event key={event.eventId} event={event} />
      ))}
    </div> */}
    </>
  );
}

export default EventList;
