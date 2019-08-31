/* eslint-disable prettier/prettier */
export const fakeAuth = () => {
  const users = [
    {
      id: 1,
      username: 'test',
      password: 'test',
      firstName: 'Test',
      lastName: 'User',
    },
  ];

  const realFetch = window.fetch;
  window.fetch = (url, opts) => new Promise((resolve, reject) => {
    // wrap in timeout to simulate server api call
    setTimeout(() => {
      // eslint-disable-next-line prettier/prettier
      // authenticate
      if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
        // get parameters from post request
        const params = JSON.parse(opts.body);

        // find if any user matches login credentials
        const filteredUsers = users.filter(user => (
          user.username === params.username &&
              user.password === params.password
        ));

        if (filteredUsers.length) {
          // if login details are valid return user details
          const user = filteredUsers[0];
          const responseJson = {
            id: user.id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
          };
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(responseJson)),
          });
        } else {
          // else return error
          // eslint-disable-next-line prefer-promise-reject-errors
          reject('Username or password is incorrect');
        }

        return;
      }

      // get users
      if (url.endsWith('/users') && opts.method === 'GET') {
        // check for fake auth token in header and return users if valid, this security
        // is implemented server side in a real application
        if (
          opts.headers &&
            opts.headers.Authorization === `Basic ${window.btoa('test:test')}`
        ) {
          resolve({
            ok: true,
            text: () => Promise.resolve(JSON.stringify(users)),
          });
        } else {
          // return 401 not authorised if token is null or invalid
          resolve({ status: 401, text: () => Promise.resolve() });
        }
        return;
      }
      // pass through any requests not handled above
      realFetch(url, opts).then(response => resolve(response));
    }, 500);
  });
}
