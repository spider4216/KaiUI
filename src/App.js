import React from 'react';
import Header from './components/Header/Header';
import SoftKey from './components/SoftKey/SoftKey';
import TabView from './views/TabView/TabView';
import ListView from './views/ListView/ListView';
import CheckboxListItem from './components/CheckboxListItem/CheckboxListItem';
import IconListItem from './components/IconListItem/IconListItem';
import TextListItem from './components/TextListItem/TextListItem';
import BodyTextListItem from './components/BodyTextListItem/BodyTextListItem';
import ArrowListItem from './components/ArrowListItem/ArrowListItem';
import RadioButtonListItem from './components/RadioButtonListItem/RadioButtonListItem';
import Separator from './components/Separator/Separator';
import ProgressBar from './components/ProgressBar/ProgressBar';
import './App.scss';
import colors from './theme/colors.scss';

function App() {
  const leftCallback = () => {
    console.log('left was pressed');
  };
  const handleInputChange = newVal => {
    console.log('new input value', newVal);
  };

  return (
    <div className="App">
      <Header text="KaiUI" backgroundColor={colors.headerPurple} />
      <div className="content">
        <TabView tabLabels={['CB Tab', 'Icon Tab', 'Txt Tab', 'Misc Tab']}>
          <ListView>
            <CheckboxListItem
              primary="Hello primary text"
              secondary="seconday text"
              initCheckboxVal={false}
              onInputChange={() => {}}
              checkboxSide="left"
            />
            <Separator separatorText={'hello, separator here'} />
            <CheckboxListItem
              primary="Another item with more text"
              secondary="secondary text at the bottom"
              initCheckboxVal={true}
              onInputChange={() => {}}
              checkboxSide="right"
              focusColor={colors.carrotOrange}
            />
            <RadioButtonListItem
              primary="Radio button"
              secondary="Secondary text"
              initButtonVal={false}
              onInputChange={handleInputChange}
              buttonSide="right"
            />
            <RadioButtonListItem
              primary="Another radio button"
              initButtonVal={true}
              onInputChange={handleInputChange}
              buttonSide="right"
            />
          </ListView>
          <ListView>
            <IconListItem
              primary="Hello primary text"
              secondary="seconday text"
              icon="kai-icon-favorite-off"
            />
            <IconListItem
              primary="Another item with more text"
              secondary="seconday text at the bottom"
              icon="kai-icon-favorite-on"
            />
            <Separator separatorText={'Another separator'} />
            <IconListItem
              primary="Item without secondary"
              icon="kai-icon-wifi"
            />
            <IconListItem primary="Last item" icon="kai-icon-camera" />
          </ListView>
          <ListView>
            <ProgressBar
              header={'Downloading...'}
              percentage={80}
              type={'download'}
            />
            <ProgressBar
              header={'Downloading...'}
              percentage={30}
              type={'download'}
            />
            <TextListItem
              primary="Hello primary text"
              secondary="secondary text"
              tertiary="tertiary text"
              focusColor={colors.gold}
            />
            <ProgressBar
              header={'Buffering...'}
              percentage={30}
              type={'buffer'}
            />
            <ProgressBar
              header={'Buffering...'}
              percentage={70}
              type={'buffer'}
            />
            <TextListItem
              primary="Hello primary text"
              secondary="No tertiary here"
            />
            <TextListItem primary="Just primary" />
          </ListView>
          <ListView>
            <BodyTextListItem
              header="Header text"
              body="body text, can support a whole lot of text"
            />
            <BodyTextListItem header="Header text, but no body" />
            <ArrowListItem primary="Primary text" secondary="Secondary text" />
            <ArrowListItem primary="Just me and arrow" />
          </ListView>
        </TabView>
      </div>

      <footer>
        <SoftKey
          leftText="left"
          centerText="select"
          rightText="right"
          leftCallback={leftCallback}
        />
      </footer>
    </div>
  );
}

export default App;
