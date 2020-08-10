import { createApp } from './express.server';
import { envConstants } from './env.constants';
import { User } from './User/User';

const app = createApp();

// User
app.use('/user', User);

app.listen(envConstants.PORT, async () => {
  console.log(`Server ready at http://localhost:${envConstants.PORT}/api`);
});
