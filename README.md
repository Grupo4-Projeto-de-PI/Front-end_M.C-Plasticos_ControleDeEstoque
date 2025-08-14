# CONTROLE DE ESTOQUE M.C PLÁSTICOS 

Sistema de controle de estoque para a empresa M.C Plásticos

## O que fazer antes de começar a desenvolver?
Primeiramente é necessario atualizar o repositorio local para a sua versão mais recente, para isso faça este comando 

```sh
git pull
```

Caso esteja tudo atualizado, pode prosseguir com o seu desenvolvimento

## Requisitos para desenvolvimento

Antes de realizar um desenvolvimento, **você deverá criar uma branch nova**. Para isso, siga os passos abaixo:

### Verificando o estado atual do seu repositório
Antes de criar uma branch, é bom garantir que você esteja atualizado e em uma branch estável, no caso a de `prod`.:

```sh
git pull origin prod
```

### Criando uma branch nova
Para criar e já mudar para a branch nova, use:

```sh
git checkout -b nome-da-branch
```

## O `nome-da-branch` deve ser algo descritivo, por exemplo
* feature/tela-de-login
* feature/lista-de-produtos
* feature/tela-de-editar-clientes


### Subindo branch para o repositório remoto
Depois de criar a branch e começar a trabalhar, você deve subir para o repositório remoto:

```sh
git push -u origin nome-da-branch
```

## O `nome-da-branch` tem que ser o mesmo que você critou anteriormente

### Verificando em qual branch você está
A branch em que você está atualmente estará marcada com um `*`.

```sh
git branch
```

## Como Contribuir
1. Verifique se está na branch que você criou anteriormente.
2. Faça suas alterações no código.
3. Adicione as mudanças ao stage:
   ```sh
   git add .
   ```
4. Faça um commit descrevendo as mudanças:
   ```sh
   git commit -m "Descrição breve das mudanças"
   ```
5. Envie suas alterações para o repositório remoto:
   ```sh
   git push origin nome-da-branch
   ```

Agora suas alterações estão na branch que você criou! 🚀

---

## Criando um Pull Request para a branch `prod`
Após realizar suas alterações na branch que você criou, siga os passos abaixo para criar um Pull Request (PR) para a branch `prod`:

1. Acesse o repositório no GitHub.
2. Vá até a aba **Pull Requests**.
3. Clique em **New Pull Request**.
4. Selecione `SUA BRANCH` como branch de origem e `prod` como branch de destino.
5. Revise as alterações e adicione uma descrição explicando as mudanças.
6. Clique em **Create Pull Request**.
7. Aguarde a aprovação do PR e, após a revisão, informe o Lucas para o merge para `prod`.
8. Por fim exclua sua branch para não poluir o repositório

Agora suas alterações estão na branch `prod`! 🎉

### BOM DESENVOLVIMENTO PARA TODOS!!
<img src="https://i.pinimg.com/1200x/5a/55/12/5a55121663545b3d45d92db5037e5a54.jpg" alt="Minha Foto" width="200"/>

