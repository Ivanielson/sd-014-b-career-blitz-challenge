## Documentação da API

#### Retorna todas as tasks

```http
  GET /tasks
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `null` | `null` | Retorna todas as tarefas cadastradas |

> Formato do retorno:

```
[
    {
        _id: string,
        task: string,
        createdAt: date,
        status: string,
    },
]
```

#### Cadastrar um nova task

```http
  POST /tasks
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `body`      | `object` | **Obrigatório**. O body com a task que você quer cadastrar |

> Formato do body:

```
{
    task: string
}
```

> Formato do retorno:

```
[
    {
        _id: string,
        task: string,
        createdAt: date,
        status: string,
    },
]
```

#### Atualizar uma task

```http
  PUT /tasks/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID da task que você quer atualizar |
| `body`      | `object` | **Obrigatório**. O body com pelo menos um campo que você quer atualizar |

> Formato do body:

```
{
    task: string,
    createdAt: date,
    status: string,
}
```
    - É possível passar apenas o campo que deseja alterar.

> Formato do retorno:

```
[
    {
        _id: string,
        task: string,
        createdAt: date,
        status: string,
    },
]
```

#### Remove um item

```http
  DELETE /tasks/${id}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do item que você quer remover |
