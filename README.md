# melon
A GitHub action to check current repo was expected

## Functional

Skip execute the command if current repository was the unexpected repository

## How to use
Config `expected-repo` to test `git remote -v` and if `true`, execute  command

```
- name: Repo checker
  uses: VegetableGarden/melon@0.0.1
  with:
      # your expected repo to run customized command
      expected-repo: melon
      # eg. git status
      command: echo hello world
```

![melon](./melon.jpg)
