import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveSharp, bookmarkSharp, heartSharp, homeSharp, personAddSharp, personSharp, settingsSharp } from 'ionicons/icons';
import './Menu.css';
import { userInfo } from 'os';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  
  {
    title: 'Login',
    url: '/page/Login',
    iosIcon: personSharp,
    mdIcon: personSharp
  },
  {
    title: 'Signup',
    url: '/page/Signup',
    iosIcon: personAddSharp,
    mdIcon: personAddSharp
  },
  {
    title: 'Home',
    url: '/page/Home',
    iosIcon: homeSharp,
    mdIcon: homeSharp
  },
  {
    title: 'Favorites',
    url: '/page/Favorites',
    iosIcon: heartSharp,
    mdIcon: heartSharp
  },
  {
    title: 'Settings',
    url: '/page/Settings',
    iosIcon: settingsSharp,
    mdIcon: settingsSharp
  }
];

const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>user</IonListHeader>
          <IonNote>hi@ionicframework.com </IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon aria-hidden="true" slot="start" icon={bookmarkSharp} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
