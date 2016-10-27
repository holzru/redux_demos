import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Detail from './components/detail';
import BlogIndex from './components/blog/index';
import BlogDetail from './components/blog/blog_detail';
import WeatherIndex from './components/weather/index';
import YoutubeIndex from './components/youtube_player/index';
import App from './components/app';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Detail} />
    <Route path="blog" component={BlogIndex} />
    <Route path="blog/:id" component={BlogDetail} />
    <Route path="weather" component={WeatherIndex} />
    <Route path="youtube" component={YoutubeIndex} />
  </Route>
);
