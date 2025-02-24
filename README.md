## 📌 Cálculo do Índice de Massa Corporal (IMC)

Este projeto consiste em uma aplicação em **JavaScript** que calcula o **Índice de Massa Corporal (IMC)** de um usuário com base em sua altura e peso, classificando-o de acordo com as faixas estabelecidas pela **Organização Mundial da Saúde (OMS)**.

---

### 🎯 **Objetivo**
Criar uma aplicação que solicite informações do usuário, calcule o IMC e retorne a classificação correspondente.

---

### 📝 **Regras de Cálculo**
1. O sistema solicita ao usuário:
   - Nome
   - Altura (em centímetros)
   - Peso (em quilogramas)
   
2. A altura é convertida para metros (dividindo por 100).  
3. O IMC é calculado pela fórmula:  
   \[
   IMC = \frac{\text{peso}}{\text{altura}^2}
   \]
4. O resultado é classificado nas seguintes faixas:
   - **IMC < 16** → Baixo peso muito grave
   - **16 ≤ IMC < 16.99** → Baixo peso grave
   - **17 ≤ IMC < 18.49** → Baixo peso
   - **18.50 ≤ IMC < 24.99** → Peso normal
   - **25 ≤ IMC < 29.99** → Sobrepeso
   - **30 ≤ IMC < 34.99** → Obesidade grau I
   - **35 ≤ IMC < 39.99** → Obesidade grau II
   - **IMC ≥ 40** → Obesidade grau III

---

### 📌 **Exemplo de Saída**
```
João possui índice de massa corporal igual a 22.3, sendo classificado como: Peso normal.
```

---

### 🚀 **Como Executar**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd nome-do-projeto
   ```
3. Abra o arquivo `index.html` no navegador ou execute o código JavaScript no terminal usando **Node.js**:
   ```bash
   node script.js
   ```

---

### 🛠 **Tecnologias Utilizadas**
- **JavaScript** (ECMAScript 6+)
- **HTML5** e **CSS3** (se necessário para interface)

---

### 📜 **Licença**
Este projeto foi desenvolvido para fins acadêmicos. Sinta-se à vontade para modificá-lo e utilizá-lo conforme necessário.

---
