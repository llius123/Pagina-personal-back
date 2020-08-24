export class Project {
  constructor(private router, private projectSequalize) {}

  getProjectsById() {
    return this.router.get('/projects', async (req, res) => {
      const projects = await this.projectSequalize.findAll({
        attributes: ['ID', 'TITLE'],
        where: {
          USER_ID: req.body.id ? req.body.id : '',
        },
      });
      res.send({ projects });
    });
  }

  createProjects() {
    return this.router.post('/projects', async (req, res) => {
      const projects = await this.projectSequalize.create({
        TITLE: req.body.title,
        USER_ID: req.body.user_id,
      });
      res.send({ projects });
    });
  }

  editProjects() {
    return this.router.put('/projects', async (req, res) => {
      await this.projectSequalize.update(
        {
          TITLE: req.body.title,
        },
        {
          where: {
            ID: req.body.id,
          },
        }
      );
      const projects = await this.projectSequalize.findAll({
        attributes: ['ID', 'TITLE'],
        where: {
          USER_ID: req.body.id,
        },
      });
      res.send({ projects });
    });
  }

  deleteProjects() {
    return this.router.delete('/projects', async (req, res) => {
      const projects = await this.projectSequalize.destroy({
        where: {
          ID: req.body.id,
        },
      });
      res.send({ projects });
    });
  }
}
