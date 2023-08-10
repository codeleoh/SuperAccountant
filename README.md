# SuperAccountant

1. A função ´contar()´ é acionada quando o usuário interage com a página.

2. Ela obtém três elementos do documento HTML: o valor de início, o valor final e o passo da contagem.

3. Verifica se algum dos campos está vazio. Se estiverem vazios, exibe uma mensagem indicando que a contagem não pode ser realizada.

4. Caso contrário, a função começa a criar a contagem.

5. Os valores de início, fim e passo são convertidos em números usando Number().

6. Se o valor do passo for menor ou igual a zero, um alerta é exibido, corrigindo o passo para 1.

7. Dependendo se o valor de início é menor que o valor final, a função utiliza um loop for para criar a contagem de forma crescente, adicionando os números ao resultado.

8. Se o valor de início for maior que o valor final, a função cria a contagem de forma decrescente.

9. Em ambos os casos, a função acrescenta emojis ao resultado para dar um toque visualmente interessante.

10. No final, o resultado é exibido na página, indicando que a contagem foi concluída com sucesso.
