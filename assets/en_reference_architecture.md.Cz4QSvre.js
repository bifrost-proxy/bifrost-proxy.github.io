import{_ as e,o as a,c as n,ag as t}from"./chunks/framework.CMYkYJvz.js";const m=JSON.parse('{"title":"Project Structure","description":"Repository layout and core module descriptions.","frontmatter":{"title":"Project Structure","description":"Repository layout and core module descriptions.","editLink":false},"headers":[],"relativePath":"en/reference/architecture.md","filePath":"en/reference/architecture.md"}'),i={name:"en/reference/architecture.md"};function o(c,s,l,r,p,d){return a(),n("div",null,[...s[0]||(s[0]=[t(`<blockquote><p>This page is automatically synced from <code>docs-en/architecture.md</code>. Language: <strong>English</strong> | <a href="./../../reference/architecture">中文</a></p></blockquote><h1 id="project-structure-and-modules" tabindex="-1">Project Structure and Modules <a class="header-anchor" href="#project-structure-and-modules" aria-label="Permalink to &quot;Project Structure and Modules&quot;">​</a></h1><p>Bifrost is organized as a Rust workspace plus Web, desktop, documentation, and test packages.</p><div class="language-text vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── crates/</span></span>
<span class="line"><span>│   ├── bifrost-core/</span></span>
<span class="line"><span>│   ├── bifrost-command/</span></span>
<span class="line"><span>│   ├── bifrost-proxy/</span></span>
<span class="line"><span>│   ├── bifrost-tls/</span></span>
<span class="line"><span>│   ├── bifrost-storage/</span></span>
<span class="line"><span>│   ├── bifrost-script/</span></span>
<span class="line"><span>│   ├── bifrost-admin/</span></span>
<span class="line"><span>│   ├── bifrost-cli/</span></span>
<span class="line"><span>│   ├── bifrost-power/</span></span>
<span class="line"><span>│   ├── bifrost-e2e/</span></span>
<span class="line"><span>│   ├── bifrost-tests/</span></span>
<span class="line"><span>│   ├── bifrost-sync/</span></span>
<span class="line"><span>│   ├── agent/</span></span>
<span class="line"><span>│   └── skills/</span></span>
<span class="line"><span>├── web/</span></span>
<span class="line"><span>├── desktop/</span></span>
<span class="line"><span>├── docs/</span></span>
<span class="line"><span>├── docs-en/</span></span>
<span class="line"><span>├── site/</span></span>
<span class="line"><span>├── e2e-tests/</span></span>
<span class="line"><span>└── tests/</span></span></code></pre></div><h2 id="module-summary" tabindex="-1">Module Summary <a class="header-anchor" href="#module-summary" aria-label="Permalink to &quot;Module Summary&quot;">​</a></h2><ul><li><code>bifrost-core</code>: rule parsing, matchers, and protocol definitions.</li><li><code>bifrost-command</code>: shared remote invoke command payloads and result models.</li><li><code>bifrost-proxy</code>: HTTP, HTTPS, SOCKS5, WebSocket, and tunnel handling.</li><li><code>bifrost-tls</code>: CA generation, dynamic certificate signing, and caching.</li><li><code>bifrost-storage</code>: persisted config, rules, Values, and state.</li><li><code>bifrost-script</code>: QuickJS script engine and sandbox runtime.</li><li><code>bifrost-admin</code>: Admin API and static Web UI serving.</li><li><code>bifrost-cli</code>: command-line service lifecycle, rules, traffic, and config management.</li><li><code>bifrost-power</code>: macOS keep-awake integration.</li><li><code>bifrost-e2e</code> and <code>bifrost-tests</code>: test runners and helpers.</li><li><code>bifrost-sync</code>: remote sync for rules and config.</li><li><code>agent</code>: agent runtime and built-in tools.</li><li><code>skills</code>: Agent Skill templates installed by <code>bifrost install-skill</code>.</li></ul>`,6)])])}const f=e(i,[["render",o]]);export{m as __pageData,f as default};
