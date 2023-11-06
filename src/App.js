import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Por Todos - Um Guia de Desenvolvimento Inclusivo</h1>
      <span>
        Práticas para tornar sites acessíveis <strong>por todos</strong>.
      </span>
      <span className="dica">
        <strong>Dica:</strong> Para acessar, clique nos títulos e verifique os
        textos de apoio.
      </span>
      <h2>Recomendações</h2>
      <details>
        <summary>Imagens</summary>
        <p>
          Todas as imagens devem ter um atributo <strong>alt</strong>, pois
          serão alternativas não-visuais no formato de texto, para o caso de a
          imagem não estar disponível ou para que essas alternativas sejam
          utilizadas por leitores de tela.
        </p>
      </details>
      <details>
        <summary>Áudio e vídeo</summary>
        <p>
          Fornecer alternativas para conteúdos baseados em tempo (como vídeo e
          áudio), seja a transcrição, resumo ou explicação do que se trata.
        </p>
      </details>
      <details>
        <summary>Responsividade</summary>
        <p>
          Garantir que a aplicação se comportará de forma correta em quaisquer
          tamanhos de tela, sejam elas: monitores, notebooks, tablets,
          celulares, etc.
        </p>
      </details>
      <details>
        <summary>Interface</summary>
        <p>
          O uso de cores deve favorecer a distinção entre o texto e o plano de
          fundo, de forma que seja possível ler claramente. Observe o contraste
          mínimo para que seja possível utilizar o site ou aplicação.
        </p>
      </details>
      <details>
        <summary>Acessibilidade a partir do teclado</summary>
        <p>
          É essencial garantir que a aplicação é navegável a partir do teclado,
          para isso, você pode realizar testes de usabilidade.
        </p>
      </details>
      <details>
        <summary>
          Não criar conteúdo de uma forma conhecida por causar convulsões
        </summary>
        <p>
          Não incluir nenhum conteúdo que pisque mais de três vezes em um
          segundo.
        </p>
      </details>
      <details>
        <summary>Ajudar o usuário a navegar</summary>
        <p>
          Garantir que o usuário conseguirá navegar e localizar conteúdos
          facilmente.
        </p>
      </details>
      <details>
        <summary>Conteúdo legível</summary>
        <p>
          Tornar o conteúdo textual legível e compreensível. Algumas boas
          práticas são:
        </p>
        <ul>
          <li>Definir o idioma da aplicação</li>
          <li>
            Utilizar linguagem clara e simples ou fornecer um mecanismo para
            identificar palavras ou expressões incomuns.
          </li>
          <li>Fornecer o significado de abreviações.</li>
        </ul>
      </details>
      <details>
        <summary>Funcionamento previsível</summary>
        <p>
          Fazer com que o funcionmento e comportamento da aplicação seja quase
          previsível, de forma a facilitar a navegação do usuário.
        </p>
      </details>
      <details>
        <summary>Erros: Evitar e Corrigir</summary>
        <p>
          Ajudar os usuários a evitar erros e, em caso de ocorrência,
          corrigí-los. Isso pode ser alcançado a partir de testes de software,
          para garantir a qualidade da aplicação.
        </p>
      </details>
      <details>
        <summary>Compatibilidade e semântica</summary>
        <p>
          Ao utilizar linguagens de marcação, garantir que estão sendo
          utilizados elementos semânticos, de início e fim, e aninhados de
          acordo com as respectivas especificações.
        </p>
      </details>
      <h2>Referências</h2>
      <p>
        Todo o conteúdo disponível neste site foi construído com base no Web
        Content Accessibility Guidelines (WCAG) 2.0, disponibilizado{" "}
        <a
          href="https://www.w3.org/Translations/WCAG20-pt-br"
          target="_blank"
          rel="noreferrer"
        >
          neste link
        </a>
        .
      </p>
    </div>
  );
}

export default App;
