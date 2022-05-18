import { resolve } from 'path';

export default function routes(app) {
  app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

   app.get('/', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });

  //TESTING COMMIT
  //https://github.com/quahzhengjie/Project4.git
}
