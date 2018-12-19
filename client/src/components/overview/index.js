import React from 'react';
import { inject, observer } from 'mobx-react';
@inject('pipeline')
@observer
class Overview extends React.Component {
  render() {
    return <div>{intl.get('sideNav.overview')}</div>;
  }
}

export default Overview;
