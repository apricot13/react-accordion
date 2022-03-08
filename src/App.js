import { accordionData, accordionDataReadMore, accordionDataExpanded, accordionDataWithSummary, acordionDataWithComponents, acordionDataSingleAccordion, acordionDataLongTitleAccordion } from './components/Accordion/Accordion.data';
import Accordion from './components/Accordion/Accordion';
import './App.css';
import { Example } from './Example/Example';

function App() {
  return (
    <div className="App">
      <h1>Simple accordion</h1>
      <Example>
        <Accordion {...accordionData} />
      </Example>
      <br />
      <br />
      <br />
      <h1>Accordion with read more</h1>
      <Example>
        <Accordion {...accordionDataReadMore} />
      </Example>
      <br />
      <br />
      <br />
      <h1>Accordion expanded</h1>
      <Example>
        <Accordion {...accordionDataExpanded} />
      </Example>
      <br />
      <br />
      <br />
      <h1>Accordion with a summary</h1>
      <Example>
        <Accordion {...accordionDataWithSummary} />
      </Example>
      <br />
      <br />
      <br />
      <h1>Accordion with other JSX</h1>
      <Example>
        <Accordion {...acordionDataWithComponents} />
      </Example>
      <br />
      <br />
      <br />
      <h1>Accordion single</h1>
      <Example>
        <Accordion {...acordionDataSingleAccordion} />
      </Example>
      <br />
      <br />
      <br />
      <h1>Accordion with long title</h1>
      <Example>
        <Accordion {...acordionDataLongTitleAccordion} />
      </Example>
    </div>
  );
}

export default App;
