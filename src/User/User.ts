export class User {
  constructor(
    private router,
    private prisma,
    private envConstants,
    private jwt
  ) {}

  login() {
    return this.router.post('/login', async (req, res) => {
      const users = await this.prisma.uSER.findMany({
        where: { USERNAME: req.body.user, PASSWORD: req.body.pass },
        take: 1,
      });
      if (users) {
        var token = this.jwt.sign(users[0], this.envConstants.JWT, {
          expiresIn: '30d',
        });
        res.send(token);
      } else {
        res.send({ msg: 'Error' });
      }
    });
  }
}
