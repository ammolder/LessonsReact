import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchBDogByBreed } from './Dog/api';

import { ErrorMessages } from './constants';

// import { ToastContainer } from 'react-toastify';
// import { Clock } from './Clock/Clock';
// import { LoginForm } from './LoginForm/LoginForm';
// import { PaymentWidget } from './PaymentWidget/PaymentWidget';
// import { Tabs } from './Tabs/Tabs';
// import tabs from './data/tabs.json';
// import { IconButton } from './IconButton/IconButton';
// import videos from './data/videos.json';
// import { VideoList } from './VideoList/VideoList';
// import { Player } from './Player/Player';
// import { Reader } from './Reader/Reader';
// import publication from './data/publication.json';
// import { PokemonForm } from './Pokemon/PokemonForm';
// import { PokemonInfo } from './Pokemon/PokemonInfo';
// import { BreedSelect } from './Dog/BreedSelect';
// import { Dog } from './Dog/Dog';
// import PacmanLoader from 'react-spinners/ClipLoader';
// import { DogSkeleton } from './Dog/DogSkeleton';
// import { ErrorMessage } from './Dog/ErrorMessage';
import { Layout } from './Dog/Layout';
// import { Counter } from './Couter/Counter';
// import { Friends } from './Friends/Friends';
// import { LoginForm } from './ContextLoginForm/LoginForm';
import { LayoutDashBoard } from './DashBoard/LayoutDashBoard';
// import { HTTPReqAbort } from './HTTPReqAbort/HTTPReqAbort';

export class App extends Component {
  state = {
    selectedVideo: null,
    pokemonName: '',
    dog: null,
    error: null,
    isLoadingDog: false,
  };

  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  selectBreed = async breedId => {
    try {
      this.setState({ isLoadingDog: true });

      const dog = await fetchBDogByBreed(breedId);
      this.setState({ dog });
    } catch {
      this.setState({ error: ErrorMessages.fetchDog });
    } finally {
      this.setState({ isLoadingDog: false });
    }
  };

  render() {
    // const { dog, error, isLoadingDog } = this.state;
    return (
      <Layout>
        {/* <LoginForm /> */}
        {/* <PaymentWidget /> */}
        {/* <Clock /> */}
        {/* <Tabs items={tabs} /> */}
        {/* <IconButton /> */}
        {/* <VideoList videos={videos} onSelect={this.selectVideo} />
        <Player url={this.state.selectedVideo} /> */}
        {/* <Reader items={publication} /> */}
        {/* <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <ToastContainer autoClose={3000} /> */}
        {/* <BreedSelect onSelect={this.selectBreed} /> */}
        {/* АЛЬТЕРНАТИВА СКІЛЕТОЕУ - LOADER!!!
         <PacmanLoader
          color="rgba(113, 45, 81, 0.75)"
          loading={isLoadingDog}
          margin={2}
          size={20}
          speedMultiplier={1}
        /> */}
        {/* {dog && isLoadingDog && <DogSkeleton />}
        {error && <div>{ErrorMessage}</div>}
        {dog && !isLoadingDog && <Dog dog={dog} />} */}
        {/* <HTTPReqAbort /> */}
        {/* <Counter /> */}
        {/* <Friends /> */}
        {/* <LoginForm /> */}
        <Routes>
          <Route path="/" element={<LayoutDashBoard />}></Route>
        </Routes>
      </Layout>
    );
  }
}
