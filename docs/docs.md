# Prisma

## Que hacer cuando se hace un cambio en la bbdd

Ejecutar este comando para que nos actualize el `schema.prisma`
`npx prisma introspect`

## Levantar el prisma client

`npx prisma studio --experimental`

## Obtener los datos en forma de array en vez de entidad

Cuando hago una consulta como por ejemplo esta:

```
    const projects = await this.projectSequalize.findAll({
    attributes: ['ID', 'TITLE'],
    where: {
        USER_ID: req.body.id ? req.body.id : '',
    }
    });
```

El resultado de la query es el siguiente

```
[
  PROJECT {
    dataValues: { ID: 1, TITLE: 'qwe' },
    _previousDataValues: { ID: 1, TITLE: 'qwe' },
    _changed: Set(0) {},
    _options: {
      isNewRecord: false,
      _schema: null,
      _schemaDelimiter: '',
      raw: true,
      attributes: [Array]
    },
    isNewRecord: false
  }
]
```

Ahora si queremos que solo nos devuelva los datos de la query y no la entidad entera hay que

## Editor sql especifico para SQLITE

> Este editor permite editar tablas y mas cosas que dbeaver no puede hacer

https://sqlitebrowser.org/
