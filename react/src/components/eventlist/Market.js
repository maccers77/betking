import OddsButton from "../ui/OddsButton";

function Market(props) {
    const selections = [];

    for (const key in props.market.selections) {
        const selection = {
        key: key,
        ...props.market.selections[key],
        };

        selections.push(selection);
    }
    selections.map((selection) => {
      selection['marketName'] = props.market.marketName;
      selection['marketId'] = props.market.marketId;
      selection['eventDate'] = props.market.eventDate;
      selection['eventName'] = props.market.eventName;
      selection['eventId'] = props.market.eventId;
    });
    
    return <div>
        {selections.map((selection) => (
          
          <OddsButton key={selection.selectionId} selection={selection} />
        ))}
    </div>
}

export default Market;