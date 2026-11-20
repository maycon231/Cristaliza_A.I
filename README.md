# Painel de Cristalização – Injeção de Semente

Painel web para apoio à operação de cozimento de açúcar em cozedor a vácuo: cálculo de composição e de Brix, cronômetros de semeadura e lavagem, registro de bateladas e comparação mensal.

Desenvolvido por **Maycon Willian de Lima Santos**.

---

## Sobre

O projeto é um arquivo único (`index.html`), feito com HTML, CSS e JavaScript puros, sem dependências externas. Ele roda no navegador, inclusive offline.

Com ele, o operador ou o supervisor:

- calcula a composição de massa a partir das análises de xarope e de mel e dos set points;
- obtém o Brix de injeção de semente para um coeficiente de supersaturação (SS) escolhido, e a faixa de Brix entre SS 1,0 e 1,3;
- acompanha a semeadura e a lavagem com cronômetros que avisam cada etapa;
- registra cada batelada com parâmetros, resultados e observações do cozimento;
- compara meses inteiros de cristalização em gráficos e tabelas de resumo.

## Funcionalidades

**Cálculo**
- Composição de xarope e mel por regra da alavanca, com conversão para volume pela densidade.
- Brix de saturação (SS = 1,0), Brix de injeção para o SS alvo e limites mínimo (SS 1,0) e máximo (SS 1,3).
- Alerta de zona: abaixo de 1,0 indica risco de dissolução de cristais; acima de 1,3 indica risco de falso grão.
- Campos com limites de validação; valores fora da faixa são ajustados.

**Cronômetros da batelada**
- Semeadura (padrão 2 min, com feed fechado). Ao terminar, pergunta se os cristais estão visíveis.
- Lavagem (padrão 45 min), liberada apenas se a semente foi confirmada.
- Alarme sonoro, vibração e destaque visual. Os cronômetros continuam certos mesmo com a tela bloqueada e são recuperados ao recarregar a página.

**Registro de bateladas**
- Parâmetros de entrada, resultados e observações (Brix real da semeadura, faixa e tempo de lavagem, semente visível, definição do cristal de 1 a 5, cristais espontâneos, notas).
- Salvamento manual e automático: após 1 min sem alterações, o processo atual é gravado. Registros automáticos consecutivos se substituem, para não lotar o histórico.
- Exclusão de um registro específico, com confirmação em dois cliques.

**Gráfico e comparação mensal**
- Purezas do xarope e do mel, Brix do xarope e do mel, SP Pureza Mistura e SS alvo por dia do mês.
- Comparação com um segundo mês, em linhas mais claras e tracejadas.
- Séries podem ser ligadas e desligadas.
- Tabela com médias do mês e diferença entre meses.
- Janela ampliada do gráfico.

**Armazenamento e exportação**
- Gravação automática em arquivo `historico_cristalizacao.json` dentro de uma pasta escolhida pelo usuário (Chrome ou Edge no computador).
- Backup em JSON e importação de backup, em qualquer navegador.
- Exportação CSV com separador `;` e decimal com vírgula, pronta para o Excel em português.
- Envio do resumo da batelada por e-mail (abre o cliente de e-mail padrão).

## Como usar

1. Baixe o arquivo `index.html`.
2. Abra no navegador (Chrome ou Edge recomendados).
3. Preencha as análises de xarope e de mel e os set points. A composição e o Brix são atualizados na hora.
4. Para registrar a batelada, use **Salvar** ou deixe o salvamento automático agir após 1 min sem alterações.
5. Para gravar em arquivo, clique em **📁 Pasta de dados** e escolha a pasta onde o `index.html` está. Ao reabrir a página, pode ser preciso clicar de novo para reconectar a pasta, por exigência de segurança do navegador.

Se o navegador não permitir gravação em pasta (Firefox, Safari ou celular), use **⬇ Backup** e **⬆ Importar**.

## Armazenamento dos dados

| Onde | Como | Observação |
|---|---|---|
| Navegador | `localStorage` | Dados ficam só naquele navegador. Limpar os dados do navegador apaga o histórico. |
| Pasta escolhida | Arquivo `historico_cristalizacao.json` | Requer Chrome ou Edge no computador e a permissão da pasta. |
| Backup | Arquivo `.json` baixado | Funciona em qualquer navegador. Importar **substitui** o histórico atual. |

## Limitações conhecidas

- O cálculo do Brix de saturação usa uma fórmula linear simplificada em função da temperatura e da pureza da mistura. Ela não aplica a correção de impurezas da correlação completa de solubilidade. Recomenda-se validar com medições de laboratório antes de usar em decisões de processo.
- O programa não se conecta a sistemas de supervisão (como WinCC). Os valores são digitados ou importados.
- Não há autenticação nem controle de acesso: qualquer pessoa com acesso ao computador vê o histórico.
- O limite de alarmes e de lembretes depende do navegador e das configurações de som e de notificação do aparelho.

## Instalar como aplicativo

O painel pode ser instalado no computador ou no celular como um aplicativo, com ícone próprio e janela sem barra de endereço.

- **Android (Chrome):** menu ⋮ → *Instalar aplicativo* ou *Adicionar à tela inicial*.
- **Computador (Chrome ou Edge):** ícone de instalação na barra de endereço, ou menu → *Instalar Painel de Cristalização*.
- **iPhone (Safari):** botão Compartilhar → *Adicionar à Tela de Início*.

A instalação exige que a página seja servida por HTTPS (por exemplo, GitHub Pages) ou aberta em `localhost`. Abrindo o arquivo direto do disco, o aplicativo funciona, mas não pode ser instalado.

## Estrutura

```
index.html            # aplicação completa (HTML, CSS e JavaScript)
manifest.webmanifest  # configuração do aplicativo instalável
icons/                # ícones do aplicativo (192, 512, 180 e versão maskable)
README.md             # esta documentação
```

## Direitos autorais

© 2026 Maycon Willian de Lima Santos. Todos os direitos reservados.

Nenhuma licença de uso, cópia ou distribuição é concedida além do que o autor autorizar expressamente.
