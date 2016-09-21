import * as React from 'react';
import * as dom from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

dom.render(
    (
        <div>
            <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}> </Router>
        </div>
    ), document.getElementById('app'));
