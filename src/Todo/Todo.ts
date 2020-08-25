export class Todo {
  constructor(private router, private todoSequalize) {}

  getTodoById() {
    return this.router.get('/todo/:id', async (req, res) => {
      const todo = await this.todoSequalize.findAll({
        attributes: ['ID', 'TITLE', 'DONE'],
        where: {
          PROJECT_ID: req.params.id ? req.params.id : '',
        },
      });
      res.send({ todo });
    });
  }

  createTodo() {
    return this.router.post('/todo', async (req, res) => {
      const todo = await this.todoSequalize.create({
        TITLE: req.body.title,
        PROJECT_ID: req.body.project_id,
      });
      res.send({ todo });
    });
  }

  editTodo() {
    return this.router.put('/todo', async (req, res) => {
      await this.todoSequalize.update(
        {
          DONE: req.body.done,
          TITLE: req.body.title,
        },
        {
          where: {
            ID: req.body.id,
          },
        }
      );
      const todo = await this.todoSequalize.findAll({
        attributes: ['ID', 'TITLE', 'DONE'],
        where: {
          id: req.body.id,
        },
      });
      res.send({ todo });
    });
  }

  deleteTodo() {
    return this.router.delete('/todo', async (req, res) => {
      const todo = await this.todoSequalize.destroy({
        where: {
          ID: req.body.id,
        },
      });
      res.send({ todo });
    });
  }
}
