export class User {
  constructor(
    private router,
    private userSequalize,
    private envConstants,
    private jwt
  ) {}

  login() {
    return this.router.post('/login', async (req, res) => {
      const user = await this.userSequalize.findOne({
        attributes: ['ID', 'USERNAME'],
        where: {
          USERNAME: req.body.user ? req.body.user : '',
          PASSWORD: req.body.pass ? req.body.pass : '',
        },
      });
      if (user && user.dataValues) {
        var token = this.jwt.sign(user.dataValues, this.envConstants.JWT, {
          expiresIn: '30d',
        });
        res.send({ token: token, user: user.dataValues });
      } else {
        res.send({ msg: 'Error' });
      }
    });
  }
}
