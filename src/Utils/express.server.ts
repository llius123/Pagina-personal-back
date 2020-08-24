export class ExpressServer {
  constructor(
    private express,
    private jwt,
    private bodyParser,
    private cookieParser,
    private envConstants,
    private cors
  ) {}

  public createApp() {
    this.express.use(this.bodyParser.urlencoded({ extended: false }));
    this.express.use(this.bodyParser.json());
    this.express.use(this.cookieParser());
    this.express.use(this.cors());

    return this.express;
  }

  public rutasProtegidas(req, res, next) {
    const token = req.cookies.accesToken;
    if (token) {
      this.jwt.verify(token, this.envConstants.JWT, (err, decoded) => {
        if (err) {
          return res.json({ msg: 'Token inválida' });
        } else {
          req.body.token = decoded;
          next();
        }
      });
    } else {
      res.send({
        msg: 'Token no proveída.',
      });
    }
  }
}
