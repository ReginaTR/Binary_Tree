# Árvore Binária em TypeScript

Implementação de uma árvore binária genérica em TypeScript com operações básicas.

## 🚀 Funcionalidades
* Estrutura baseada em nós com filhos left (esquerda) e right (direita).
* Travessia recursiva para contagem de nós e cálculo de altura
* Detecção de folhas (métodos isLeaf e isNotLeaf).
* Inserção dinâmica de nós (addLeft e addRight).


## 🛠️ Técnicas Utilizadas

* Programação Orientada a Objetos (POO)
* Encapsulamento via classe BinaryTree<T>.
* Tipagem genérica (<T>) para armazenar valores flexíveis.
* Recursão
* Operador Nullish Coalescing (??)
* Travessia em Árvore


count(): Calcula o total de nós de forma recursiva.

heigth(): Calcula a altura da árvore (caminho mais longo da raiz até uma folha). 

isLeaf() verifica se um nó não tem filhos.

isNotLeaf() inverte a lógica para melhor legibilidade.