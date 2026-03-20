# MDX Components Reference

All components live in `src/components/mdx/` and `src/components/`. Import them at the top of any `.mdx` file.

---

## Callout

Collapsible admonition box with icon and colored background tint. 24 variants available.

```mdx
import Callout from '@/components/Callout.astro'

<Callout variant="note" title="Optional title">
Content here. Supports **markdown**.
</Callout>

<Callout variant="warning">
Be careful with this approach.
</Callout>

<Callout variant="tip" defaultOpen={false}>
This starts collapsed.
</Callout>
```

**Props:**
- `variant` — `note` | `tip` | `warning` | `danger` | `important` | `definition` | `theorem` | `lemma` | `proof` | `corollary` | `proposition` | `axiom` | `conjecture` | `notation` | `remark` | `intuition` | `recall` | `explanation` | `example` | `exercise` | `problem` | `answer` | `solution` | `summary`
- `title` — optional subtitle shown after the variant name
- `defaultOpen` — boolean, default `true`

---

## Tabs / TabPanel

Tabbed content switcher. Useful for showing multiple approaches, languages, or before/after.

```mdx
import Tabs from '@/components/mdx/Tabs.astro'
import TabPanel from '@/components/mdx/TabPanel.astro'

<Tabs labels={["Python", "Sage", "Output"]}>
  <TabPanel>
    ```python
    print("hello")
    ```
  </TabPanel>
  <TabPanel>
    ```sage
    factor(n)
    ```
  </TabPanel>
  <TabPanel>
    The output is...
  </TabPanel>
</Tabs>
```

**Props (Tabs):**
- `labels` — string array, one per tab

---

## Steps / Step

Numbered walkthrough with auto-incrementing step counters.

```mdx
import Steps from '@/components/mdx/Steps.astro'
import Step from '@/components/mdx/Step.astro'

<Steps>
  <Step title="Decompile the binary">
    Open the binary in IDA and look at the main function.
  </Step>
  <Step title="Find the vulnerability">
    The buffer overflow is in `handle_input()`.
  </Step>
  <Step title="Write the exploit">
    Chain the ROP gadgets to get a shell.
  </Step>
</Steps>
```

**Props (Step):**
- `title` — optional step heading

---

## Spoiler

Click-to-reveal content. Good for flags, solutions, hints.

```mdx
import Spoiler from '@/components/mdx/Spoiler.astro'

<Spoiler label="Show flag">
  `flag{example_flag_here}`
</Spoiler>

<Spoiler label="Click for hint">
  Try looking at the binary's `.rodata` section.
</Spoiler>
```

**Props:**
- `label` — button text, default `"Reveal"`

---

## FileTree

Display directory structures with optional highlighting.

```mdx
import FileTree from '@/components/mdx/FileTree.astro'

<FileTree
  title="challenge"
  entries={[
    { name: "Dockerfile" },
    { name: "src/", children: [
      { name: "main.py", highlight: true },
      { name: "utils.py" },
      { name: "templates/", children: [
        { name: "index.html" }
      ]}
    ]},
    { name: "flag.txt", highlight: true },
  ]}
/>
```

**Props:**
- `title` — optional heading
- `entries` — array of `{ name: string, highlight?: boolean, children?: FileEntry[] }`

---

## Aside

A simple highlighted block for tangential notes or context. Lighter than a Callout.

```mdx
import Aside from '@/components/mdx/Aside.astro'

<Aside title="Why this matters">
  This technique is commonly used in real-world malware to evade detection.
</Aside>

<Aside>
  Just a quick note without a title.
</Aside>
```

**Props:**
- `title` — optional heading

---

## LinkCard

A styled link block for referencing external resources or other posts.

```mdx
import LinkCard from '@/components/mdx/LinkCard.astro'

<LinkCard
  href="https://github.com/example/repo"
  title="Example Repository"
  description="The source code for this challenge"
  external
/>

<LinkCard
  href="/blog/other-post"
  title="Related writeup"
  description="A deeper dive into the crypto"
/>
```

**Props:**
- `href` — URL
- `title` — link title
- `description` — optional subtitle
- `external` — boolean, opens in new tab

---

## Kbd

Keyboard key indicator. Inline component.

```mdx
import Kbd from '@/components/mdx/Kbd.astro'

Press <Kbd>Ctrl</Kbd> + <Kbd>C</Kbd> to copy.
```

---

## Built-in Markdown Features

These work without imports:

- **Code blocks** — triple backtick with language and optional `title=filename.py`
- **Math** — `$inline$` and `$$display$$` via KaTeX
- **Emoji** — `:emoji_name:` syntax
- **Images** — `![alt](./image.png)` relative to the post directory
- **Blockquotes** — `> quoted text` renders as a subtle bg-tinted block
