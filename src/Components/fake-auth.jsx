const fakeAuth = {
  isAuthenticated: false,
  username: "",
  authenticate(uname) {
    fakeAuth.isAuthenticated = true;
    fakeAuth.username = uname;
  },
  signout() {
    fakeAuth.isAuthenticated = false;
    fakeAuth.username = "";
  }
};

export default fakeAuth;
