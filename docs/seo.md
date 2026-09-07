# Sitemap, robots.txt e llms.txt

Os três endpoints são gerados estaticamente no build do Next.js, sem leitura da
árvore de rotas em produção. O domínio oficial fica em `lib/site.ts`.

- `/sitemap.xml`: 74 URLs inicialmente, sendo 68 páginas e seis igrejas.
- `/robots.txt`: permite rastreamento e informa a URL absoluta do sitemap.
- `/llms.txt`: guia em português com 21 links HTML e 28 materiais em Markdown.

## Manutenção do conteúdo

O cadastro explícito fica em `data/seo.ts`:

- `contentSections`: páginas centrais, com título e descrição, presentes tanto no
  sitemap quanto no llms.txt.
- `teachingMaterials`: materiais didáticos publicados. Cada slug deve ter uma
  página HTML e uma rota `.md` válidas. O sitemap usa o HTML; o llms.txt usa o
  Markdown. Preserve os slugs reais, mesmo quando diferem da grafia do título.
- `additionalSitemapPaths`: páginas de detalhe de cursos e planos de leitura que
  entram apenas no sitemap. O llms.txt aponta para seus catálogos.

Novas igrejas são incluídas automaticamente a partir de `data/churches/index.ts`.
Ao publicar ou remover páginas, atualize o cadastro correspondente e gere um novo
build. O cadastro não é preenchido automaticamente por arquivos encontrados no
projeto: uma rota só deve entrar quando seu conteúdo estiver publicado.

Use URLs do domínio oficial, sem parâmetros, fragmentos ou barra final nas
páginas internas. Não cadastre quizzes, páginas temporárias, exemplos, diagnósticos,
redirecionamentos ou links externos. Arquivos `.md` e `/llms.txt` não entram no
sitemap. O endereço antigo `curso-apocalipse` é omitido em favor de `apocalipse`.

## Regras de indexação

As páginas `/version`, `/projetos` e `/projetos/projeto-exemplo` têm
`noindex, follow` definido individualmente nos metadados. Elas continuam
acessíveis aos robôs para leitura dessa diretiva.

`/projetos` está excluída porque lista apenas o projeto de exemplo. Quando houver
conteúdo definitivo, remova o `noindex` da página que for publicada e cadastre sua
URL. `/projeto-expansao` já está incluída.

O sitemap não declara `lastmod`, pois o conteúdo não tem datas confiáveis de
alteração. Não use a data do build, o horário atual ou o mtime dos arquivos como
substitutos. `priority` e `changefreq` são omitidos porque o Google os ignora.

O llms.txt é um guia de conteúdo para assistentes; não controla permissões de
rastreamento nem garante posicionamento ou citações.

## Verificação local

Execute `npm run typecheck` e `npm run build`. Para verificar o build localmente,
execute `PORT=3100 HOSTNAME=127.0.0.1 node .next/standalone/server.js` e consulte
os três endpoints em `http://127.0.0.1:3100`.

Confirme respostas HTTP 200, XML válido no sitemap, texto simples em UTF-8 no
llms.txt e a URL correta em robots.txt. Verifique ausência de URLs repetidas ou
excluídas, resolva todos os links sem seguir redirecionamentos e confira os
metadados `noindex` das três páginas indicadas. As páginas do sitemap não devem
ter `noindex`. Confira também se cada link Markdown entrega o material descrito.

Publicação e envio ao Google Search Console são etapas separadas.

Referências: [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
e [proposta llms.txt](https://llmstxt.org/).
