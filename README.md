1 - Crie uma API Rest em Nest.js que realize as operações de CRUD para as seguintes
entidades:
Usuário
- nome
- sobrenome
- email
- senha

Cursos
- nome
- valor
- duração

Crie rotas para cadastrar, buscar, buscar por ID, atualizar e remover cada uma das entidades
acima.

2 - Configure sua aplicação para que as rotas de cursos só sejam acessadas através de um
usuário autenticado e de seu token JWT.
As únicas rotas de usuário que podem ser acessadas sem JWT são a de cadastro e a de login
(Será feita na questão 3)

3 - Crie uma rota de login para autenticar o usuário. A senha do usuário deve ser salva
criptografada e não pode ser listada por nenhuma rota.

4 - Refatore o seu schema de Cursos e Usuários para adicionar os class validators

5- Crie Exceptions para sua rotas de cursos e usuários, onde pelo menos uma exception deve
ser criada por você através de uma classe personalizada.

6 - Crie um middleware para interceptar a requisição de POST na hora de salvar um curso no
banco de dados. Através desse middleware pegue o request passado na requisição e altere o
campo valor, multiplique o campo valor do curso por 0.5.

7 - Monte o diagrama de classes da sua aplicação.