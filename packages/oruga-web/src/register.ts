const modules = import.meta.glob('../../oruga-next/src/components/*.vue')

for (const [path, loader] of Object.entries(modules)) {
  const tag = path.split('/').pop()?.replace('.vue', '').toLowerCase()
  loader().then((mod) => {
    const CustomElement = defineCustomElement(mod.default)
    customElements.define(`o-${tag}`, CustomElement)
  })
}

