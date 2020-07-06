import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { searchOutline, chatbubbleOutline, listOutline, timerOutline, personOutline } from 'ionicons/icons';

import Search from './pages/Tabs/Search';
import Tab2 from './pages/Tabs/Tab2';
import Tab3 from './pages/Tabs/Tab3';

import listItem from './pages/Search/listItem';
import Detail from './pages/Detail/detail';
import Chatting from './pages/Chatting/chatting';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Theme global */
import './theme/theme.scss';

const TabsRoot: React.FC = () => {
  return(
    <IonTabs>
      <IonRouterOutlet>
        <Route path="/tabs/home" component={Search} />
        <Route path="/tabs/chat" component={Tab2} />
        <Route path="/tabs/category" component={Tab3} />
      </IonRouterOutlet>
      <IonTabBar slot="bottom" id="appTabBar">
        <IonTabButton tab="home" href="/tabs/home">
          <IonIcon icon={searchOutline} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
        <IonTabButton tab="chat" href="/tabs/chat">
          <IonIcon icon={chatbubbleOutline} />
          <IonLabel>Chat</IonLabel>
        </IonTabButton>
        <IonTabButton tab="category" href="/tabs/category">
          <IonIcon icon={listOutline} />
          <IonLabel>Category</IonLabel>
        </IonTabButton>
        <IonTabButton tab="history" href="/tabs/history">
          <IonIcon icon={timerOutline} />
          <IonLabel>History</IonLabel>
        </IonTabButton>
        <IonTabButton tab="profile" href="/tabs/profile">
          <IonIcon icon={personOutline} />
          <IonLabel>Profile</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  )
}

const PagesRoot: React.FC = () => {  
  return(
    <IonRouterOutlet>
      <Route path="/find/list-item" component={listItem} />
      <Route path="/find/detail" component={Detail} />
      <Route path="/find/chatting" component={Chatting} />
    </IonRouterOutlet>    
  )
}

const App: React.FC = () => (
  <IonApp>    
    <IonReactRouter>     
      <Route exact path="/" render={() => <Redirect to="/tabs/home" />} />
      <Route path="/tabs" component={TabsRoot} />
      <Route path="/find" component={PagesRoot} />
    </IonReactRouter>
  </IonApp>
);



export default App;
