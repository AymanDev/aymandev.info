import { createBrowserHistory, Path } from 'history';

namespace History {
    export const history = createBrowserHistory();
    export const push = (path: Path) => () => history.push(path);
    export const back = () => () => history.goBack();
}

export default History;
